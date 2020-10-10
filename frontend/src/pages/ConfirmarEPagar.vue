<template>
  <div class="container-css">
    <header>
      <img src="../assets/img/logo-adcl.png" alt="Logo" class="img-logo" />
    </header>
    <div class="content">
      <h3 class="title-top">Seus Dados</h3>
      <span>
        <h3 class="title">Nome:</h3><h3 class="value">&nbsp;&nbsp;{{nome}}</h3> 
      </span>
      <span>
        <h3 class="title">Telefone:</h3><h3 class="value">&nbsp;&nbsp;{{telefone}}</h3> 
      </span>
      <span>
        <h3 class="title">Email:</h3><h3 class="value">&nbsp;&nbsp;{{email}}</h3> 
      </span>
      <span>
        <h3 class="title">Congregação:</h3><h3 class="value">&nbsp;&nbsp;{{congregacao}}</h3> 
      </span>
      <span>
        <h3 class="title">Cargo:</h3><h3 class="value">&nbsp;&nbsp;{{cargo}}</h3> 
      </span>
      <div id="box-btn" class="box-btn">
        <button class="btn btn-continuar" @click="salvarDados()">Confirmar dados</button>        
      </div>
      <div v-if="isLoading" class="div-icon">
        <img class="icon-loading" src="../assets/img/loading.svg" alt="carregando">
      </div>
      <div class="box-aviso">
        <p>Ao ir para o pagamento você confirma os dados acima!</p>        
      </div>      
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"; 
import axios from 'axios';
export default {  
  data() {
    return {
      btnMercadoPago: '<h1>teste</h1>',
      isLoading:false
    }
  },
  methods: { 
    ...mapMutations(["setGlobalId"]),   
    async salvarDados(){
      this.isLoading = true;
      await axios.post('http://localhost:3333/inscricao',{
        nome:this.nome,
        telefone:this.telefone,
        email:this.email,
        congregacao:this.congregacao,
        cargo:this.cargo,
        statusPagamento:"pendente",
        tipoPagamento:"online",
        tipoInscricao:"online"
      }).then()
      await this.buscaId();
      this.$router.push('/pagar');
    },
    async buscaId(){
      await axios.get('http://localhost:3333/payments/globalid')
        .then(function(response){
          this.setGlobalId(response.data.globalId);
        })
    }
    
  },
  computed: {
    ...mapGetters(['nome','telefone','email','congregacao','cargo'])
  },
};
</script>

<style scoped>
.content{
  background: rgb(255,71,71);  
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
}
header {
  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid #ddd;
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
.box-aviso{
  display: flex;
  justify-content: center;  
  width: 80%;
  margin-top:25px;
  color:#fff;
  padding:5px 25px 100px;

}

.btn-continuar {
  background-color: rgba(255, 255, 255, 0);
  border: 3px solid #fff;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  font-family: "Montserrat";
  margin-top:100px;
}
.btn-continuar:hover {
  background-color: #fff;
  color: var(--vermelho);
  animation-duration: 10s;
}
span{
  display: flex;  
  padding: 5px 25px;
}

.img-logo {
  margin-top: 20px;
  margin-bottom: 25px;
  width: 250px;
}
.title {
  font-weight: 600;
  font-size: 18px;  
  color: rgb(255, 255, 255);
}
.title-top {
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;  
  color: rgb(255, 255, 255);
  margin-bottom:50px;
}
.value {
  font-weight: 500;
  font-size: 18px;  
  color: rgb(255, 255, 255);
}
.div-icon{
  display: flex;
  justify-content: center;
}
.icon-loading{
  margin-top:15px;
  width: 50px;
}
@media only screen and (min-width: 900px) {
  .container-css {
    width: 100%;
    height: 100%;
  }
  .content{
    width: 60%;
    margin-left: 350px;
    height: 100%;
  }
  .btn {
    width: 82%;
  }
}
</style>