const express = require('express'),
      router  = express.Router();



router.get('/',(req,res)=>{
    res.status(200).render('home')
})






module.exports = router