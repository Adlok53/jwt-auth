<?php


use Illuminate\Support\Facades\Route;

use App\Http\Middleware\CORS;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::group(['namespace' => 'User', 'prefix' => 'users'], function() {
            Route::get('/', 'IndexController');
        });
    });
});



Route::group(['namespace' => 'User', 'prefix' => 'users'], function() {
    Route::post('/', 'StoreController')->middleware(CORS::class);
});

