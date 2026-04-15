<?php

namespace App\Http\Controllers;

use App\Http\Requests\Program\StoreProgramRequest;
use App\Http\Requests\Program\UpdateProgramRequest;
use App\Models\Department;
use App\Models\Program;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $programs = Program::with('department')
            ->select('id', 'name', 'type', 'levels', 'department_id', 'status')
            ->where('status', 'active')
            ->paginate(10);

        return Inertia::render('programs/index', compact('programs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::query()
            ->select('id', 'name')
            ->where('status', 'active')
            ->get();

        return Inertia::render('programs/create', compact('departments'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProgramRequest $request)
    {

        $validated = $request->validated();

        $path = Storage::disk('public')
            ->put('programs', $request->file('image'));

        $validated['image'] = $path;

        $validated['status'] = 'active';

        Program::create($validated);

        return redirect()
            ->route('programs.index')
            ->with('success', 'Program successfully created');
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
    public function edit(Program $program)
    {
        $departments = Department::query()
            ->select('id', 'name')
            ->where('status', 'active')->get();

        $program->image = Storage::url($program->image);

        return Inertia::render('programs/edit', compact('program', 'departments'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProgramRequest $request, Program $program)
    {
        $validated = $request->validated();

        $program->update($validated);

        return redirect()
            ->route('programs.index')
            ->with('success', 'Program successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Program $program)
    {
        $program->delete();

        // delete its files too
        Storage::disk('public')->delete($program->image);

        return redirect()
            ->route('programs.index')
            ->with('success', 'Program successfully deleted');
    }
}
