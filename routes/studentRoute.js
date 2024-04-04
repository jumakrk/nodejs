  const express = require ( 'express' )

  const studentController = require ('../Controller/studentController')
// const { verifyAccessToken } = require('../helpers/jwtHelper') //for securing/protecting our routes using the access token
  const router = express.Router()

  router.post('/addStudent', studentController.addStudent) //Add a new Student to the database
  router.get('/getAllstudents', studentController.getAllstudents) //get Student from the database

  module.exports = router; 