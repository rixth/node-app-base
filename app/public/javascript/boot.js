requirejs.config({
  baseUrl: '/javascript/',
  paths: {
    'moment': '../components/moment/moment'
  }
});

requirejs(['main']);
