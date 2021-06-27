const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      icon: '<i class="fas fa-home"></i>',
      name: '家居物業'
    },
    {
      icon: '<i class="fas fa-shuttle-van"></i>',
      name: '交通出行'
    },
    {
      icon: '<i class="fas fa-grin-beam"></i>',
      name: '休閒娛樂'
    },
    {
      icon: '<i class="fas fa-utensils"></i>',
      name: '餐飲食品'
    },
    {
      icon: '<i class="fas fa-pen"></i>',
      name: '其他'
    }
  )
    .then(() => {
      console.log('Insert categories done!')
      return db.close()
    })
    .then(() => {
      console.log('Database connection close.')
    })
})
