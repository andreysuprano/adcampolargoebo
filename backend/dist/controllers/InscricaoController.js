"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInscricao = exports.getInscricoesPorCargo = exports.getInscricoesPorId = exports.getInscricoesPorCongregacoes = exports.getInscricoes = void 0;
const typeorm_1 = require("typeorm");
const Inscricao_1 = __importDefault(require("../models/Inscricao"));
exports.getInscricoes = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find();
    return response.json(inscricoes);
};
exports.getInscricoesPorCongregacoes = async (request, response) => {
    const congregacaoParametro = request.params.congregacao;
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { congregacao: congregacaoParametro } });
    return response.json(inscricoes);
};
exports.getInscricoesPorId = async (request, response) => {
    const idParametro = request.params.id;
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).findOne({ where: { id: idParametro } });
    return response.json(inscricoes);
};
exports.getInscricoesPorCargo = async (request, response) => {
    const cargoParametro = request.params.cargo;
    if (cargoParametro) {
        const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { cargo: cargoParametro } });
        return response.json(inscricoes);
    }
    else {
        response.send({ message: "Cargo é Obrigatório" }).sendStatus(400);
    }
};
exports.createInscricao = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).save(request.body);
    return response.json(inscricoes);
};
