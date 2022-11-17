const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose') // 載入mongoose
const router = require('./routes') // 引用路由器，路徑不用再加上 /index，因為express會自動去找 router下叫index的檔案

const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = 3000

// 連線到mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 導入路由器
app.use(router)

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`)
})
