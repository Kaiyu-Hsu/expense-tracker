const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      Category.find()
        .lean()
        .then(categories => {
          records.forEach( record => {
            categories.forEach( category => {

              if (record.category === category.name) {
                record.category = category.icon
              }

            })
          }) 
        })
      res.render('index', { records })
    })
    .catch(error => console.log(error))
})

module.exports = router