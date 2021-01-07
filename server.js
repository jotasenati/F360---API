
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

app.use(cors())

//CONEXAO COM API
app.get('/', async (req, res, next) => {

    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    return res.json(data)
    //console.log(data);

})

//PORTA DA API
app.listen(1234, function () {
  console.log('CORS-enabled web server listening on port 80')
})

