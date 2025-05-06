const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Hello World3!</h2>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})