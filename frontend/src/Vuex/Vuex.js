import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        nome:'',
        telefone:'',
        email:'',
        congregacao:'',
        cargo:'',
        globalId:''
    },
    mutations:{
        setNome: (state,nome) => state.nome = nome,
        setTelefone: (state,telefone) => state.telefone = telefone,
        setEmail:(state,email) => state.email = email,
        setCongregacao:(state,congregacao) => state.congregacao = congregacao,
        setCargo:(state,cargo) => state.cargo = cargo,
        setGlobalId:(state,globalId) => state.globalId = globalId
    },
    getters:{
        nome: state => state.nome,
        telefone: state => state.telefone,
        email: state =>state.email,
        congregacao: state => state.congregacao,
        cargo:state => state.cargo,
        globalId:state => state.globalId
    },
    actions:{

    }

});

export {store}
