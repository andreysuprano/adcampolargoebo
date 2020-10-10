import { http } from './config';

export default {

    listar: () => {
        return http.get('inscricoes');
    },
    salvar: (inscricao) => {
        return http.post('inscricoes', inscricao);
    }

}