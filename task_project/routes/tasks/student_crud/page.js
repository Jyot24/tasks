const express = require('express');
const router = express.Router();
const con = require("../../../db");



// const { RateLimiterRedis } = require('rate-limiter-flexible');
// const Redis = require('ioredis');

// const redisClient = new Redis({
//   options: {
//     enableOfflineQueue: false
//   }
// });

// const opts = {
//   redis: redisClient,
//   points: 5, // 5 points
//   duration: 15 * 60, // Per 15 minutes
//   blockDuration: 15 * 60, // block for 15 minutes if more than points consumed 
// };

// const rateLimiter = new RateLimiterRedis(opts);

// con.connect();

router.get('/', (req, res) => {
    res.render('student_crud/Home');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    // res.send('hello')
})

router.get('/getuser', (req, res) => {
    res.render('student_crud/GetUser');
    // res.render('pages/' + 'Home', { name: 'jyot' });
    // res.send('hello')
})
module.exports=router