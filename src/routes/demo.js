import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/demo', function (req, res, next) {

    const data = {
        'message': 'API demo is working'
    };

    res.json(data);
});

export default router;
