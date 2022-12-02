const { Router } = require ('express');
const {userLogin} = require('../controllers');

const router = Router();

router.post('/auth/login',userLogin);
// router.delete('/tasks/:id',getTasksById);

module.exports= router;

