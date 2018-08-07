'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)({
  allowedHeaders: 'Content-Type, authorization',
  methods: ['GET, POST, PUT, DELETE', 'OPTIONS']
}));

/**
 * if the node env is in production then w're serving from the transpiled folder
 * at dis/client/index
 * in production, server would serve static at port 3333 no client server
 * in dev server would be running on 3333 and serving static as well as
 * the client running on 3000
 * for more info refer to the readme.md
 */

var staticPathOffset = process.env.NODE_ENV === 'production' ? '../' : '';

app.get('/api/hello', function (req, res) {
  console.log(_chalk2.default.bgBlue('I was hit'));
  res.send(JSON.stringify({ word: 'Hello world' }));
});

app.use(_express2.default.static(_path2.default.join(__dirname, '/../../' + staticPathOffset + 'client/build/')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '/../../' + staticPathOffset + 'client/build/', 'index.html'));
});

app.listen(process.env.PORT, function () {
  console.log(_chalk2.default.blue('listening on port:', _chalk2.default.green.bold(process.env.PORT)));
});
console.log(process.env.DB_NAME);