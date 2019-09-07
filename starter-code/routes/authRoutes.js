const router = require('express').Router()
const { getSignUp, postSignUp, getLogin, postLogin } = require('../controllers/authControllers')

router.get('/signup', getSignUp)
router.post('/signup', postSignUp)
router.get('/login', getLogin)
router.post('/login', postLogin)

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.redirect('/auth/login')
  })
})
module.exports = router