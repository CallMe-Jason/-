const express = require('express')
const app = express()

//可以简化书写
app.use((req, res, next) => {
    const time = Date.now()
    req.time = time
    next()
})
app.get('/', (req, res) => {
    res.send('Home page' + req.time)
})
app.get('/user', (req, res) => {
    res.send('Home page' + req.time)
})
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})
