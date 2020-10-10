import { request } from 'http';
import { getRepository } from 'typeorm';
import  { Inscricao }  from '../entity/Inscricao';
import {Request, Response} from 'express';

export const getInscricoes = async (request:Request, response:Response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','Origin, X-Requested-Width, Content-Type, Accept, Autorization');
    const inscricoes = await getRepository(Inscricao).find();
    return response.json(inscricoes);
}

export const createInscricao = async (request:Request, response:Response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','Origin, X-Requested-Width, Content-Type, Accept, Autorization');
    const inscricoes = await getRepository(Inscricao).save(request.body);
    return response.json(inscricoes);
}