// 引入express 和 router
const express = require('express')
const router = express.Router()

// 引入路由模組
const home = require('./modules/home')
const todos = require('./modules/todos')
// 網址結構符合'/'或'/todos'的request導向home 或 todos 路由模組
router.use('/', home)
router.use('/todos', todos)
// 匯出路由器
module.exports = router
