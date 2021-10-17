/* 
    Web sitesinin rotalarını yönettiğim kısım.
    Web sayfasını burda ayağa kaldırıyorum.
*/

const indexSeo = require('./../views/seo/indexRoutesSeo')


const express = require('express'),
      router  = express.Router();




router.get('/',(req,res) => {
    res.status(200).render("home",{seo:indexSeo.seo["index"]});
})

router.get('/blog',(req,res)=>{
    res.status(200).render('blog',{seo:indexSeo.seo["blog"]})
})

router.get('/hakkimizda',(req,res)=>{
    res.status(200).render('hakkimizda',{seo:indexSeo.seo["hakkimizda"]})
})

router.get('/iletisim',(req,res)=>{
    res.status(200).render('iletisim',{seo:indexSeo.seo["iletisim"]})
})










module.exports = router