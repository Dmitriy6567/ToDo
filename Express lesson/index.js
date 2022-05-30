import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000;
const app = express()

app.use(express.static(path.resolve(__dirname,'static')))

app.get('/download',(req,res)=> {
    res.download(path.resolve(__dirname,'static','index.html'))
})

app.listen(PORT, () => console.log(`Сервер запущен на порте ${PORT}`))