<script type="text/template" id="login_t">
	<div id="loginCard">
		<div class="center-card auth-card">
			<div class="card card-brand auth-card" style="display: none">
				<div class="card-block">
					<form role="form" method="POST" action="{{ url('/login') }}">
						{{ csrf_field() }}
						<div class="form-group">
							<label for="email" class="control-label">Email</label>
							<input id="email" type="email" class="form-control form-control-lg" name="email" value="{{ old('email') }}">
							@if ($errors->has('email'))
								<div class="alert alert-danger">
									<strong>{{ $errors->first('email') }}</strong>
								</div>
							@endif
						</div>
						<div class="form-group">
							<label for="password" class="control-label">Password</label>
							<input id="password" type="password" class="form-control form-control-lg" name="password">
							@if ($errors->has('password'))
								<div class="alert alert-danger">
									<strong>{{ $errors->first('password') }}</strong>
								</div>
							@endif
						</div>
						<div class="form-group">
							<div class="checkbox">
								<label>
									<input type="checkbox" name="remember"> Remember me
								</label>
							</div>
						</div>
						<div class="btn-row">
							<button type="submit" class="btn btn-primary btn-lg">
								<span class="glyphicons glyphicons-log-in"></span> <span>Login</span>
							</button>
							<a class="btn btn-link" href="{{ url('/password/send_reset') }}">Forgot Your Password?</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</script>

<script type="text/template" id="password_reset_t">
	<div id="passwordResetCard">
		<div class="center-card auth-card">
			<div class="card card-brand" style="display: none">
				<div class="card-block">
					<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/reset') }}">
						{{ csrf_field() }}
						<input type="hidden" name="token" value="{{ isset($token) ? $token : '' }}">
						<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
							<label for="email" class="control-label">E-Mail Address</label>
							<input id="email" type="email" class="form-control form-control-lg" name="email" value="{{ $email or old('email') }}" placeholder="name@example.com">
							@if ($errors->has('email'))
								<span class="help-block">
									<strong>{{ $errors->first('email') }}</strong>
								</span>
							@endif
						</div>
						<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
							<label for="password" class="control-label">Password</label>
							<input id="password" type="password" class="form-control form-control-lg" name="password">
							@if ($errors->has('password'))
							<span class="help-block">
								<strong>{{ $errors->first('password') }}</strong>
							</span>
							@endif
						</div>
						<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
							<label for="password-confirm" class="control-label">Confirm Password</label>
							<input id="password-confirm" type="password" class="form-control form-control-lg" name="password_confirmation">
							@if ($errors->has('password_confirmation'))
								<span class="help-block">
									<strong>{{ $errors->first('password_confirmation') }}</strong>
								</span>
							@endif
						</div>
						<div class="btn-row">
							<button type="submit" class="btn btn-primary btn-lg">
								<span class="glyphicons glyphicons-refresh"></span> <span>Reset Password</span>
							</button>
							<a class="btn btn-link" href="{{ url('/login') }}">Back to Login</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</script>

<script type="text/template" id="send_password_reset_t">
	<div id="sendResetCard">
		<div class="center-card auth-card">
			<div class="card card-brand" style="display: none">
				<div class="card-block">
					@if (session('status'))
						<div class="alert alert-success">
							{{ session('status') }}
						</div>
					@endif
					<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/send_reset') }}">
						{{ csrf_field() }}
						<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
							<label for="email" class="control-label">E-Mail Address</label>
							<input id="email" type="email" class="form-control form-control-lg" name="email" value="{{ old('email') }}" placeholder="name@example.com">
							@if ($errors->has('email'))
								<span class="help-block">
									<strong>{{ $errors->first('email') }}</strong>
								</span>
							@endif
						</div>
						<div class="btn-row">
							<button type="submit" class="btn btn-primary btn-lg">
								<span class="glyphicons glyphicons-envelope"></span> <span>Send Password Reset</span>
							</button>
							<a class="btn btn-link" href="{{ url('/login') }}">Back to Login</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</script>