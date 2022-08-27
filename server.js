const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<body style="background-color: #92a8d1"></body> <h1 >ลูงตู่20ปี</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})