import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    const data = {
        message: 'API root'
    };

    res.json(data);
});

export default router;
