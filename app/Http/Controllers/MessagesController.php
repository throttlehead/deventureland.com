<?php

namespace App\Http\Controllers;

use Mail;
use Validator;
use Response;
use Carbon\Carbon;
use App\Message;
use App\Http\Requests;
use App\Http\Controllers\RestController;
use Illuminate\Http\Request;

class MessagesController extends RestController
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function send(Request $request)
    {
        $this->validate($request, [
            'name'      => 'required|max:255|filled|bail',
            'email'     => 'required|email|filled|bail',
            'message'   => 'required|filled|bail'
        ]);

        if ($request->session()->has('message_last_sent')) {
            $last_sent = Carbon::parse($request->session()->get('message_last_sent'));
            if (Carbon::now()->subHour()->lt($last_sent)) {
                return $this->errorResponse('You cannot send more than 1 message an hour', 403);
            }          
        }

        $message = Message::create($request->all());

        $data = $message->toArray();
        $data['text'] = $data['message'];

        $subject = $request->input('name').' has sent you a message.';

        Mail::send('emails.message', $data, function ($m) use ($data, $subject) {
            $m->from($data['email'], $data['name']);
            $m->to('throttleheadwebdev@gmail.com', 'Jacob Smits')->subject($subject);
        });

        $request->session()->put('message_last_sent', Carbon::now()->toDateTimeString());

        return Response::json($message, 200);
    }
}
