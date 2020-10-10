<template>
  <div class="container-css">
    <div class="img-text">
      <img class="img-logo" src="../assets/img/logo_vertical.png" alt />
    </div>
      <h3>Falta só o pagamento! 😃</h3>
      <div class="btn-mp">
        <form method="POST">
          <script type="application/javascript"
          src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
          :data-preference-id="globalId">
          </script>
        </form>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"; 
export default {
  data() {
    return {
      
    };
  },
  methods: {    
    
  },
  computed: {
    ...mapGetters(['globalId'])
  },
};

</script>

<style>
  .img-text{
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

  .btn-mp{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  button.mercadopago-button {
    background-color: #ff4b2b;
    animation-duration: 10s;
    margin-top: 10px;
    width: 300px;
    height: 60px;
    font-weight: 600;
    font-family: 'Montserrat';
    font-size: 18px;
}
@media only screen and (min-width: 900px){
  .container-css{       
    max-width: 60%;
    margin-left: 350px;
  }

}

</style>