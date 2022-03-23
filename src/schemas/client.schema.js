const clientSchema = {
    createSchema: {
        "id": "/ClientCreateSchema",
        "type": "object",
        "properties": {
            "name": {"type": "string"},
            "genre": {"type": "string"},
            "bornIn": {"type": "string"},
            "age": {"type": "number"},
            "cityId": {"type": "number"},
        },
        "required": ["name", "genre", "bornIn", "age","cityId"]
    }
}
export default clientSchema;