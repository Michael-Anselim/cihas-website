<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\StorePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Department;
use App\Models\Post;
use App\Services\PostService;
use Inertia\Inertia;

class PostController extends Controller
{
    // constructor method
    public function __construct(private readonly PostService $service) {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = $this->service->index();

        return Inertia::render('posts/index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $departments = Department::query()
            ->select('id', 'name')
            ->where('status', 'active')
            ->get();

        return Inertia::render('posts/create', compact('departments'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $this->service->store($request->validated());

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post successfully created and its now visible on your website');
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
    public function edit(Post $post)
    {
        $departments = Department::query()
            ->select('id', 'name')
            ->where('status', 'active')
            ->get();

        return Inertia::render('posts/edit', compact('post', 'departments'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $this->service->update($post, $request->validated());

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $this->service->delete($post);

        return redirect()
            ->route('posts.index')
            ->with('success', 'Post successfully deleted');
    }
}
