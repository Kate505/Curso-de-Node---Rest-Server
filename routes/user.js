import Router from 'express'
import { usuariosGet, usuariosDelete, usuariosPatch, usuariosPost, usuariosPut } from '../controllers/user.js';

export const router = Router();

/*router.get('/', (req, res) => {
    res.send('Hello World')
});*/

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);