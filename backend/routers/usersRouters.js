const { Router } = require('express');
const usersController = require('../controllers/usersControllers')

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);
usersRouter.get('/:id', usersController.readUser);
usersRouter.get('/', usersController.readAllUsers);
usersRouter.put('/update/:id', usersController.updateUser);
usersRouter.delete('/delete/:id', usersController.deleteUser);

module.exports = usersRouter;