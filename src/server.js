const express = require('express')
const router =  require('./routes/router')
const cors = require('cors')
const path = require('path')


const app = express()

// usando o cors
app.use(cors())
app.use(express.json())

// definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// definindo os arquivospublicos
app.use(express.static(path.join(__dirname, 'public')))


// definindo as rotas
app.use('/api', router)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})