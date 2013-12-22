// Start the main app logic.
define(['moment', 'ui/toggle_content_button', 'hbs!templates/basic'], function (moment, ToggleContentButton, templateOne) {
  $('.container').html(templateOne({
    time: moment(Date.now()).toString()
  }));
  ToggleContentButton.attachTo('.container>div');
});