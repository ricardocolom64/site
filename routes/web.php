<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/projects/site', function () {
    return Inertia::render('projects/Site');
})->name('site');

Route::get('/projects/hha-pay', function () {
    return Inertia::render('projects/HHAPay');
})->name('hha-pay');

Route::get('/projects/truth-or-drink', function () {
    return Inertia::render('projects/TruthOrDrink');
})->name('truth-or-drink');

Route::get('/projects/atmf', function () {
    return Inertia::render('projects/ATMF');
})->name('atmf');
