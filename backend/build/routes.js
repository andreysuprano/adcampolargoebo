"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var InscricaoController_1 = require("./Controller/InscricaoController");
//import { getId } from './Controller/PaymentController';
var express = require("express");
var app = express();
var routes = express_1.Router();
routes.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return response.status(200).json({});
    }
    next();
});
/*const optCors = {
    origin: 'localhost:8080/',
    optionsSuccessStatus: 200
}*/
routes.get('/inscricao', InscricaoController_1.getInscricoes);
routes.get('/inscricoes/:congregacao', InscricaoController_1.getInscricoesPorCongregacoes);
routes.post('/inscricao', InscricaoController_1.createInscricao);
//routes.get('/payments/globalid', getId);
exports.default = routes;
//# sourceMappingURL=routes.js.map