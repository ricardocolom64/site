<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/projects/site', function () {
    return Inertia::render('projects/site');
})->name('site');

Route::get('/welcome', function () {
    return Inertia::render('welcome');
})->name('welcome');
