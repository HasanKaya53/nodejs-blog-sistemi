
// Sana gitme demeyeceğim.
// Üşüyorsun ceketimi al.
// Günün en güzel saatleri bunlar.
// Yanımda kal.

// Sana gitme demeyeceğim.
// Gene de sen bilirsin.
// Yalanlar istiyorsan yalanlar söyleyeyim, 
// İncinirsin.

// Sana gitme demeyeceğim, 
// Ama gitme, Lavinia.
// Adını gizleyeceğim
// Sen de bilme, Lavinia.


// veritabanı adı: test     şifre: xgs0RvNO9lrnHRej

// mongoDB Atlasa bağlanmak için bilgiler. Test Veri tabanıdır :)
const mongooseConnectUser = "mongodb+srv://test:xgs0RvNO9lrnHRej@nodejs-test.jjcm6.mongodb.net/blogSystem?retryWrites=true&w=majority"; 

const mongoose = require('mongoose'),
      express = require('express'),
      expressSession = require('express-session'), //session yönetimi için önemli
      bodyParser = require('body-parser') 
      app = express();

// giriş yapmak ve oturum yönetmeye yönelik paketler
const passport = require('passport')
const LocalStrategy = require('passport-local')

// routes
const indexRoute = require('./routes/indexRoutes')
const adminRoute = require('./routes/adminRoutes')

// models
const user = require('./models/userModel')

// Config 
mongoose.connect(mongooseConnectUser) //veri tabanına bağlanıyorum ..
app.set('view engine','ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended:true}))


//passport config
app.use(require("express-session")({
    secret: "a3s2dIMNXÇÇğğşŞtEsTSe9CrEt00KexYs100923",
    resave: false,
    saveUninitialized : false
}))

// passportu kullanmak için gerekliler :)
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())


// routes using
app.use(indexRoute)
app.use(adminRoute)


const server = app.listen(4000,(err)=>{
    if(err) 
        console.log(err)
    else
        console.log("Server Çalıştı Port:"+4000)
})