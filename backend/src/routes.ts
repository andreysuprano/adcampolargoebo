import { Router , Request, Response, NextFunction} from 'express';
import { createInscricao, getInscricoes } from '../src/Controller/InscricaoController';
import { getId } from './Controller/PaymentController';
import * as cors from 'cors';
import * as express from 'express';

const app =  express();
app.use(cors);

const routes = Router();
/*
routes.use((request:Request,response:Response, next:NextFunction) => {    
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Header','*');    
    if(request.method === 'OPTIONS'){
        response.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        return response.status(200).json({});
    }
    next();
});
*/
const optCors = {  
    origin: 'localhost:8080/',
    optionsSuccessStatus: 200
}
routes.get('/inscricao', cors(optCors), getInscricoes);

routes.post('/inscricao', cors(optCors), createInscricao);

routes.get('/payments/globalid', getId);

export default routes;