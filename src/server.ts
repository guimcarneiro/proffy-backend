import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors()); //Implementa CORS.
app.use(express.json()); //Introduza um plugin express.json(), ele vai converter o request-body para json
app.use(routes); //Utiliza as rotas criadas utilizando o módulo Routes do express.

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

/* Tipos de parametros de uma requisição */
// Corpo (Request Body): Dados para criação ou atualização de um registro: request.body
// Route Params: Identificar qual recurso eu quero atualizar ou deletar: request.params
// Query Params: Paginação, filtros, ordenação: request.query

app.listen(3333);

