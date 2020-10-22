import { request } from 'http';
import { getRepository, createQueryBuilder} from 'typeorm';
import  { Inscricao }  from '../entity/Inscricao';
import {Request, Response} from 'express';

export const getInscricoes = async (request:Request, response:Response) => {
    const inscricoes = await getRepository(Inscricao).find();
    return response.json(inscricoes);
}

export const getInscricoesPorCongregacoes = async (request:Request, response:Response) => {   
    const congregacaoParametro = request.params.congregacao                      
    const inscricoes = await getRepository(Inscricao).find({ where: { congregacao: congregacaoParametro}});  
    return response.json(inscricoes);    
}

export const createInscricao = async (request:Request, response:Response) => {
    const inscricoes = await getRepository(Inscricao).save(request.body);
    return response.json(inscricoes);
}