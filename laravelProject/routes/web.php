<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\Usuario;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/crypto')->group(
    function () {
    Route::get('/', [Controller::class , "customMethod"]);
    Route::get('/about', [Controller::class , "cdnCustom"]);
    Route::get('/caching', 'WelcomeController@about');
    Route::get('/contact', 'WelcomeController@contact');

});


Route::prefix('usuario')->group(function () {

    Route::get('/', function() {
        return "Hola desde la ruta usuario";
    });

    Route::get('/user/{id}', function($id) {

        return view('usuario', [
            'controller' => Controller::class,
            'method' => 'pepeCustom',
            'hello' => 'hello world',
            'id'    => $id
        ]);
    });

    Route::get('/pepe' ,[ Usuario::class, "pepeCustom" ]);


});