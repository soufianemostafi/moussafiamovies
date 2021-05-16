const express = require('express')

const Ctrl = require('./requestHandlers')

const router = express.Router()

router.post('/register', Ctrl.register)
router.get('/register', Ctrl.registerGet)
router.post('/login', Ctrl.login)
router.post('/logout', Ctrl.logout)
router.get('/session', Ctrl.session_user)
router.post('/upload', Ctrl.upload)
router.get('/upload', Ctrl.uploadGet)
router.delete('/upload', Ctrl.uploadDelete)
router.delete('/logout', Ctrl.logout)
router.get('/find', Ctrl.find)

module.exports = router
