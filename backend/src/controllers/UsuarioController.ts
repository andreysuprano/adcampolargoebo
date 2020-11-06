import { getRepository} from 'typeorm';
import Usuario from '../models/Usuario';
import {Request, Response} from 'express';

export const authUser = async (request:Request, response:Response) => {
    const usuario = request.body;
    if(request.body){
        const usernameParametro = request.body.username;
        const senhaParametro = request.body.senha;
        const usuario = await getRepository(Usuario).findOne({where: [{username : usernameParametro}]});
        var usuarioLogado;
        if(usuario){
            if(usuario.senha == senhaParametro){
                usuarioLogado = { 
                    auth:true,
                    user_id:usuario.id,
                    user:usernameParametro 
                }       
                return response.json(usuarioLogado);
            }else{
                return response.status(401).send({Message:"Usuário ou senha incorretos!"});
            }            
        }else{
            return response.status(401).send({Message:"Usuário ou senha incorretos!" });
        }                 
    }else{
        return response.status(401).send({Message:"Usuário ou senha são Obrigatórios!"});        
    }
    
}