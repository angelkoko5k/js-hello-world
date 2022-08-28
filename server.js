const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<body style="  background-color: #FF69B4" ></body> <ul><li><a href="default.asp">หน้าเมนูหลัก</a></li><li><a href="news.asp">ข่าวสาร</a></li><li><a href="contact.asp">เนื้อหาเว็บไซต์</a></li><li><a href="about.asp">เกี่ยวกับเว็บไซต์</a></li></ul>')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})