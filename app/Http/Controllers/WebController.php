<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Inertia\Inertia;

class WebController extends Controller
{
    public function home()
    {
        $programs = Program::query()
            ->with('department')
            ->take(3)
            ->get();

        return Inertia::render('website/welcome', compact('programs'));
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
        return Inertia::render('website/academic');
    }

    public function newsEvents()
    {
        return Inertia::render('website/news-events');
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
