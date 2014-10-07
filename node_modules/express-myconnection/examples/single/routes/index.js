/*
 * GET home page.
 */

exports.index = function (req, res, next) {

    req.getConnection(function (err, connection) {
        connection.query('SELECT ? AS RESULT', ['Hello World!'], function (err, results) {
            if (err) return next(err);

            res.render('index', {
                title: 'express-myconnection',
                result: results[0].RESULT
            });
        });
    });

};