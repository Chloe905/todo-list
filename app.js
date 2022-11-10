const express = require('express')
const app = express()
const mongoose = require('mongoose') // 載入mongoose

// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = 3000

// 連線到mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})
app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`)
})
