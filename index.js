const express = require ('express');
const cors = require ('cors')

const app = express();
const studentRoute = require ('./routes/studentRoute')
const courseRoute = require ('./routes/courseRoute')
const authRoute = require ('./routes/authRoute')


require('dotenv').config()
require('./Model/dbConnect')


app.use(express.json()); //express.json is a body passer pass values from the body to the postman
app.use(express.urlencoded({ extended: true })); //this will parse url encoded data 
app.use('/api/student', studentRoute)  //using the middleware for routes
app.use('/api/course', courseRoute)  //using the middleware for routes
app.use('/api/auth', authRoute)  //using the middleware for routes
app.use('/api/auth', authRoute)

//using cors to  allow cross-origin resource sharing
const corOptions = {
  origin: 'http://localhost:3000' 
}

app.listen(process.env.port || 4000, function() {
  console.log('Now listening for requests on: https://localhost:4000');
});