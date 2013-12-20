module.exports = function(app) {
  app.get('/', renderIndex);
};

function renderIndex(req, res) {
  res.render('index');
}