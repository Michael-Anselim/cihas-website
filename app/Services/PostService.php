<?php

namespace App\Services;

use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Spatie\QueryBuilder\QueryBuilder;

final class PostService
{
    // get posts
    public function index()
    {
        return QueryBuilder::for(Post::with('department'))
            ->allowedFilters('category')
            ->paginate(10);
    }

    // store post
    public function store(array $data): Post
    {
        // handle file uploads
        // immage
        $path = Storage::disk('public')
            ->put('postImages', $data['image']);

        $data['image'] = $path;

        // attachment
        $path = Storage::disk('public')
            ->put('postAttachments', $data['attachment']);

        $data['attachment'] = $path;

        return Post::create($data);
    }

    // update post
    public function update(Post $post, array $data): Post
    {
        // handle image upload if provided
        if (isset($data['image'])) {
            // delete old image
            if ($post->image) {
                Storage::disk('public')->delete($post->image);
            }
            
            $path = Storage::disk('public')->put('postImages', $data['image']);
            $data['image'] = $path;
        }

        // handle attachment upload if provided
        if (isset($data['attachment'])) {
            // delete old attachment
            if ($post->attachment) {
                Storage::disk('public')->delete($post->attachment);
            }
            
            $path = Storage::disk('public')->put('postAttachments', $data['attachment']);
            $data['attachment'] = $path;
        }

        $post->update($data);

        return $post;
    }

    // delete post
    public function delete(Post $post): void
    {
        // delete image if exists
        if ($post->image) {
            Storage::disk('public')->delete($post->image);
        }

        // delete attachment if exists
        if ($post->attachment) {
            Storage::disk('public')->delete($post->attachment);
        }

        $post->delete();
    }
}
