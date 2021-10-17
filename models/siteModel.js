const mongoose = require('mongoose')


const siteSchema = new mongoose.Schema({
    aboutImage      :{ type: String, required: "Boş Geçilemez"},
    contactImage    :{ type: String, required: "Boş Geçilemez"},
    contactText     :{ type: String, required: "Boş Geçilemez"},
    aboutText       :{ type: String, required: "Boş Geçilemez"}
})

module.exports = mongoose.schema("site",siteSchema)