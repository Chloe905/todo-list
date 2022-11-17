const db = require('../../config/mongoose')
const Todo = require('../todo')// 載入Todo model

db.once('open', () => {
  // 連線成功後，建立種子資料庫
  for (let i = 0; i < 10; i++) {
    Todo.create({ name: `name-${i}` })
  }
  console.log('done')
})
