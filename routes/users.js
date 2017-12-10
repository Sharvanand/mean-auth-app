const express = require('express');
const router  = express.Router();

router.get('/register',(req, res, next)=>{
    res.send("It is registering..");
});

router.get('/authenticate',(req, res, next)=>{
    res.send("It is authenticating..");
});

router.get('/profile', (req, res, next)=>{
    res.send("It is profle route");
});



module.exports = router;