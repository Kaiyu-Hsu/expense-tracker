const express = require('express')
const router = express.Router()
const Expense = require('../../models/record')

// create
router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = req.body.inputName
  const date = req.body.inputDate
  const category = req.body.inputCategory
  const amount = req.body.inputAmount

  return Expense.create({
    name, date, category, amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// update
router.get('/edit', (req, res) => {
  const id = req.params.id
  const name = req.body.inputName
  const date = req.body.inputDate
  const category = req.body.inputCategory
  const amount = req.body.inputAmount

  return Expense.findById(id)
    .then( expense => {
      expense.name = name
      expense.date = date
      expense.category = category
      expense.amount = amount
      return expense.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router