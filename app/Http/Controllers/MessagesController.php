<?php

namespace App\Http\Controllers;

use Mail;
use App\Models\Message;
use App\Http\Requests;
use Illuminate\Http\Request;

class MessagesController extends Controller
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

        $message = Message::create($request->all());

        $data = $message->toArray();
        $data['text'] = $data['message'];

        $subject = $request->input('name').' has sent you a message.';

        Mail::send('emails.message', $data, function ($m) use ($data, $subject) {
            $m->from($data['email'], $data['name']);
            $m->to('throttleheadwebdev@gmail.com', 'Jacob Smits')->subject($subject);
        });
    }
}
