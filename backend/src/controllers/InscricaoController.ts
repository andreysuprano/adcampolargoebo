import { getRepository, getConnection } from 'typeorm';
import Inscricao from '../models/Inscricao';
import { Request, Response } from 'express';

export const getInscricoes = async (request: Request, response: Response) => {
    const inscricoes = await getRepository(Inscricao).find();
    return response.json(inscricoes);
}

export const getInscricoesPorCongregacoes = async (request: Request, response: Response) => {
    const congregacaoParametro = request.params.congregacao;
    const inscricoes = await getRepository(Inscricao).find({ where: { congregacao: congregacaoParametro } });
    return response.json(inscricoes);
}

export const getInscricoesPorId = async (request: Request, response: Response) => {
    const idParametro = request.params.id;
    const inscricoes = await getRepository(Inscricao).findOne({ where: { id: idParametro } });
    return response.json(inscricoes);
}

export const getInscricoesPorCargo = async (request: Request, response: Response) => {
    const cargoParametro = request.params.cargo;
    if (cargoParametro) {
        const inscricoes = await getRepository(Inscricao).find({ where: { cargo: cargoParametro } });
        return response.json(inscricoes);
    } else {
        response.send({ message: "Cargo é Obrigatório" }).sendStatus(400);
    }
}
export const createInscricao = async (request: Request, response: Response) => {
    const inscricoes = await getRepository(Inscricao).save(request.body);
    return response.json(inscricoes);
}

export const deleteInscricao = async (request: Request, response: Response) => {
    const id = request.params.id;
    if (id) {
        const deletado = await getRepository(Inscricao).delete(id);
        console.log(deletado);
        return response.status(200).json({ Message: 'Deletado com sucesso!' });
    } else {
        return response.status(400).json({ Message: 'Id ão pode ser vazio!' });
    }
}

export const getInscricoesPorNome = async (request: Request, response: Response) => {
    const nomeParametro = request.params.nome;
    if (nomeParametro) {
        const inscricoes = await getRepository(Inscricao).find({ where: { nome: nomeParametro } });
        return response.json(inscricoes);
    } else {
        response.send({ message: "Nome é Obrigatório" }).sendStatus(400);
    }
}

export const getInscricoesPresentes = async (request: Request, response: Response) => {
    const inscricoes = await getRepository(Inscricao).find({ where: { presenca2: 'presente' } });
    return response.json(inscricoes);
}

export const getInscricoesEtiquetas = async (request: Request, response: Response) => {
    const inscricoes = await getRepository(Inscricao).find({ order: { nome: 'ASC' } });
    return response.json(inscricoes);
}

export const confirmaIncricao = async (request: Request, response: Response) => {
    const idConfirmar = request.params.id;
    const inscricoes = await getRepository(Inscricao)
        .createQueryBuilder()
        .update(Inscricao)
        .set({
            presenca2: 'presente',
        })
        .where("id = :id", { id: idConfirmar })
        .execute();
    return response.json(inscricoes);
}