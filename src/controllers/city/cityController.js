import CityModel from '../../db/models/city/cityModel.js';
import { validate, Validator } from 'jsonschema';
import citySchema from '../../schemas/city.schema.js';

export default {
    
    findCity: async (req, res) => {
        try {
            const { name, stateId } = req.query;

            const resultCity = await CityModel.findCity(name, stateId);

            if(resultCity.length <= 0){
                return res.status(400).send({
                status: 'Bad Request',
                message: "City don't exists. Check your datas.",
                payload: resultCity,
            });
            }

            return res.status(200).send({
                status: 'success',
                message: 'City returned successfully',
                payload: resultCity,
            });
            
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while finding city',
                payload: [err],
            });
        }
    },

    create: async (req, res) => {
        try {
            const data = req.body;
            
            const v = new Validator();
            const errors = v.validate(data, citySchema.createSchema).errors;
            if (errors.length > 0) {
                return res.status(400).send({
                    status: 'fail',
                    message: `Error in request's body ['${errors[0].property}']: ${errors[0].message}`,
                    payload: null
                })
            }else{
                const resultCity = await CityModel.createCity(data);

                return res.status(201).send({
                    status: 'success',
                    message: 'City created successfully',
                    payload: resultCity,
                });
            }
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while creating city',
                payload: [err],
            });
        }
    }
}