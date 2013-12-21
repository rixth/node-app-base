requirejs.config({
  baseUrl: '/javascript/',
  paths: {
    bootstrap: '../components/bootstrap/dist/js/bootstrap',
    'es5-shim': '../components/es5-shim/es5-shim',
    jquery: '../components/jquery/jquery',
    moment: '../components/moment/moment',
    requirejs: '../components/requirejs/require'
  }
});

requirejs(['main']);
