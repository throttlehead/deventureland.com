<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * View for password request
     *
     * @var string
     */    
    protected $linkRequestView = 'home';    

    /**
     * View for password request
     *
     * @var string
     */    
    protected $resetView = 'home';

    /**
     * The guard configuration
     *
     * @var string
     */        
    protected $guard = 'dashboard';    

    /**
     * Redirect after successful reset
     *
     * @var string
     */    
    protected $redirectPath = '/dashboard';    

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('web');
    }
}
