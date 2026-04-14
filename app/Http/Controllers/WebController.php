<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class WebController extends Controller
{
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
