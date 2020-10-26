import Vue from 'vue';
import Router from 'vue-router';
import Cadastro from './views/Cadastro';
import Relatorios from './views/Relatorios';
import LeitorCodigo from './views/LeitorCode';
import ConfirmarPresenca from './views/ConfirmacaoPresenca';
import Login from './views/Login';


Vue.use(Router);

export default new Router ({
    routes:[
        {
            path:'/login',
            nome:Login,
            component:Login
        },
        {
            path:'/cadastro',
            nome:Cadastro,
            component:Cadastro
        },
        {
            path:'/relatorios',
            nome:Relatorios,
            component:Relatorios
        },
        {
            path:'/leitor-codigo',
            nome:LeitorCodigo,
            component:LeitorCodigo
        },
        {
            path:'/confirmar-presenca',
            nome:ConfirmarPresenca,
            component:ConfirmarPresenca
        }
    ]
});