const citySchema = {
    createSchema: {
        "id": "/CityCreateSchema",
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "stateId": {"type": "number"},
        },
        "required": ["name", "stateId"]
    }
}
export default citySchema;