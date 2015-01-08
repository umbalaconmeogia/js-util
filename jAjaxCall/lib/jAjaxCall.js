/**
 * Class JAjaxCall
 * Ajax call wrapper base class.
 * Child class should override following methods if necessary.
 *   ajaxUrl: url to be called.
 *   ajaxSuccess() Default processing if success.
 *   ajaxError()   Default processing if error.
 * There should be another base class between this class and child classes,
 * in which method showDialog() is defined.
 */
var JAjaxCall = function() {};
JAjaxCall.prototype = {
  /**
   * URL to be called. Sub-class should override this method.
   * @return String
   */
  ajaxUrl: function() {
    return 'dummy';
  },

  /**
   * Process returned data when success. Sub-class should override this method.
   * @param Anything data
   * @param String textStatus
   * @param jqXHR jqXHR
   */
  ajaxSuccess: function(json, textStatus, jqXHR) {
  },

  /**
   * Process returned data when error. Sub-class should override this method.
   * @param jqXHR jqXHR
   * @param String textStatus
   * @param String errorThrown
   */
  ajaxError: function(jqXHR, textStatus, errorThrown) {
    alert(errorThrown);
  },

  /**
   * Call $.ajax() to specified url, with specified callback functions.
   * @param PlainObject settings
   */
  ajax: function(settings) {
    settings = $.extend({}, {
      url: this.ajaxUrl(),
      success: this.ajaxSuccess.bind(this),
      error: this.ajaxError.bind(this)
    }, settings);

    $.ajax(settings);
  },

  /**
   * Output log message to console of #logOutput
   * @param String message
   */
  log: function(message) {
    window.console && console.log(message);
    $('#logOutput').append(message + '<br />');
  }
};
