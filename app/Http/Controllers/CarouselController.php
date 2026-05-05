<?php

namespace App\Http\Controllers;

use App\Models\Carousel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $carousels = Carousel::query()
            ->select('id', 'image_path', 'description')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('carousel/index', compact('carousels'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('carousel/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'image_path' => ['required', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
            'description' => ['required', 'string', 'max:100'],
        ]);

        $path = Storage::disk('public')
            ->put('carouselImages', $validated['image_path']);
        $validated['image_path'] = $path;

        Carousel::create($validated);

        return redirect()
            ->route('carousel.index')
            ->with('success', 'Image added successfully');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Carousel $carousel)
    {
        return Inertia::render('carousel/edit', compact('carousel'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Carousel $carousel)
    {
        $validated = $request->validate([
            'image_path' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
            'description' => ['required', 'string', 'max:100'],
        ]);

        if ($request->hasFile('image_path')) {
            Storage::disk('public')->delete($carousel->image_path);
            $path = Storage::disk('public')
                ->put('carouselImages', $validated['image_path']);
            $validated['image_path'] = $path;
        } else {
            unset($validated['image_path']);
        }

        $carousel->update($validated);

        return redirect()
            ->route('carousel.index')
            ->with('success', 'Image updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Carousel $carousel)
    {
        Storage::disk('public')->delete($carousel->image_path);
        $carousel->delete();

        return redirect()
            ->route('carousel.index')
            ->with('success', 'Image deleted successfully');
    }
}
