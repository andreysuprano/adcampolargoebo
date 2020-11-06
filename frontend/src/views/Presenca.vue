<template>
  <div>
    <Nav />
    <div class="container">      
      <div class="content" v-if="loading == false">
            <div class="">
            <input type="text" class="form-control" placeholder="Matrícula" v-model="matricula">
            <button class="btn btn-laranja" @click="Buscar()">Buscar</button>
        </div>
        <h3>Presenças</h3>
        <h5>Nome: <strong>{{inscrito.nome}}</strong></h5>        
        <h5>Quinta-Feira: <strong>{{inscrito.presenca1}}</strong></h5>
        <h5>Sexta-Feira: <strong>{{inscrito.presenca2}}</strong></h5>
        <h5>Sabado - Tarde: <strong>{{inscrito.presenca3}}</strong></h5>
        <h5>Sabado - Noite: <strong>{{inscrito.presenca4}}</strong></h5>
        <h5>Domingo: <strong>{{inscrito.presenca5}}</strong></h5>
      </div>      
    </div>
  </div>
</template>

<script>
import Inscricao from "../services/Inscricoes";
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      loading: false,
      matricula:'',
      inscrito:{
          nome:'',
          presenca1:'',
          presenca2:'',
          presenca3:'',
          presenca4:'',
          presenca5:'',
      }
    };
  },
  methods: {
      Buscar() {
          Inscricao.buscar(this.matricula).then((response) => {
              this.inscrito.nome = response.data.nome;
              this.inscrito.presenca1 = response.data.presenca1;
              this.inscrito.presenca2 = response.data.presenca2;
              this.inscrito.presenca3 = response.data.presenca3;
              this.inscrito.presenca4 = response.data.presenca4;
              this.inscrito.presenca5 = response.data.presenca5;
          }).catch((response) => {
              console.log('deu ruim',response)
          });
      }
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.content {
  margin-top: 50px;
  background-color: rgb(245, 240, 240);
  border-radius: 3px;
  padding: 20px;
}
.loading {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.btn-laranja {
  background-color: #f8694d;
  color: #fff;
  width: 100%;
  margin-top: 20px;
  font-weight: 700;
  height: 60px;
  margin-bottom: 50px;
}
.btn-laranja:hover {
  background-color: #f15232;
}
</style>