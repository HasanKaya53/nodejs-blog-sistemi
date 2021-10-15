
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



const mongoose = require('mongoose'),
      express = require('express'),
      app = express();


// routes
const indexRoute = require('./routes/indexRoutes')

// Config 
app.set('view engine','ejs')
app.use(express.static("public"))



// routes using
app.use(indexRoute)


const server = app.listen(4000,(err)=>{
    if(err) 
        console.log(err)
    else
        console.log("Server Çalıştı Port:"+4001)
})