import express from 'express'
import config from 'config'
import router from './routes/index.js'
import mongoose  from 'mongoose'
import fileUpload from 'express-fileupload'
import path from 'path'
import cors from 'cors'

const PORT = process.env.PORT || config.serverPort

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve('static')))
app.use('/api', router)

async function start(){
    try {
        await mongoose.connect(config.dbUri, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('Сервер работает на порту ', PORT)
        })
    }catch(e){
        console.log('Ошибка ', e)
    }
}

start()