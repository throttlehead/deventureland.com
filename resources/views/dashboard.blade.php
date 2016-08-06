<!DOCTYPE html>
<html>
  <head>
    <title>Deventureland | The works and musings of full-time web developer Jacob Smits</title>
    <meta name="description" content="Deventureland | The works and musings of full-time web developer Jacob Smits.">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,300italic,900,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/app/css/glyphicons.css">
    <link rel="stylesheet" type="text/css" href="/app/css/social.css">
    <link rel="stylesheet" type="text/css" href="/app/libraries/animate.css/animate.css">
    <link rel="stylesheet" type="text/css" href="/app/libraries/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/app/libraries/slick-carousel/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="/app/libraries/slick-carousel/slick/slick-theme.css">
    <link rel="stylesheet" type="text/css" href="/app/css/app.css">
    @include('json.app_json')
    <script>
      window.Tether = {};
    </script>
    @include('plugins.rollbar')
  </head>
  <body>
    <div class="loader" id="appLoader" style="">
      <div class="svg"><img src="/img/svg/puff.svg" width="80" alt=""></div>
    </div>
  	<div class="templates" style="display:none">
	  	@include('jst.build')
  	</div>
  	<div id="app_container" style="display:none">
	    <div class="app" id="app"></div>
	  </div>
    <?php if (App::environment() === 'production' || config('app.debug') === false) { ?>
      <script data-main="/app/deventureland.production-build.js" src="/app/libraries/requirejs/require.js"></script>
    <?php } else { ?>
      <script data-main="/app/deventureland.develop.js" src="/app/libraries/requirejs/require.js"></script>
    <?php } ?>  
  </body>
</html>
