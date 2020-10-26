import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        barcode:0,
        usuario: 'notLogged',
        auth:false,
        user_id:0,
        jwt:''
    },
    mutations: {
        SET_BARCODE: (state, barcode) => state.barcode = barcode,
        SET_USUARIO: (state, usuario) => state.usuario = usuario,
        SET_AUTH: (state, auth) => state.auth = auth,
        SET_USUARIO_ID: (state, id) => state.user_id = id       
    }, 
    getters: {
        GET_BARCODE: (state) => state.barcode,
        GET_USUARIO: (state) => state.usuario,
        GET_AUTH: (state) => state.auth,
        GET_USUARIO_ID: (state) => state.user_id
    },
    actions: {
        SET_BARCODE: ({ commit },barcode) => commit('SET_BARCODE',barcode),
        SET_USUARIO: ({ commit },usuario) => commit('SET_USUARIO',usuario),
        SET_AUTH: ({ commit },auth) => commit('SET_AUTH',auth),
        SET_USUARIO_ID: ({ commit },id) => commit('SET_USUARIO_ID',id)
    },
    
});

export { store }
