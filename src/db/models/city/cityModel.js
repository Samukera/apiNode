import pgConnection from "../../conection.js";

class CityModel{
    constructor(
        name,
        stateId
    ) {
        this.name = name;
        this.stateId = stateId;
    }

    static async findCity(name, stateId){
        let queryText, values = [];

        queryText = `SELECT "cityId", c.name, st.name AS "stateName",st.uf FROM public.city c join public.state st ON st."stateId" = c."stateId"`;

        if(name != null){
            queryText += ` WHERE c."name" = $1`
            values = [name];
        }
        else if(stateId != null){
            queryText += ` WHERE c."stateId" = $1`
            values = [stateId];
        }

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }

    static async createCity(data){
        let queryText, values = [];

        queryText = `INSERT INTO public.city(
            name, "stateId")
            VALUES ($1, $2);`

        values = [data.name, data.stateId];

        const { rows } = await pgConnection.query(queryText, values);
        
        return rows;
    }
}

export default CityModel;