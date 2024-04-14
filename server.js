const express = require('express')
const routes = require('./route')
const cors = require("cors")

const app = express()
const port = 4000

app.use(express.json());
app.use(cors())
app.use('/api/data/', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})