define([
  "jquery",
  "underscore",
  "backbone",
  "validate",
  "serializeJSON",
  "views/components/full.screen",
  "models/message"
], function($, _, Backbone, validate, serializeJSON, FullScreen, MessageModel){

  var ContactForm = FullScreen.extend({
    id: "contactForm",

    events: function(){
      return _.extend({}, FullScreen.prototype.events, {
        'click .cancel_btn': 'hide',
        'click .submit_btn': 'submit',
        'submit #messageForm': 'onSubmit'
      });
    },


    initialize: function(options) {
      FullScreen.prototype.initialize.apply(this, arguments);
      this.initModel();
      this.initListeners();
    },


    render: function() {
      var template = _.template( window.templates.find("#contact_form_t").html(), {});
      this.$el.html( template );
      return this;
    },


    initModel: function() {
      this.model = new MessageModel();
    },


    initListeners: function() {},


    submit: function() {
      return this.validate();      
    },


    validate: function() {
      this.validator = new FormValidator('message_form', [{
        name: 'name',
        rules: 'required|max_length[255]|min_length[1]'
      }, {
        name: 'email',
        rules: 'required|max_length[255]|min_length[1]|valid_email'
      }, {
        name: 'message',
        rules: 'required|min_length[1]'
      }], $.proxy(this.handleValidation, this));

      return this.$el.find('#messageForm').submit();
    },


    handleValidation: function(errors, e) {
      e.preventDefault();

      if (errors.length <= 0) {
        return this.formValid();
      }

      return this.showErrors(errors);
    },


    formValid: function() {
      this.save();
    },


    showErrors: function(errors) {
      _.each(errors, function(error) {
        $(error.element).parent().append('<div class="alert alert-danger">'+error.message+'</div>');

        $(error.element).on('keyup', function(e) {
          $(e.currentTarget).siblings('.alert').fadeOut(250, function() {
            $(this).remove();
          });
        });
      });
    },


    save: function() {
      this.showLoader();

      var data = this.$el.find('#messageForm').serializeJSON({parseBooleans: true, parseNumbers: true});

      this.model.save(data, {
        success: $.proxy(this.onSaveSuccess, this),
        error: $.proxy(this.onSaveError, this),
      });
    },


    onSaveSuccess: function(model) {
      this.hideLoader();
      this.hide();
    },


    onSaveError: function(model, response) {
      this.hideLoader();
      this.hide();
    },


    onHide: function() {
      var self = this;
      
      setTimeout(function() {
        self.$el.find('.alert').remove();
        self.$el.find('input, textarea').val('');
      }, 1000)
    }


  });

  return ContactForm;

});