import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import logger from "./module/winston";

import indexRouter from './routes';
import demoRouter from './routes/demo';

const app = express();

//express middleware
//logger
app.use(morgan('combined', {stream: logger.stream}));
//parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//serve api
app.use('/api', indexRouter);
app.use('/api', demoRouter);

//serve static view
app.use(express.static(path.join(__dirname, 'public')));

//error handler
app.use(function (req, res, next) {
    //error 404
    // set locals, only providing error in development
    const err = new Error('Not found');
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // add this line to include winston logging
    logger.error(`${err.status || 404} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    const data = {
        message: 'Not found'
    };

    // render the error page
    res.status(err.status || 404);
    res.json();
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // add this line to include winston logging
    logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    const data = {
        message: 'Not found'
    };

    // render the error page
    res.status(err.status || 500);
    res.json(data);
});

export default app;
