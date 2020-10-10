<template>
  <div class="container-css">
    <div class="img-text">
      <img class="img-logo" src="../assets/img/logo_vertical.png" alt />
    </div>
      <h3>Bem vindo ao portal da</h3>
      <h3>Escola Bíblica de Obreiros!</h3>
    <div class="box-btn">
      <a href class="btn btn-inscrito">Já sou inscrito</a>
    </div>
    <div class="box-btn">
      <a class="btn btn-inscrever" @click="inscreverse()" >Quero me inscrever</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
    };
  },
  methods: {
    inscreverse() {
      this.$router.push({path:'/informacoes-pessoais'})
    },
  },
};
</script>

<style scoped>
  .img-text{
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 70%;
    margin-top: 10px;
  }
  .box-btn {
    display: flex;
    justify-content: center;
  }

  .img-logo {      
    margin-top: 50px;
    margin-bottom: 25px;
    width: 400px;
  }
  h3 {
    display: flex;
    justify-content: center;
    font-weight: 400;
    font-size: 18px;
  }
  .form-input {
    margin-top: 25px;
  }
  a {
    padding: 35px;
    font-size: 18px;
    font-weight:600;
  }

  .btn-inscrever {
    background-color: #fff;
    color: var(--vermelho);
    border: 2px solid var(--vermelho); 
  }
  .btn-inscrever:hover {
    background-color: var(--vermelho);
    color: #fff;
    animation-duration: 10s;
  }
  .btn-inscrito {
    margin-top: 25px;  
  }
  .btn-inscrito:hover {
    background-color: #ff4b2b;
    animation-duration: 10s;
  }
@media only screen and (min-width: 900px){
  .container-css{       
    max-width: 60%;
    margin-left: 350px;
  }

}


</style>