const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
      user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [6, 100] // Validate length of password
          }
      }
  });

  // Before validating the user, convert email to lowercase
  User.beforeValidate((user, options) => {
    if (user.email) {
      user.email = user.email.toLowerCase();
    }
  });

  // Before creating a new user, hash the password
  User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });

  // Compare the incoming password with the stored password
  User.prototype.isValidPassword = async function (password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
  };

  return User;
};
