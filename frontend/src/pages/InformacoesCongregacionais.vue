<template>
  <div class="container-css">
    <header>
      <img src="../assets/img/logo-adcl.png" alt="Logo" class="img-logo" />
    </header>
    <div class="content">
      <h3>Informacoes  Congregacionais</h3>      
      <div class="form-group">
        <select class="form-select" id="cargo" v-model="cargo">
          <option selected>{{cargo}}</option>
          <option>Pastor</option>
          <option>Evangelista</option>
          <option>Presbítero</option>
          <option>Diácono</option>
          <option>Cooperador</option>
          <option>Coordenador de Departamento</option>
          <option>Membro</option>
        </select>
      </div>
      <div class="form-group">
        <select class="form-select" v-model="congregacao" id="Congregacao">
          <option selected>{{congregacao}}</option>
          <option>Sede</option>
          <option>Dona Fina</option>
          <option>Partenope</option>
          <option>Vila Torres</option>
          <option>Santa Angêla</option>
          <option>Albina Grigolete</option>
          <option>Balsa Nova</option>
          <option>Itaqui</option>
        </select>
      </div>
      <div class="box-btn">
        <button class="btn btn-continuar" @click="salvarDados()">Continuar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"; 
export default {
  data() {
    return {
      cargo:'Selecione Seu Cargo',
      congregacao:'Selecione Sua Congregacao',
    };
  },
  methods: {
    ...mapMutations(['setCongregacao', 'setCargo']),
    salvarDados(){
      this.setCongregacao(this.congregacao);
      this.setCargo(this.cargo);
      this.$router.push('/confirmar-dados');
    }
    
  },
  computed: {
    ...mapGetters([])
  },
};
</script>

<style scoped>
select{
  font-family: 'Montserrat';
  font-size: 15px;
}
option slected{
  background-color:var(--laranja) ;
}
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
.btn-continuar:hover {
  background-color: #fff;
  color: var(--vermelho);
  animation-duration: 10s;
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
  margin-top: 130px;
  margin-bottom: 20px;
  color: rgb(82, 82, 82);
}

@media only screen and (min-width: 900px) {
  .container-css {
    width: 100%;
    height: auto;
  }
  .btn {
    width: 82%;
  }
}
</style>