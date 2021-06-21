const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

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


module.exports = router