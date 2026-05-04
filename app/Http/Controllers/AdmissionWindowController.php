<?php

namespace App\Http\Controllers;

use App\Models\AdmissionWindow;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdmissionWindowController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admWindows = AdmissionWindow::query()
            ->select('id', 'academic_year', 'start_date', 'end_date', 'admission_window', 'status')
            ->orderByDesc('created_at')->paginate(10);

        return Inertia::render('admission/index', compact('admWindows'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admission/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'academic_year' => ['required', 'string', 'max:10'],
            'start_date' => ['required', 'date', 'after_or_equal:today'],
            'end_date' => ['required', 'date', 'after:start_date'],
            'admission_window' => ['required', 'string', 'in:first,second,third,fourth,fifth,late_admission'],
        ]);
        $validated['status'] = 'open';

        AdmissionWindow::create($validated);

        return redirect()->route('admission-windows.index')
            ->with('success', 'Admission window created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AdmissionWindow $admissionWindow)
    {
        return Inertia::render('admission/edit', compact('admissionWindow'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AdmissionWindow $admissionWindow)
    {
        $validated = $request->validate([
            'academic_year' => ['sometimes', 'string', 'max:10'],
            'start_date' => ['sometimes', 'date'],
            'end_date' => ['sometimes', 'date', 'after:start_date'],
            'admission_window' => ['sometimes', 'string', 'in:first,second,third,fourth,fifth,late_admission'],
            'status' => ['sometimes', 'string', 'in:open,closed,upcoming'],
        ]);

        $admissionWindow->update($validated);

        return redirect()->route('admission-windows.index')
            ->with('success', 'Admission window updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AdmissionWindow $admissionWindow)
    {
        $admissionWindow->delete();

        return redirect()->route('admission-windows.index')
            ->with('success', 'Admission window deleted successfully');
    }
}
