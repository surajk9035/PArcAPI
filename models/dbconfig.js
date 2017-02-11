msql = require('mysql');
exports.connection = msql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'ba71d85cfba5de',
    password: '3d2d46d4',
    database: 'heroku_0543b30f41ef3bf'
});
exports.msql= msql;
