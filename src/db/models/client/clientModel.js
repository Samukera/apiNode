import pgConnection from "../../conection.js";

class ClientModel {
  constructor(name, genre, bornIn, age, cityId) {
    this.name = name;
    this.genre = genre;
    this.bornIn = bornIn;
    this.age = age;
    this.cityId = cityId;
  }

  static async findClient(clientId, name) {
    let queryText,
      values = [];

    queryText = `SELECT * FROM public.client`;

    if (clientId != null) {
      queryText += ` WHERE "clientId" = $1`;
      values = [clientId];
    } else if (name != null) {
      queryText += ` WHERE name = $1`;
      values = [name];
    }

    const { rows } = await pgConnection.query(queryText, values);

    return rows;
  }

  static async createClient(data) {
    let queryText,
      values = [];

    queryText = `INSERT INTO public.client(
            name, genre, "bornIn", age, "cityId")
            VALUES ($1, $2, $3, $4, $5);`;

    values = [data.name, data.genre, data.bornIn, data.age, data.cityId];

    const { rows } = await pgConnection.query(queryText, values);

    return rows;
  }

  static async deleteClient(clientId) {
    let queryText,
      values = [];

    queryText = `DELETE FROM public.client WHERE "clientId" = $1;`;

    values = [clientId];

    const { rows } = await pgConnection.query(queryText, values);

    return rows;
  }

  static async changeClientName(clientId, name) {
    let queryText,
      values = [];

    queryText = `UPDATE public.client SET name= $2 WHERE "clientId" = $1;`;

    values = [clientId, name];

    const { rows } = await pgConnection.query(queryText, values);

    return rows;
  }
}

export default ClientModel;
