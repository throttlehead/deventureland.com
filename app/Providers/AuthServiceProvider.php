<?php

namespace App\Providers;

use Auth;
use App\Services\Auth\DashboardGuard;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        Auth::extend('dashboard', function($app, $name, array $config) {
            return new DashboardGuard(Auth::createUserProvider($config['provider']));
        });
    }

    /**
     * Register bindings in the container.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}