const express = require('express'),
      router  = express.Router();



router.get('/',(req,res)=>{
    res.status(200).render('home')
})

router.get('/hakkimizda',(req,res)=>{
    res.status(200).send("Hakkımızda Sayası")
})

router.get('/iletisim',(req,res)=>{
    res.status(200).send("Hakkımızda Sayası")
})










module.exports = router