<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/projects/site', function () {
    return Inertia::render('Projects/Site');
})->name('site');

Route::get('/projects/hha-pay', function () {
    return Inertia::render('Projects/HHAPay');
})->name('hha-pay');

Route::get('/projects/truth-or-drink', function () {
    return Inertia::render('Projects/TruthOrDrink');
})->name('truth-or-drink');

Route::get('/projects/atmf', function () {
    return Inertia::render('Projects/ATMF');
})->name('atmf');
