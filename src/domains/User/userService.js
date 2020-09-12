const User = require('./User');

exports.saveUser = async (userToCreate) => {
    if( !userToCreate ) return null;

    const savedUser = await User.create(userToCreate);
    delete savedUser.password;

    return savedUser;
}
