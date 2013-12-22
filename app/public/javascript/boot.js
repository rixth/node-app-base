requirejs.config({
  baseUrl: '/javascript/',
  paths: {
    bootstrap: '../components/bootstrap/dist/js/bootstrap',
    'es5-shim': '../components/es5-shim/es5-shim',
    jquery: '../components/jquery/jquery',
    moment: '../components/moment/moment',
    requirejs: '../components/requirejs/require',
    flight: '../components/flight',
    handlebars: '../components/handlebars/handlebars',
    'jasmine-flight': '../components/jasmine-flight/lib/jasmine-flight',
    'jasmine-jquery': '../components/jasmine-jquery/lib/jasmine-jquery',
    'hbs': '../components/require-handlebars-plugin/hbs'
  },
  hbs: {
    partialsUrl: 'templates/partials'
  }
});

requirejs(['jquery', 'flight/lib/debug', 'main'], function ($, dbg) {
  dbg.enable(true);
  window.$ = $;
});
