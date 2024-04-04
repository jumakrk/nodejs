const express = require ( 'express' )

const courseController = require ('../Controller/courseController');
const { verifyAccessToken } = require('../Helpers/jwtHelper');
const router = express.Router()

router.post('/addCourse', verifyAccessToken, courseController.addCourse) //Add a new course to the database

module.exports = router;