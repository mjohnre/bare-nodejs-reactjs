import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(JSON.stringify({
        'result': 'API root'
    }));
});

export default router;
