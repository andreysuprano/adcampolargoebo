<template>
  <div class="container-css">
    <header>
      <img src="../assets/img/logo-adcl.png" alt="Logo" class="img-logo" />
    </header>
    <div class="content">
      <h3>Informações Pessoais</h3>
      <div class="form-group">
        <input
          v-model="nome"
          type="text"
          class="form-input"
          style="margin-top:25px"
          placeholder="Insira seu Nome"
        />
      </div>
      <div class="form-group">
        <input
          v-model="telefone"
          type="text"
          class="form-input"
          placeholder="Insira seu Telefone"
          v-mask="'(##)#####-####'"
        />
      </div>
      <div class="form-group">
        <input type="email" class="form-input" placeholder="Insira seu E-mail" v-model="email" />
      </div>
      <div class="box-btn">
        <button class="btn btn-continuar" @click="salvarDados()" >Continuar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMask from 'v-mask'
import { VueMaskFilter } from 'v-mask'
import { VueMaskDirective } from 'v-mask'

import { mapMutations } from "vuex";

Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
Vue.filter('VMask', VueMaskFilter);

export default {
  name: "InformacoesPessoais",
  data() {
    return {
      nome: '',
      telefone: '',
      email: '',
    };
  },
  methods: {
    ...mapMutations(["setNome", "setTelefone", "setEmail"]),
    salvarDados() {
      this.setNome(this.nome);
      this.setTelefone(this.telefone);
      this.setEmail(this.email);
      this.$router.push('/informacoes-congregacionais');
    },
  },  
};
</script>

<style scoped>
.box {
  width: 90%;
  height: 100%;
  margin-top: 100px;
}
header {
  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid #ddd;
}

.form-group {
  display: flex;
  justify-content: center;
}
.btn {
  width: 90%;
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.box-btn {
  display: flex;
  justify-content: center;
}
.btn-continuar {
  background-color: var(--vermelho);
  border: 3px solid var(--vermelho);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Montserrat";
}

.img-logo {
  margin-top: 20px;
  margin-bottom: 25px;
  width: 250px;
}
h3 {
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 24px;
  font-weight: 300;
  margin-top: 100px;
  color: rgb(82, 82, 82);
}
@media only screen and (min-width: 900px) {
  .container-css {
    width: 100%;
    height: auto;
  }
  .btn {
    width: 86%;
  }
}
</style>