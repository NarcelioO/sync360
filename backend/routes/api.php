<?php

use App\Http\Controllers\ApiUserController;
use Illuminate\Support\Facades\Route;


Route::apiResource('/users', ApiUserController::class)
    ->only(['index', 'store', 'show', 'update', 'destroy']);


