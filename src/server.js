const express = require('express')
const router =  require('./routes/router')

const app = express()


app.use('/api', router)


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})