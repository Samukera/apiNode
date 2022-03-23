import { Router } from 'express';
import clientRouter from './routes/client.routes.js';
import cityRouter from './routes/city.routes.js'


const router = Router();

/*router.route('/teste').get((req, res)=>{
    res.status(200).send({
        message: 'Success'
    });
});*/
router.use('/clients',clientRouter)
router.use('/cities',cityRouter)


export default router;