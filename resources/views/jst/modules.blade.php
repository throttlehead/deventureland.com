<script type="text/template" id="contact_form_t">
	<div class="row">
		<form class="col-lg-6 col-md-10 col-sm-12 col-lg-offset-3 col-md-offset-1">
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
	<div class="hide_btn"><span class="glyphicons glyphicons-remove"></span></div>
</script>