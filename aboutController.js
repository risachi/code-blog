(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('body > div').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
