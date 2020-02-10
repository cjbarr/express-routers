const express = require('express')
const router = express.Router();

//write two routes to /product url //one get /one post

router.get('/', (req, res) => {
    console.log('in /product GET');
    res.send('woof');
})

router.post('/', (req, res) => {
    console.log('in /product POST', req.body);
    res.sendStatus(201);
    //SQL Query to send req.body to database
})

module.exports = router;