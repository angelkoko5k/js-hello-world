const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<body style="  background-color: #ff1e4" ></body> <ul><li><a href="default.asp">หน้าหลัก</a></li><li><a href="news.asp">ข่าว</a></li><li><a href="contact.asp">เนื้อหา</a></li><li><a href="about.asp">เกี่ยวกับ</a></li></ul>')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})