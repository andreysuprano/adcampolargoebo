import { Router , Request, Response, NextFunction} from 'express';
import { createInscricao, getInscricoes, getInscricoesPorCongregacoes, 
         getInscricoesPorCargo, getInscricoesPorId, getInscricoesPorNome, 
         deleteInscricao, getInscricoesEtiquetas, confirmaIncricao ,getInscricoesPresentes
} from './controllers/InscricaoController';
//import { getId } from './Controller/PaymentController';
import express from 'express';
import { authUser } from './controllers/UsuarioController';

const app =  express();
const routes = Router();

routes.use((request:Request,response:Response, next:NextFunction) => {    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');    
    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        return response.status(200).json({});
    }
    next();
});

/*const optCors = {  
    origin: 'localhost:8080/',
    optionsSuccessStatus: 200
}*/
routes.get('/inscricao', getInscricoes);

routes.get('/inscricao/presentes', getInscricoesPresentes);

routes.get('/inscricao/etiquetas', getInscricoesEtiquetas);

routes.get('/inscricoes/:congregacao', getInscricoesPorCongregacoes);

routes.get('/inscricoes/cargo/:cargo', getInscricoesPorCargo);

routes.get('/inscricoes/nome/:nome', getInscricoesPorNome);

routes.get('/inscricoes/id/:id', getInscricoesPorId);

routes.post('/inscricao', createInscricao);

routes.post('/confirmar/:id', confirmaIncricao)

routes.post('/authUser', authUser);

routes.delete('/inscricoes/id/:id', deleteInscricao);

//routes.get('/payments/globalid', getId);

export default routes;