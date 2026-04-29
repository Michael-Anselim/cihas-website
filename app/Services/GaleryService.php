<?php

namespace App\Services;

use App\Models\Galery;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;

final class GaleryService
{
    /**
     * Get all gallery images with pagination
     */
    public function index()
    {
        return QueryBuilder::for(Galery::class)
            ->allowedFilters('category')
            ->latest()
            ->paginate(12);
    }

    /**
     * Store a new gallery image
     */
    public function store(array $data): Galery
    {
        // Handle image upload
        $path = Storage::disk('public')
            ->put('gallery', $data['image']);

        $data['image_path'] = $path;
        unset($data['image']);

        return Galery::create($data);
    }

    /**
     * Update gallery image
     */
    public function update(Galery $galery, array $data): Galery
    {
        // Handle image upload if provided
        if (isset($data['image'])) {
            // Delete old image
            if ($galery->image_path) {
                Storage::disk('public')->delete($galery->image_path);
            }

            $path = Storage::disk('public')->put('gallery', $data['image']);
            $data['image_path'] = $path;
            unset($data['image']);
        }

        $galery->update($data);

        return $galery;
    }

    /**
     * Delete gallery image
     */
    public function delete(Galery $galery): void
    {
        // Delete image file
        if ($galery->image_path) {
            Storage::disk('public')->delete($galery->image_path);
        }

        $galery->delete();
    }
}
