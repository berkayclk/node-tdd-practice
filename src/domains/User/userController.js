const UserService = require('./userService');

const ResponseModel = require('../../common/models/ResponseModel');

exports.saveNewUser = async (req, res, next) => {
    try {
        const userToCreate = req.body;
        const savedUser = await UserService.saveUser(userToCreate);
        if( !savedUser ) {
            return res.status(400).json(
                new ResponseModel('User could not be created!')
            );
        }

        console.log(`New user saved with ${savedUser.id}`);
        res.json(
            new ResponseModel('User was created!', true, savedUser)
        );

    } catch (error) {
        console.error(`An error has been occurred while creating user.`, error);
        res.status(400).json(
            new ResponseModel('User could not be created!')
        );
    }
}
