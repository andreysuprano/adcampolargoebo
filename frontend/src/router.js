import Vue from 'vue';
import Router from 'vue-router';
import Cadastro from './views/Cadastro';
import Relatorios from './views/Relatorios';


Vue.use(Router);

export default new Router ({
    routes:[
        {
            path:'/cadastro',
            nome:Cadastro,
            component:Cadastro
        },
        {
            path:'/relatorios',
            nome:Relatorios,
            component:Relatorios
        }
    ]
});