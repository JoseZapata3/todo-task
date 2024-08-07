var mongoose = require("mongoose")
var express = require("express")
var router = express.Router()

let env = null;

if(!process.env.ON_RENDER){
    console.log("Loading environment variables...")
    const env = require("node-env-file")
    env(__dirname+'\\.env')
}

environment = {
    DBMONGOUSER: process.env.DBMONGOUSER,
    DBMONGOPASS: process.env.DBMONGOPASS,
    DBMONGOSERV: process.env.DBMONGOSERV,
    DBMONGO: process.env.DBMONGO,
}

var query = 'mongodb+srv://'+environment.DBMONGOUSER+':'+environment.DBMONGOPASS+'@'+environment.DBMONGOSERV+'/'+environment.DBMONGO+'?retryWrites=true&w=majority&appName=todo-task'

const db = (query)

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(error){
    if(error){
        console.log(`Error! ${error}`)
    }else{
        console.log("Successful conection!")
    }
})

module.exports = router