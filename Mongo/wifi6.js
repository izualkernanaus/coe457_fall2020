const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wifi', { useNewUrlParser: true, useUnifiedTopology: true });
// we create a scheme first 
const wifiSchema = new mongoose.Schema({
    date: Date,
    ssid: String,
    quality: Number
})

// we create a collection called WifiQ with the wifiSchema
const WifiQuality = mongoose.model("WifiQ", wifiSchema);

WifiQuality.deleteMany({},
    function (err) {
        if (err) {
            console.log("error  reading wifi q's");
        } else {
            console.log("deleted successfully");
        }
    }
)
