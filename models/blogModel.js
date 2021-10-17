const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    baslik  : {type:String,required:"Boş Geçilemez"},
    yazi    : {type:String,required:"Boş Geçilemez"},
    link    : {type:String,required:"Boş Geçilemez"},
    tarih   : {type:Date,default:Date.now},
    img     : {type:String,required:"Boş Geçilemez"},
    imgAlt  : {type:String,required:"Boş Geçilemez"}

});

module.exports =  mongoose.schema("site",blogSchema)


// let blogYazilari = [
//     { 
//         img:"https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
//         imgAlt:"Test Resmi ",
//         tarih:"January 1, 2021",
//         baslik:"Test 1",
//         yazi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis",
//         link:"deneme-1"
//     },
//     { 
//         img:"https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
//         imgAlt:"Test Resmi ",
//         tarih:"January 1, 2021",
//         baslik:"Test 2 ",
//         yazi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis",
//         link:"deneme-2"
//     },
//     { 
//         img:"https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
//         imgAlt:"Test Resmi ",
//         tarih:"January 1, 2021",
//         baslik:"Test 3",
//         yazi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis",
//         link:"deneme-3"
//     },
//     { 
//         img:"https://dummyimage.com/700x350/dee2e6/6c757d.jpg",
//         imgAlt:"Test Resmi ",
//         tarih:"January 1, 2021",
//         baslik:"Test 4 ",
//         yazi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis",
//         link:"deneme-4"
//     }

// ]

// module.exports =blogYazilari