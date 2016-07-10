<!DOCTYPE html>
<html>
  <head>
    <title>Deventureland</title>
    <meta name="description=" content="The works and musings of full-time web developer Jacob Smits.">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,300italic,900,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
  </head>
  <body>
  	<div class="templates" style="display:none">
	  	@include('jst.build')
  	</div>
  	<div id="app_container" style="display:none">
	    <div class="app" id="app"></div>
	  </div>
    <?php if (App::environment('production')) { ?>
      <script data-main="/app/deventureland.production.js" src="/app/libraries/require.js"></script>
    <?php } else { ?>
      <script data-main="/app/deventureland.develop.js" src="/app/libraries/require.js"></script>
    <?php } ?>  
  </body>
</html>