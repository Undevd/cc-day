var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

var dbUName = process.env.MONGODB_UNAME || "";
var dbPwd = process.env.MONGODB_PWD || "";
var dbName = process.env.MONGODB_DBNAME || "";

module.exports = {
    development: {
        db: 'mongodb://localhost/ccday',
        port: process.env.PORT || 4450,
        rootPath: rootPath
    },
    production: {        
        db: 'mongodb://'+dbUName+':'+dbPwd+'@ds023373.mlab.com:23373/'+dbName,
        port: process.env.PORT || 80,
        rootPath: rootPath
    }
}