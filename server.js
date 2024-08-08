const express = require("express")
const server = express()

const bodyParser = require("body-parser")
server.use(bodyParser.json())


if(!process.env.ON_RENDER){
    const env = require("node-env-file")
    env(__dirname+'\\.env')
}

const port = process.env.PORT || 3000


const api = require("./api.js")
server.use('/api',api)


server.listen(port,()=>{
    console.log(`Server listen in port ${port}`)
})

server.get('/',(req,res)=>{
    res.send(
        {
            "greeting": "Hello World!"
        }
    )
})