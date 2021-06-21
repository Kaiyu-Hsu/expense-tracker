const express = require('express')
const router = express.Router()
const Expense = require('../../models/expense')

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const name = res.body.name
  const date = res.body.date
  const category = res.body.category
  const amount = res.body.amount

  return Expense.create({
    name, date, category, amount
  })
    .then(() => res.render('/'))
    .catch(error => console.log(error))
})


module.exports = router