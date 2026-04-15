<?php

namespace App\Http\Controllers;

use App\Models\Department;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $departments = Department::query()->where('status', 'active')->count();

        return inertia('dashboard', compact('departments'));
    }
}
