const db = require("../Model/dbConnect");
const { signAccessToken } = require("../helpers/jwtHelper");
// const joi = require('../helpers/validateSchema')
const  user = db.users

module.exports = {
addUser: async (req, res, next) => {
    try {
        const {email, password} = await Joi.authShema.validateAsync (req.body);
        const exists = await user.findOne({where:{email}});
         if(exists){
            throw createError.Conflict(`${email} has already been registered`)
         }
         const newUser = new user({email, password});
         const savedUser = await newUser.save();

         const accessToken = await signAccessToken(savedUser.user_id);
        res.status(200).send(accessToken)
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