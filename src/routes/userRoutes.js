import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário
// Usuário só pode atualizar seus próprios dados e nao dos outros
// router.put('/:id', userController.update);
// Usuário pode deletar seus próprios dados e nao dos outros
// router.delete('/:id', userController.delete);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
