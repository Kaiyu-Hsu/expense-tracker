const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create({
    name:'蛋餅',
    date:'2021-06-01',
    category: '餐飲食品',
    amount:35
  },
  {
    name: '紅茶',
    date: '2021-06-01',
    category: '餐飲食品',
    amount: 30
  },
  {
    name: '捷運',
    date: '2021-06-01',
    category: '交通出行',
    amount: 50
  },
  {
    name: '沙丘',
    date: '2021-06-01',
    category: '休閒娛樂',
    amount: 260
  },
    {
      name: '看牙醫',
      date: '2021-06-01',
      category: '其他',
      amount: 200
    }
  )

  console.log('Record Done!')
})