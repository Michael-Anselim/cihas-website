<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Program;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WebController extends Controller
{
    public function home()
    {
        $programs = Program::query()
            ->with('department')
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        // Generate storage URLs for program images
        $programs->each(function ($program) {
            $program->image = $program->image ? Storage::url($program->image) : null;
        });

        $posts = Post::query()
            ->with('department')
            ->orderBy('date', 'desc')
            ->take(4)
            ->get();

        return Inertia::render('website/welcome', compact('programs', 'posts'));
    }

    public function aboutUs()
    {
        return Inertia::render('website/about-us');
    }

    public function admission()
    {
        return Inertia::render('website/admission');
    }

    public function academic()
    {
        $programs = Program::query()
            ->with('department')
            ->orderBy('name', 'asc')
            ->get();

        // Generate storage URLs for program images
        $programs->each(function ($program) {
            $program->image = $program->image ? Storage::url($program->image) : null;
        });

        return Inertia::render('website/academic', compact('programs'));
    }

    public function newsEvents()
    {
        $posts = Post::with('department')
            ->orderBy('date', 'desc')
            ->get()
            ->map(function ($post) {
                $post->image = $post->image ? Storage::url($post->image) : null;
                $post->attachment = $post->attachment ? Storage::url($post->attachment) : null;

                return $post;
            });

        return Inertia::render('website/news-events', ['posts' => $posts]);
    }

    public function ictServices()
    {
        return Inertia::render('website/ict-services');
    }

    public function gallery()
    {
        return Inertia::render('website/gallery');
    }

    public function contactUs()
    {
        return Inertia::render('website/contact-us');
    }
}
