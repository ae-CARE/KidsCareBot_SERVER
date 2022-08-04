const express = require('express')
const app = express()
const port = 3000

app.get('/react', (req, res) => {
  res.sendFile('/react/build/index.html') // __dirname 필요할 지도..?
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})