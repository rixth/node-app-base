// Start the main app logic.
define(['moment'], function (moment) {
  document.querySelector('h1').innerHTML = moment(Date.now());
});