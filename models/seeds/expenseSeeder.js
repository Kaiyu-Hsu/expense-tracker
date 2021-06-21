const Expense = require('../expense')
const db = require('../../config/mongoose')

db.once('open', () => {
  Expense.create({
    name:'蛋餅',
    date:'2021-06-01',
    category: '早餐',
    amount:35
  },
  {
    name: '紅茶',
    date: '2021-06-01',
    category: '飲料',
    amount: 30
  },
  {
    name: '捷運',
    date: '2021-06-01',
    category: '交通',
    amount: 50
  },
  {
    name: '沙丘',
    date: '2021-06-01',
    category: '電影',
    amount: 260
  })

  console.log('Done!')
})