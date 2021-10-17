const mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose'); //giriş işlemlerini yönetmek için..


// şema oluşturuyrum..
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:"Boş Geçilemez"
    },
    password:{
        type: String,
        required:"Boş Geçilemez"
    }
})

userSchema.plugin(passportLocalMongoose) //passportLocalMongooseyi plugin olarak ekliyorum.
module.exports =  mongoose.model('user', userSchema) //mongoose modelini userSchemasını user olarak dışarı exportla