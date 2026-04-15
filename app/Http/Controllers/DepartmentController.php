<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $departments = Department::query()->where('status', 'active')->paginate(10);

        return Inertia::render('departments/index', compact('departments'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('departments/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', Rule::unique('departments', 'name')],
            'code' => ['required', 'string', 'max:10', 'uppercase', Rule::unique('departments', 'code')],
            'description' => 'nullable',
        ]);
        $validated['status'] = 'active';
        Department::create($validated);

        return redirect()->route('departments.index')->with('success', 'Department successfully creted');
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
    public function edit(Department $department)
    {
        return Inertia::render('departments/edit', compact('department'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Department $department, Request $request)
    {
        $validated = $request->validate([
            'name' => ['sometimes', 'string', 'max:255', Rule::unique('departments', 'name')->ignore($department->id, 'id')],
            'code' => ['sometimes', 'string', 'max:10', 'uppercase', Rule::unique('departments',
                'code')->ignore($department->id)],
            'description' => 'nullable',
            'status' => ['required', Rule::in(['active', 'inactive'])],
        ]);

        $department->update($validated);

        // return dd($validated);

        return redirect()->route('departments.index')->with('success', 'Department successfully updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();

        return redirect()->route('departments.index')->with('success', 'Department successfully deleted');
    }
}
