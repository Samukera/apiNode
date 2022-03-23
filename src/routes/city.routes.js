import { Router } from 'express';
import cityController from '../controllers/city/cityController.js';

const cityRouter = Router({ mergeParams: true});

/*
 POST /cities/createCity
*/
cityRouter.route('/createCity').post(cityController.create);

/*
 GET /cities/
*/
cityRouter.route('/').get(cityController.findCity)

export default cityRouter;