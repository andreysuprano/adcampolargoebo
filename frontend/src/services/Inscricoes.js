import { http } from './config';

export default{
    listar: ()=>{
        return http.get('inscricao');
    },
    listarPorCongregacao:(congregacao) => {
        return http.get('inscricoes/'+congregacao);
    },
    cadastrar:(inscricao) => {
        return http.post('/inscricao', inscricao);        
    },
    buscar:(id) => {
        return http.get('/inscricoes/id/'+id);        
    },
}