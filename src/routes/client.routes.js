import { Router } from 'express';
import clientController from '../controllers/client/clientController.js';

const clientRouter = Router({ mergeParams: true});

/*
 GET /clients/  GET CLIENT WITH FILTERS
*/
clientRouter.route('/').get(clientController.findClient);

/*
 POST /clients/createClient     POST CREATE CLIENT
*/
clientRouter.route('/createClient').post(clientController.create);
/*
 DELETE /clients/:clientId       DELETE CLIENT
*/
clientRouter.route('/:clientId').delete(clientController.delete);
/*
 PUT /clients/:clientId/changeClientName  PUT CHANGE CLIENT NAME
*/
clientRouter.route('/:clientId/changeClientName').put(clientController.changeClientName);

export default clientRouter;
