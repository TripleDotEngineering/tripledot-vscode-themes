const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/json', (req, res) => {
  if (req.headers.authorization && req.headers.authorization == "secret") {
    res.send({
      this: "is",
      "a json": "object"
    })
  }
  else {
    res.status(401).send("Unauthorized")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
