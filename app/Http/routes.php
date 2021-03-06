<?php

use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => ['web']], function () {
	Route::get('/', function () {
	  return view('home');
	});

	Route::get('/home', function () {
	  return view('home');
	});

	Route::get('/404', function () {
	  return view('home');
	});

	Route::get('/login', function () {
		return view('home');
	});

	Route::post('/login', 'AuthController@postLogin');
	Route::get('/logout', 'AuthController@logout');

	Route::get('/password/send_reset', 'PasswordController@showLinkRequestForm');
	Route::post('/password/send_reset', 'PasswordController@sendResetLinkEmail');
	Route::get('/password/reset/{token}', 'PasswordController@showResetForm');
	Route::post('/password/reset', 'PasswordController@reset');

	Route::post('/message', 'MessagesController@send');

	Route::get('/sitemap.xml', function() {
	  $sitemap = App::make("sitemap");
	  $sitemap->add(URL::to('/'), Carbon::now(), '1.0', 'daily');
	  return $sitemap->render('xml');
	});	
});

Route::group(['middleware' => ['dashboard']], function () {
	Route::get('/dashboard', 'DashboardController@show');
});