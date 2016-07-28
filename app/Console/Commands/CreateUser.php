<?php

namespace App\Console\Commands;

use Validator;
use App\User;
use Illuminate\Console\Command;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
		$user_name = trim($this->ask('User name:'));
		$email = trim($this->ask('Email address:'));
		$password = $this->secret('Password:');
		$password_confirmation = $this->secret('Confirm Password:');
		$first_name = trim($this->ask('First name:'));
		$last_name = trim($this->ask('Last name:'));

        $data = [
            'user_name' => $user_name,
            'email' => $email,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'password' => $password,
            'password_confirmation' => $password_confirmation
        ];

        $validator = $this->validator($data);

        if ($validator->fails()) {
            return $this->error($validator->messages()->first());
        }

        $data['password'] = bcrypt($password);

		User::create($data);

		$this->info('Created user '.$email);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(array $data) {
        return Validator::make($data, [
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'user_name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);
    }
}
