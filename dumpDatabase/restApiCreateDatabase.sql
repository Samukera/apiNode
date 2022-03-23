CREATE TABLE state (
    "stateId" SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    uf CHAR(2) NOT NULL UNIQUE
    
);

CREATE TABLE city (
	"cityId" SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL UNIQUE,
	"stateId" INT NOT NULL,
	CONSTRAINT fk_state_id_state
			FOREIGN KEY ("stateId")
			REFERENCES state ("stateId") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE client (
    "clientId" SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genre CHAR(2) NOT NULL,
    "bornIn" DATE NOT NULL,
    age INT NOT NULL,
    "cityId" INTEGER,
    CONSTRAINT fk_city_id_client
        FOREIGN KEY ("cityId") 
        REFERENCES city ("cityId") ON DELETE CASCADE ON UPDATE CASCADE
);