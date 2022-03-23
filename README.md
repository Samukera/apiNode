>**APIREST**

API desenvolvida no intuito de testar conhecimentos e praticá-los

>**Tecnologias usadas: NodeJS & Postgresql**

>**INSTALAÇÃO**

yarn install

>**COMEÇANDO O PROJETO**

Para extrair o máximo da API algumas configurações devem ser feitas:

>copiar os dados do arquivo .env.example para um .env e preencher com os dados corretos.
>rodar os scripts do banco de dados.
>importar a collection para o Insomnia.

>**PARA RODAR O SERVIDOR**

*yarn start*

>**ROTAS**

**Rotas relacionadas aos clientes**

>Método POST- Create Cliente
    URL: http://localhost:3000/clients/createClient
(É esperado que se envie no body um json com os campos: name, genre, bornIn, age, cityId)
>exemplo: 
>    {
>    "name": "Usuário 2",
>    "genre": "M",
>    "bornIn": "15-06-2006",
>    "age": 15,
>    "cityId": 1
>    }

>Método GET - Get Client With Filters
    URL: http://localhost:3000/clients/
(É possível filtrar os clientes via id ou nome e também ambos, para isso basta enviar o campo desejado e o seu dado via query. OBS: caso não especifique nenhum filtro, serão retornados todos clientes)

>exemplo: http://localhost:3000/clients/?clientId=1&name=Samuel%20Rech

>Método DEL - Remove Client
URL: http://localhost:3000/clients/$clientId
(Deleta o cliente a partir do ‘clientId’ fornecido)

>exemplo: http://localhost:3000/clients/1


>Método PUT - Change Client Name
    URL: http://localhost:3000/clients/$clientId/changeClientName
(Atualiza o nome do cliente a partir do id fornecido na URL, o nome deve ser enviado via json pelo body)

>exemplo JSON: 
>
>{
> “name”: “Fulano Ciclano de Beltrano”
>}
>
>exemplo URL: http://localhost:3000/clients/$clientId/changeClientName


**Rotas Relacionadas às Cidades**

>Método GET - Get City with Filters
    URL: http://localhost:3000/cities/

(É possível filtrar as cidades via nome ou id do estado e também ambos, para isso basta enviar o campo desejado e o seu dado via query. OBS: caso não especifique nenhum filtro, serão retornadas todas cidades)

>exemplo: http://localhost:3000/cities/?name=Santa%20Maria&stateId=20

>Método POST - Create City
    URL: http://localhost:3000/cities/createCity

(É esperado que se envie no body um json com os campos: name, stateId)

>exemplo:
>    {
>     “name”: “Canoas”,
>     “stateId”: 20
>    }

>*OBS: Os estados já estão todos populados no banco de dados, é possível olhar o respectivo Id para cada estado.*

Tabela de estados:
>        {
>            "stateId": 1,
>            "name": "Acre",
>            "uf": "AC"
>        },
>        {
>            "stateId": 2,
>            "name": "Alagoas",
>            "uf": "AL"
>        },
>        {
>            "stateId": 3,
>            "name": "Amapá",
>            "uf": "AP"
>        },
>        {
>            "stateId": 4,
>            "name": "Amazonas",
>            "uf": "AM"
>        },
>        {
>            "stateId": 5,
>            "name": "Bahia",
>            "uf": "BA"
>        },
>        {
>            "stateId": 6,
>            "name": "Ceará",
>            "uf": "CE"
>        },
>        {
>            "stateId": 7,
>            "name": "Espírito Santo",
>            "uf": "ES"
>        },
>        {
>            "stateId": 8,
>            "name": "Goiás",
>            "uf": "GO"
>        },
>        {
>            "stateId": 9,
>            "name": "Maranhão",
>            "uf": "MA"
>        },
>        {
>            "stateId": 10,
>            "name": "Mato Grosso",
>            "uf": "MT"
>        },
>        {
>            "stateId": 11,
>            "name": "Mato Grosso do Sul",
>            "uf": "MS"
>        },
>        {
>            "stateId": 12,
>            "name": "Minas Gerais",
>            "uf": "MG"
>        },
>        {
>            "stateId": 13,
>            "name": "Pará",
>            "uf": "PA"
>        },
>        {
>            "stateId": 14,
>            "name": "Paraíba",
>            "uf": "PB"
>        },
>        {
>            "stateId": 15,
>            "name": "Paraná",
>            "uf": "PR"
>        },
>        {
>            "stateId": 16,
>            "name": "Pernambuco",
>            "uf": "PE"
>        },
>        {
>            "stateId": 17,
>            "name": "Piauí",
>            "uf": "PI"
>        },
>        {
>            "stateId": 18,
>            "name": "Rio de Janeiro",
>            "uf": "RJ"
>        },
>        {
>            "stateId": 19,
>            "name": "Rio Grande do Norte",
>            "uf": "RN"
>        },
>        {
>            "stateId": 20,
>            "name": "Rio Grande do Sul",
>            "uf": "RS"
>       },
>        {
>            "stateId": 21,
>            "name": "Rondônia",
>            "uf": "RO"
>        },
>        {
>            "stateId": 22,
>            "name": "Roraima",
>            "uf": "RR"
>        },
>        {
>            "stateId": 23,
>            "name": "Santa Catarina",
>            "uf": "SC"
>        },
>        {
>            "stateId": 24,
>            "name": "São Paulo",
>            "uf": "SP"
>        },
>        {
>            "stateId": 25,
>            "name": "Sergipe",
>            "uf": "SE"
>        },
>        {
>            "stateId": 26,
>            "name": "Tocantins",
>            "uf": "TO"
>        },
>        {
>            "stateId": 27,
>            "name": "Distrito Federal",
>            "uf": "DF"
>        }
