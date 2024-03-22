const Joi = require ('joi');

const authShema = Joi.object ({
  email: Joi.string().email().lowercase().required(),
  password:Joi.string().min(8).required(),
})

// const vendorValidate = Joi.object({
//   firstname: Joi.string().required(),
//   lastname: Joi.string().required(),
//   phonenumber: Joi.string().required(),
//   email: Joi.string().required(),
//   address: Joi.string(),
// })

module.exports = {
  authShema,
  vendorValidate
}