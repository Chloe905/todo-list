const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = require('./routes') // 引用路由器，路徑不用再加上 /index，因為express會自動去找 router下叫index的檔案
require('./config/mongoose')
const app = express()
// 僅在非正式環境時，使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 導入路由器
app.use(router)

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`)
})
