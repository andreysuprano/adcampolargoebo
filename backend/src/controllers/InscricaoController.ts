import { getRepository} from 'typeorm';
import Inscricao from '../models/Inscricao';
import {Request, Response} from 'express';

export const getInscricoes = async (request:Request, response:Response) => {
    const inscricoes = await getRepository(Inscricao).find();
    return response.json(inscricoes);
}

export const getInscricoesPorCongregacoes = async (request:Request, response:Response) => {   
    const congregacaoParametro = request.params.congregacao;                   
    const inscricoes = await getRepository(Inscricao).find({ where: { congregacao: congregacaoParametro}});  
    return response.json(inscricoes);    
}

export const getInscricoesPorId = async (request:Request, response:Response) => {   
    const idParametro = request.params.id;                   
    const inscricoes = await getRepository(Inscricao).findOne({ where: { id: idParametro}});  
    return response.json(inscricoes);    
}

export const getInscricoesPorCargo = async (request:Request, response:Response) => {   
    const cargoParametro = request.params.cargo; 
    if(cargoParametro){
        const inscricoes = await getRepository(Inscricao).find({ where: { cargo: cargoParametro}});  
        return response.json(inscricoes);
    }else{
        response.send({message:"Cargo é Obrigatório"}).sendStatus(400);
    }
}
export const createInscricao = async (request:Request, response:Response) => {
    const inscricoes = await getRepository(Inscricao).save(request.body);
    return response.json(inscricoes);
}