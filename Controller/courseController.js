const db = require('../Model/dbConnect');
const Courses = db.courses;

// Get all courses in the database
module.exports = {
  addCourse :async(req, res, next) =>{ //req = request from client and res = response from the server
    try {
      let info = {
        coursename: req.body.coursename,
      }

      const addCourse = await Courses.create(info)
      res.status(200).send(addCourse)
    }catch (error) {next(error)}
  },

  // get courses in database by id
  getCourse: async (req, res, next) => {
    try {
        let id = req.params.id
        let Course = await Courses.findOne({ where: { course_id: id } })

        if (Courses) {
            throw (createError(404, "Course not found"))
        }
        res.status(200).send(Course)
    } catch (error) {
        next(error)
    }
},

//update course data in database using put method
updateStudent: async (req, res, next) => { 
    try {
        let id = req.params.id

        const updateCourse = await Courses.update(req.body, { where: { course_id: id } })
        if (!Courses) {
            throw (createError(404, "Course not found"))
        }
        res.status(200).send(updateCourse)
    } catch (error) {
        next(error)

    }
}
};
