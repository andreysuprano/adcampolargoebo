import { http } from './config';

export default{
    authUser: (auth)=>{
        return http.post('authUser',auth);
    }
}