import ClientModel from '../../db/models/client/clientModel.js';
import { validate, Validator } from 'jsonschema';
import clientSchema from '../../schemas/client.schema.js';

export default {
    findClient: async (req, res) => {
        try {
            const { clientId, name } = req.query;
            const resultClients = await ClientModel.findClient(clientId, name);

            if(resultClients.length <= 0){
                return res.status(400).send({
                status: 'bad request',
                message: "Client don't exists. Check your datas.",
                payload: resultClients,
            });
            }

            return res.status(200).send({
                status: 'success',
                message: 'Client returned successfully',
                payload: resultClients,
            });
            
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find all clients',
                payload: [err],
            });
        }
    },

    create: async (req, res) => {
        try{
            const data = req.body;

            const v = new Validator();
            const errors = v.validate(data, clientSchema.createSchema).errors;
            if (errors.length > 0) {
                return res.status(400).send({
                    status: 'fail',
                    message: `Error in request's body ['${errors[0].property}']: ${errors[0].message}`,
                })
            }else{
                const resultClients = await ClientModel.createClient(data);

                return res.status(201).json({
                    status: 'success',
                    message: 'Client created successfully',
                    payload: resultClients,
                });
            }
        }catch (err){
            return res.status(500).json({
                status: 'error',
                message: 'Error while create client',
                payload: [err],
            });
        }
    },
    
    delete: async (req, res) => {
        try{
            const { clientId } = req.params;
            const resultClients = await ClientModel.deleteClient(clientId);

            if(resultClients.length <= 0){
                return res.status(400).send({
                status: 'bad request',
                message: "Client don't exists. Check your id.",
                payload: resultClients,
            });
            }

            return res.status(200).json({
                status: 'success',
                message: 'Client deleted successfully',
                payload: resultClients,
            });

        }catch (err){
            return res.status(500).json({
                status: 'error',
                message: 'Error while delete client',
                payload: [err],
            });
        }
    },
    changeClientName: async (req, res) => {
        try{
            const { clientId } = req.params;
            const { name } = req.body;
            
            const resultClients = await ClientModel.changeClientName(clientId, name);

            if(resultClients.length <= 0){
                return res.status(400).send({
                status: 'bad request',
                message: "Client don't exists. Check your id.",
                payload: resultClients,
            });
            }

            return res.status(201).json({
                status: 'success',
                message: 'Client name updated successfully',
                payload: resultClients,
            });

        }catch (err){
            return res.status(500).json({
                status: 'error',
                message: 'Error while update client name',
                payload: [err],
            });
        }
    }
}