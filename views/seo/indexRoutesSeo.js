
//mongo Tarafını seo ile uğraştırmak istemediğim için böyle bir şey yaptım. Bence, eğer bunlar veri tabanından çekilecekse bu tarafta sql kullanmak daha sağlıklı olacaktır :).

const googleSeo = {
    index:{
        pageTitle:"NodeJS Blog Anasayfa",
        pageDesc:"NodeJS Ve MongoDB ile blog sistemi yazmak"
    },
    blog:{
        pageTitle:"NodeJS Blog Sayfası",
        pageDesc:"Bloglarımız"
    },
    hakkimizda:{
        pageTitle:"NodeJS Blog Sayfası Hakkımızda",
        pageDesc:"NodeJS hakkimizda sayfası"
    },
    iletisim:{
        pageTitle:"NodeJS Blog Sayfası İletişim",
        pageDesc:"Bize Ulaşın"
    }
}

module.exports = {seo:googleSeo}