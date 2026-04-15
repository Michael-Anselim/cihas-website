<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return 'departments';
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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

        Department::create($validated);
        return 'departments created';
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
         return $department;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Department $department, Request $request)
    {
        $validated = $request->validate([
        'name' => ['required', 'string', 'max:255', Rule::unique('departments', 'name')],
        'code' => ['required', 'string', 'max:10', 'uppercase', Rule::unique('departments', 'code')],
        'description' => 'nullable',
        'status' => ['required', Rule::in(['active', 'inactive'])],
        ]);

        $department->update($validated);
        return 'departments updated';

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        $department->delete();
        return 'departments deleted';
    }
}