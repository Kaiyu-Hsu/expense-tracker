const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create({
    category_id: 0,
    icon: 'fa-home',
    name: '家居物業'
    },
    {
      category_id: 1,
      icon: 'fa-shuttle-van',
      name: '交通出行'
    },
    {
      category_id: 2,
      icon: 'fa-grin-beam',
      name: '休閒娛樂'
    },
    {
      category_id: 3,
      icon: 'fa-utensils',
      name: '餐飲食品'
    },
    {
      category_id: 4,
      icon: 'fas fa-pen',
      name: '其他'
    }
  )

  console.log('Category Done!')
})
