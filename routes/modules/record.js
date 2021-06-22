const express = require('express')
const router = express.Router()
const Record = require('../../models/record')
const Category = require('../../models/category')

// create
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.inputName
  const date = req.body.inputDate
  const category = req.body.inputCategory
  const amount = req.body.inputAmount

  return Record.create({
    name, date, category, amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// update
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  const name = req.body.inputName
  const date = req.body.inputDate
  const category = req.body.inputCategory
  const amount = req.body.inputAmount

  return Record.findById(id)
    .then( record => {
      // expense.name = name
      // expense.date = date
      // expense.category = category
      // expense.amount = amount
      return record.save()
    })
    .then((records) => res.render('edit', { records }))
    .catch(error => console.log(error))
})


module.exports = router