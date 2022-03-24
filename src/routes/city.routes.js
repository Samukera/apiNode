import { Router } from 'express';
import cityController from '../controllers/city/cityController.js';

const cityRouter = Router({ mergeParams: true});

/*
 POST /cities/createCity   POST CREATE CITY
*/
cityRouter.route('/createCity').post(cityController.create);

/*
 GET /cities/              GET CITY WITH FILTERS
*/
cityRouter.route('/').get(cityController.findCity)

export default cityRouter;