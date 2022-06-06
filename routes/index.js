import { Router } from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestiomoniales, 
    paginaViajes,
    paginaDetalleViaje 
} from '../controllers/paginasController.js';

import { 
    guardarTestiomonial 
} from '../controllers/testimonialController.js';


const router = Router();


router.get('/', paginaInicio); 

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestiomoniales);
router.post('/testimoniales', guardarTestiomonial);



export default router;