const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')


router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      let totalAmount = 0
      let noRecord = false

      if (records.length === 0) {
        noRecord = true
      }

      Category.find()
        .lean()
        .then(categories => {

          records.forEach(record => {

            totalAmount += record.amount

            categories.forEach(category => {

              if (record.category === category.name) {
                record.category = category.icon
              }

            })
          })
          res.render('index', { records, categories, totalAmount, noRecord })
        })

    })
    .catch(error => console.log(error))
})

router.post('/filter', (req, res) => {
  const category = req.body.filterCategory
  console.log(req.body.filterCategory)
  let filterRecords = []
  let totalAmount = 0
  let noRecord = false

  return Record.find()
    .lean()
    .then(records => {
      Category.find()
        .lean()
        .then(categories => {
          records.forEach(record => {
            if (record.category === category) {
              filterRecords.push(record)
            }

            categories.forEach(category => {
              filterRecords.forEach(filterRecord => {
                if (filterRecord.category === category.name) {
                  filterRecord.category = category.icon
                }
              })
            })
          })
          filterRecords.forEach(filterRecord => {
            totalAmount += filterRecord.amount
          })

          if (filterRecords.length === 0) {
            noRecord = true
          }
          res.render('index', { records: filterRecords, categories, totalAmount, category, noRecord })
        })

    })
    .catch(error => console.log(error))
})



module.exports = router