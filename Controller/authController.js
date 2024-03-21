const db = require("../Model/dbConnect")
const  user = db.users

module.exports = {
addUser: async (req, res, next) => {
    try {
        let info = {
            username: req.body.username,
            password: req.body.password,
        }

        const addUser = await user.create(info)
        res.status(200).send(addUser)
    } catch (error) {
        next(error)
    }
},

getAllUsers: async (req, res, next) => {
    try {
        let getAllUsers = await user.findAll({})
        res.status(200).send(getAllUsers)
    } catch (error) {
        next(error)
    }
},

getUser: async (req, res, next) => {
    try {
        let id = req.params.id
        let getUser = await user.findOne({ where: { user_id: id } })

        if (!user) {
            throw (createError(404, "User not found"))
        }
        res.status(200).send(getUser)
    } catch (error) {
        next(error)
    }
},

updateUser: async (req, res, next) => {
    try {
        let id = req.params.id

        const updateUser = await user.update(req.body, { where: { user_id: id } })
        if (!user) {
            throw (createError(404, "Student not found"))
        }
        res.status(200).send(updateUser)
    } catch (error) {
        next(error)
    
    }
},
    
}