/*var mongoose = require('mongoose');
var strCon=process.env.MONGODB_URI;
var connection = mongoose.connect(strCon);

module.exports = connection;*/

var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/gorry');

module.exports = connection;
