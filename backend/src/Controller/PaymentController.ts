import { Request , Response } from 'express';
import { getGlobalId } from '../Utils/Payment.js'; 

export const getId = async (request:Request, response:Response) => {
    const globalId = getGlobalId();
    return response.json({
        globalId:globalId    
    });
}
