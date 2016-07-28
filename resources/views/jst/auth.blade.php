<script type="text/template" id="login_t">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-8 col-md-10 col-sm-12 offset-md-1 offset-lg-2">
				<div class="card card-brand center-card">
					<div class="card-block">
						<form role="form" method="POST" action="{{ url('/login') }}">
							{{ csrf_field() }}
							<div class="form-group">
								<label for="email" class="control-label">Email</label>
								<input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}">
								@if ($errors->has('email'))
									<div class="alert alert-danger">
										<strong>{{ $errors->first('email') }}</strong>
									</div>
								@endif
							</div>
							<div class="form-group">
								<label for="password" class="control-label">Password</label>
								<input id="password" type="password" class="form-control" name="password">
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
									<i class="fa fa-btn fa-sign-in"></i> Login
								</button>
								<!--<a class="btn btn-link" href="{{ url('/password/reset') }}">Forgot Your Password?</a>-->
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</script>

<script type="text/template" id="password_reset_t">
	<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/reset') }}">
		{{ csrf_field() }}
		<input type="hidden" name="token" value="{{ isset($token) ? $token : '' }}">
		<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
			<label for="email" class="col-md-4 control-label">E-Mail Address</label>
			<div class="col-md-6">
				<input id="email" type="email" class="form-control" name="email" value="{{ $email or old('email') }}">
				@if ($errors->has('email'))
					<span class="help-block">
						<strong>{{ $errors->first('email') }}</strong>
					</span>
				@endif
			</div>
		</div>
		<div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
			<label for="password" class="col-md-4 control-label">Password</label>
			<div class="col-md-6">
				<input id="password" type="password" class="form-control" name="password">
				@if ($errors->has('password'))
				<span class="help-block">
					<strong>{{ $errors->first('password') }}</strong>
				</span>
				@endif
			</div>
		</div>
		<div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
			<label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>
			<div class="col-md-6">
				<input id="password-confirm" type="password" class="form-control" name="password_confirmation">
				@if ($errors->has('password_confirmation'))
					<span class="help-block">
						<strong>{{ $errors->first('password_confirmation') }}</strong>
					</span>
				@endif
			</div>
		</div>
		<div class="form-group">
			<div class="col-md-6 col-md-offset-4">
				<button type="submit" class="btn btn-primary">
					<i class="fa fa-btn fa-refresh"></i> Reset Password
				</button>
			</div>
		</div>
	</form>
</script>

<script type="text/template" id="password_email_t">
	@if (session('status'))
		<div class="alert alert-success">
	{{ session('status') }}
		</div>
	@endif
	<form class="form-horizontal" role="form" method="POST" action="{{ url('/password/email') }}">
		{{ csrf_field() }}
		<div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
			<label for="email" class="col-md-4 control-label">E-Mail Address</label>
			<div class="col-md-6">
				<input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}">
				@if ($errors->has('email'))
					<span class="help-block">
						<strong>{{ $errors->first('email') }}</strong>
					</span>
				@endif
			</div>
		</div>
		<div class="form-group">
			<div class="col-md-6 col-md-offset-4">
				<button type="submit" class="btn btn-primary">
					<i class="fa fa-btn fa-envelope"></i> Send Password Reset Link
				</button>
			</div>
		</div>
	</form>
</script>