import Vue from 'vue';
import Router from 'vue-router';
import Cadastro from './views/Cadastro';
import Relatorios from './views/Relatorios';
import LeitorCodigo from './views/LeitorCode';
import ConfirmarPresenca from './views/ConfirmacaoPresenca';
import Impressao from './views/Impressao';
import Login from './views/Login';
import Presenca from './views/Presenca';



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
        },
        {
            path:'/impressao',
            nome:Impressao,
            component:Impressao
        },
        {
            path:'/presenca',
            nome:Presenca,
            component:Presenca
        }
    ]
});