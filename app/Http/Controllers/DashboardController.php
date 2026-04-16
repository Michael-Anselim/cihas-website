<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Post;
use App\Models\Program;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $departments = Department::query()->where('status', 'active')->count();
        $posts = Post::count();
        $programs = Program::query()->where('status', 'active')->count();

        return inertia('dashboard', compact('departments', 'posts', 'programs'));
    }
}
