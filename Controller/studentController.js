const db = require('../Model/dbConnect');
const students = db.student;
//db course
const createError = require ('http-errors') ;

module.exports = {
  addStudent :async(req, res, next) =>{ //req = request from client and res = response from the server
    try {
      let info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        gender: req.body.gender
      }

      const addStudent = await students.create(info)
      res.status(200).send(addStudent)
    }catch (error) {next(error)}
  },

// Get all students in the database
getAllstudents: async (req, res) => {
  try {
    const allStudents = await students.find({}, 'firstname lastname gender');

    if (!allStudents || allStudents.length === 0) {
      return res.status(404).json({ error: 'No students found' });
    }

    res.status(200).json(allStudents); // Return all documents
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//update sudent data in database using put method
updateStudent: async (req, res, next) => { 
    try {
        let id = req.params.id

        const updateStudent = await students.update(req.body, { where: { student_id: id } })
        if (!students) {
            throw (createError(404, "Student not found"))
        }
        res.status(200).send(updateStudent)
    } catch (error) {
        next(error)

    }
}
};
