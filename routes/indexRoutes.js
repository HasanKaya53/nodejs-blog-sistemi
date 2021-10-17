/* 
    Web sitesinin rotalarını yönettiğim kısım.
    Web sayfasını burda ayağa kaldırıyorum.
*/

//seo içeriklerini çektiğim modul
const indexSeo = require('./../views/seo/indexRoutesSeo')

//mongoDB bağlantısından önce test veriler için kullandığım veriler
const blogYazilari = require('./../models/blogModel')

const express = require('express'),
      router  = express.Router();




router.get('/',(req,res) => {
    res.status(200).render("user/home",{seo:indexSeo.seo["index"],dbBlogYazilari:blogYazilari});
})

router.get('/blog',(req,res)=>{
    res.status(200).render('user/blog',{seo:indexSeo.seo["blog"]})
})

router.get('/hakkimizda',(req,res)=>{
    res.status(200).render('user/hakkimizda',{seo:indexSeo.seo["hakkimizda"]})
})

router.get('/iletisim',(req,res)=>{
    res.status(200).render('user/iletisim',{seo:indexSeo.seo["iletisim"]})
})










module.exports = router