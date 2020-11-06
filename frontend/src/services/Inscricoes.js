import { http } from './config';

export default{
    listar: ()=>{
        return http.get('inscricao');
    },
    listarPresentes: ()=>{
        return http.get('inscricao/presentes');
    },
    listarPorCongregacao:(congregacao) => {
        return http.get('inscricoes/'+congregacao);
    },
    listarPorNome:(nome) => {
        return http.get('inscricoes/nome/'+nome);
    },
    cadastrar:(inscricao) => {
        return http.post('/inscricao', inscricao);        
    },
    buscar:(id) => {
        return http.get('/inscricoes/id/'+id);        
    },
    deletar:(id) => {
        return http.delete('inscricoes/id/'+id);        
    },
    confirmarPresenca:(id) => {
        return http.post('confirmar/'+id);        
    },
}