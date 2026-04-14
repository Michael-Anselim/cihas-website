<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\WebController;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

// Website pages
Route::get('/about-us', [WebController::class, 'aboutUs'])->name('about-us');
Route::get('/admission', [WebController::class, 'admission'])->name('admission');
Route::get('/academic', [WebController::class, 'academic'])->name('academic');
Route::get('/news-events', [WebController::class, 'newsEvents'])->name('news-events');
Route::get('/ict-services', [WebController::class, 'ictServices'])->name('ict-services');
Route::get('/galery', [WebController::class, 'gallery'])->name('galery');
Route::get('/contact-us', [WebController::class, 'contactUs'])->name('contact-us');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
