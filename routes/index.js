var express = require('express')
var router = express.Router()

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello world',
    user: 'Charles',
    added: new Date(),
  },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages })
})

router.get('/new', (req, res, next) => {
  res.render('form')
})

router.post('/new', (req, res, next) => {
  if (!req.body.name || !req.body.message) {
    res.status(400).send('Messages must have a name and message.')
    return
  }

  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  })

  res.redirect('/')
})

module.exports = router
