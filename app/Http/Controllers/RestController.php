<?php

namespace App\Http\Controllers;

use Response;
use App\Http\Requests;

abstract class RestController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  string  $error
     * @param  integer  $status
     * @return \Illuminate\Http\Response
     */
    public function errorResponse($error, $status) {
        return Response::json(['error' => $error], $status);
    }
}
