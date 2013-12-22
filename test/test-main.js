'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/_spec\.js$/.test(file));
});

requirejs.config({
  baseUrl: '/base/app/public/javascript',

  paths: {
    bootstrap: '../components/bootstrap/dist/js/bootstrap',
    'es5-shim': '../components/es5-shim/es5-shim',
    jquery: '../components/jquery/jquery',
    moment: '../components/moment/moment',
    requirejs: '../components/requirejs/require',
    flight: '../components/flight'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});

jasmine.getFixtures().fixturesCache_ = Object.keys(window.__html__).reduce(function (map, name) {
  map[name.replace(/test\/fixtures\//, '')] = window.__html__[name];
  return map;
}, {});