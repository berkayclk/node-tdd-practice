const User = require('./User');
const bcrypt = require('bcrypt');

exports.saveUser = async (userToCreate) => {
  if (!userToCreate) return null;

  const hashedPassword = bcrypt.hashSync(userToCreate.password, 10);

  userToCreate = { ...userToCreate, password: hashedPassword };
  const savedUser = await User.create(userToCreate);
  delete savedUser.password;

  return savedUser;
};
