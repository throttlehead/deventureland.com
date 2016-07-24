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
      '<strong data-notify="title">{1}</strong>&nbsp;'+
      '<span data-notify="message">{2}</span>'+
      '<a href="{3}" target="{4}" data-notify="url"></a>'+
    '</div>',


    success: function( title, message, options, settings ) {
      this.showNotification( 'success', title, message, options, settings );
    },


    warning: function( title, message, options, settings ) {
      this.showNotification( 'warning', title, message, options, settings );
    },


    error: function( title, message, options, settings ) {
      this.showNotification( 'danger', title, message, options, settings );
    },


    info: function( title, message, options, settings ) { 
      this.showNotification( 'info', title, message, options, settings );
    },


    showNotification: function( type, title, message, options, settings ) {
      if ( typeof title !== 'string' ) {
        title = '';
      }      

      if ( typeof message !== 'string' ) {
        message = '';
      }

      var _options = _.clone( this.options );
      _.extend( _options, options );

      _options.title = title;
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