<?php

namespace App\Http\Controllers;

use App\Http\Requests\Galery\StoreGaleryRequest;
use App\Http\Requests\Galery\UpdateGaleryRequest;
use App\Models\Galery;
use App\Services\GaleryService;
use Inertia\Inertia;

class GaleryController extends Controller
{
    public function __construct(private readonly GaleryService $service) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galeiries = $this->service->index();

        return Inertia::render('galery/index', compact('galeiries'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('galery/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGaleryRequest $request)
    {
        $this->service->store($request->validated());

        return redirect()
            ->route('galery.index')
            ->with('success', 'Gallery image successfully uploaded');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Galery $galery)
    {
        return Inertia::render('galery/edit', compact('galery'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGaleryRequest $request, Galery $galery)
    {
        $this->service->update($galery, $request->validated());

        return redirect()
            ->route('galery.index')
            ->with('success', 'Gallery image successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Galery $galery)
    {
        $this->service->delete($galery);

        return redirect()
            ->route('galery.index')
            ->with('success', 'Gallery image successfully deleted');
    }
}
