const express = require("express");
const fs = require('fs');
let  app = express();
import bodyParser from 'body-parser';
import compression from 'compression';

import loginRouter from './src/api/router/login';
import expenseReportRouter from './src/api/router/expenseReport';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(compression({threshold: 0}));

app.use(function(error, req, res, next) {
   // logException(error, req);
});

app.use('/login', loginRouter);
app.use('/expensereport', expenseReportRouter);

app.get('/', (req, res) => {
    res.sendFile('public/default.html', { root: __dirname })
});

app.listen(4000, ()=>{console.log('App listening on port 4000')})