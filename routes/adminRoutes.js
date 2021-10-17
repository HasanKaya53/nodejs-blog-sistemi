const express = require('express'),
      router  = express.Router();


router.get('/admin/login',(res,req) => {
    req.status(200).render('admin/login.ejs')
})

router.get('/admin/register',(res,req)=>{
    req.status(200).render('admin/register.ejs')
})


module.exports = router;