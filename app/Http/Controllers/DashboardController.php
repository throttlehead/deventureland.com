<?php

namespace App\Http\Controllers;

use Response;
use Carbon\Carbon;
use App\Http\Requests;
use App\Http\Controllers\RestController;
use Illuminate\Http\Request;

class DashboardController extends RestController
{
    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
    	return view('dashboard');
    }
}
