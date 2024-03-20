const express = require ( 'express' )

const courseController = require ('../Controller/courseController')
const router = express.Router()

router.post('/addCourse', courseController.addCourse) //Add a new Student to the database

module.exports = router;