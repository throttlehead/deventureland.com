<script type="text/template" id="contact_form_t">
	<div class="container-fluid">
		<div class="row">
			<div class="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1">
				<div class="text-xs-center">
					<div class="card-block">Send me a brief message and I'll get back to you as soon as possible!</div>
				</div>
				<form name="message_form" id="messageForm">
				  <div class="form-group">
				    <label for="contactName"><h5>Name</h5></label>
				    <input type="text" class="form-control form-control-lg" id="contactName" placeholder="Jon Doe" name="name">
				  </div>
				  <div class="form-group">
				    <label for="contactEmail"><h5>Email</h5></label>
				    <input type="email" class="form-control form-control-lg" id="contactEmail" placeholder="example@gmail.com" name="email">
				  </div>
				  <div class="form-group">
				    <label for="contactMessage"><h5>Message</h5></label>
				    <textarea class="form-control form-control-lg" id="contactMessage" placeholder="Type a message" name="message" rows="4"></textarea>
				  </div>
				  <div class="form-btn-row clearfix">
					  <button type="button" class="btn btn-primary btn-lg pull-right submit_btn"><span class="glyphicons glyphicons-envelope"></span> <span>Send message</span></button>
					  <button type="button" class="btn btn-clear btn-lg pull-right cancel_btn"> Cancel</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
	<div class="hide_btn"><span class="glyphicons glyphicons-remove"></span></div>
</script>