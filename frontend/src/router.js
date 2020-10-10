import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import InformacoesPessoais from './pages/InformacoesPessoais';
import InformacoesCongregacionais from './pages/InformacoesCongregacionais';
import ConfirmarEPagar from './pages/ConfirmarEPagar';
import Pagar from './pages/Pagar';

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/ebo-2020',
            nome:'Home',
            component: Home
        },
        {
            path:'/informacoes-pessoais',
            nome:'Informacoes Pessoais',
            component: InformacoesPessoais
        },
        {
            path:'/informacoes-congregacionais',
            nome:'Informacoes Congregacionais',
            component: InformacoesCongregacionais
        },
        {
            path:'/confirmar-dados',
            nome:'Confirmar Dados',
            component: ConfirmarEPagar
        },
        {
            path:'/pagar',
            nome:'Confirmar e Pagar',
            component: Pagar
        }
    ]
})