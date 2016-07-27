<?php

namespace App\Console\Commands;

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

			$user_check = User::where('email', $email)->first();
			if (isset($user_check)) {
				return $this->error('A user with the email address '.$email.' already exists!');
			}

			$password = $this->secret('Password:');
			$confirm_password = $this->secret('Confirm Password:');

			if ($password !== $confirm_password) {
				return $this->error('The passwords do not match!');
			}

			$first_name = trim($this->ask('First name:'));
			$last_name = trim($this->ask('Last name:'));

			User::create([
				'user_name'		=> $user_name,
				'email'				=> $email,
				'first_name'	=> $first_name,
				'last_name'		=> $last_name,
				'password'		=> bcrypt($password)
			]);

			$this->info('Created user '.$email);

    }
}
