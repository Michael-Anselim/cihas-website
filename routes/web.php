<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;

Route::get('/', [WebController::class, 'home'])->name('home');

// Website pages
Route::get('/about-us', [WebController::class, 'aboutUs'])->name('about-us');
Route::get('/admission', [WebController::class, 'admission'])->name('admission');
Route::get('/academic', [WebController::class, 'academic'])->name('academic');
Route::get('/news-events', [WebController::class, 'newsEvents'])->name('news-events');
Route::get('/ict-services', [WebController::class, 'ictServices'])->name('ict-services');
Route::get('/galery', [WebController::class, 'gallery'])->name('galery');
Route::get('/contact-us', [WebController::class, 'contactUs'])->name('contact-us');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');

    // Departments
    Route::resource('departments', DepartmentController::class);

    // Programs
    Route::resource('programs', ProgramController::class);

    // Posts
    Route::resource('posts', PostController::class);
});

require __DIR__.'/settings.php';
