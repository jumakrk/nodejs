  const express = require ( 'express' )

  const studentController = require ('../Controller/studentController')
const { verifyAccessToken } = require('../helpers/jwtHelper')
  const router = express.Router()

  router.post('/addStudent', studentController.addStudent) //Add a new Student to the database
  router.get('/getStudent', verifyAccessToken, studentController.getStudent) //Add a new Student to the database

  module.exports = router; 