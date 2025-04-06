<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public routes (accessible to both guests and authenticated users)
Route::middleware('web')->group(function () {
    Route::get('/', function () {
        return Inertia::render('welcome');
    })->name('home');
});

// Protected routes (only for authenticated users)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
