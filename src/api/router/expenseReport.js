let express = require('express')
let expenseReportRouter = express.Router();
const fs = require('fs');
const expenseData = 'src/api/data/expense.json';

/**
 * 
 * Middleware to log time which is specific to expense router
 * 
 **/
expenseReportRouter.use(function timeLog(req, res, next) {
    console.log('expenseReportRouter router Time: ', Date.now());
    // Sanitize data here
    next();
})

expenseReportRouter.get('/', function (req, res) {
    fs.readFile(expenseData, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

expenseReportRouter.post('/', function (req, response) {
    fs.readFile(expenseData, 'utf8', (err, res) => {
        if (err) {
            throw err;
        }
        var report = JSON.parse(res);
        const newUserId = report.data.length + 1;
        req.body.data.id = newUserId; 
        report.data.push(req.body.data);
         fs.writeFile(expenseData, JSON.stringify(report), 'utf8', (err) => {
             if (err) {
                 throw err;
             }
             response.status(200).send('Record added successfully');
         });
    });
});

expenseReportRouter.put('/:expenseId', function (req, response) {
    fs.readFile(expenseData, 'utf8', (err, res) => {
        if (err) {
            throw err;
        }
        var report = JSON.parse(res);
        const expId = req.params["expenseId"];
        let idx = '';
        for (var iter = 0; iter < report.data.length; iter++) {
            if (expId == report.data[iter].id) {
                idx = iter;
            }
        }
        if (idx !== '') {
            report.data[idx] = req.body.data;
            fs.writeFile(expenseData, JSON.stringify(report), 'utf8', (err) => {
                if (err) {
                    throw err;
                }
                response.status(200).send('Record updated successfully');
            });
        } else {
            response.status(200).send('Record is not available');
        }
    });

});



expenseReportRouter.delete('/:expenseId', function (req, response) {
    fs.readFile(expenseData, 'utf8', (err, res) => {
        if (err) {
            throw err;
        }
        var report = JSON.parse(res);
        const expId = req.params["expenseId"];
        let idx = '';
        for(var iter=0;iter<report.data.length;iter++){
            if(expId == report.data[iter].id){
                 idx = iter;
            }
        }
        if (idx !== '') {
            report.data.splice(idx,1);
            fs.writeFile(expenseData, JSON.stringify(report), 'utf8', (err) => {
                if (err) {
                    throw err;
                }
                response.status(200).send('Record deleted successfully');
            });
        }else{
            response.status(200).send('Record is not available');
        }
    })
});

export default expenseReportRouter;