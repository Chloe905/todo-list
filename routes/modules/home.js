// 引入express & express路由器
const express = require('express')
const router = express.Router()

// 引用 Todo models
const Todo = require('../../models/todo')

// 定義首頁路由
router.get('/', (req, res) => {
  Todo.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
})

// 匯出首頁路由模組
module.exports = router
