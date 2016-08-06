define([

  'notify'

], function( notify ){

  var Notify = {

    options: {

    },

    settings: {
      allow_dismiss: true,
      newest_on_top: true,
      placement: {
        from: 'top',
        align: 'center'
      },
      animate: {
        enter: 'animated bounceInDown',
        exit: 'animated fadeOut'
      },
      offset: {
        x: 0,
        y: 60
      },
      delay: 5000,
      element: 'body'
    },

    template: '<div data-notify="container" class="col-xs-11 col-sm-11 col-md-8 alert alert-{0} notify_alert" role="alert">'+
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">x</button>'+
      '<span data-notify="icon"></span>'+
      '<span data-notify="message">{2}</span>'+
      '<a href="{3}" target="{4}" data-notify="url"></a>'+
    '</div>',


    success: function( message, options, settings ) {
      this.showNotification( 'success', message, options, settings );
    },


    warning: function( message, options, settings ) {
      this.showNotification( 'warning', message, options, settings );
    },


    error: function( message, options, settings ) {
      this.showNotification( 'danger', message, options, settings );
    },


    info: function( message, options, settings ) { 
      this.showNotification( 'info', message, options, settings );
    },


    showNotification: function( type, message, options, settings ) {
      if ( typeof message !== 'string' ) {
        message = '';
      }

      var _options = _.clone( this.options );
      _.extend( _options, options );

      _options.message = message;

      var _settings = _.clone( this.settings );
      _.extend( _settings, settings );

      _settings.type = type;    
      _settings.template = this.template; 

      $.notify( _options, _settings);
    }

  }

  return Notify;

});