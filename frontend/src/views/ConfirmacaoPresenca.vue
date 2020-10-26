<template>
  <div>
    <Nav />
    <div class="container">
      <div class="content" v-if="loading == false">
        <h3>Confirmar Presença</h3>
        <h5>
          Matricula: <strong>{{ inscricao.matricula }}</strong>
        </h5>
        <h5>
          Nome: <strong>{{ inscricao.nome }}</strong>
        </h5>
        <h5>
          Telefone: <strong>{{ inscricao.telefone }}</strong>
        </h5>
        <h5>
          Congregacao: <strong>{{ inscricao.congregacao }}</strong>
        </h5>
        <h5>
          Cargo: <strong>{{ inscricao.cargo }}</strong>
        </h5>
        <button
          type="button"
          class="btn btn-laranja"
          v-if="isLoading == false"
          @click="SalvarForm()"
        >
          Confirmar
        </button>
        <button
          type="button"
          class="btn btn-laranja"
          v-if="isLoading == true"
          @click="SalvarForm()"
        >
          <img src="../assets/Loading.svg" style="height: 30px" />
        </button>
      </div>
      <div class="loading" v-if="loading == true">
        <img src="../assets/Loading.svg" style="height: 150px" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Inscricao from "../services/Inscricoes";
import Nav from '../components/Nav';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isLoading: false,
      loading: true,
      inscricao: {
        nome: "",
        matricula: "",
        telefone: "",
        email: "",
        cargo: "",
        congregacao: "",
      },
    };
  },
  computed: {
    ...mapGetters(["GET_BARCODE"]),
  },
  mounted() {
    Inscricao.buscar(this.GET_BARCODE).then((response) => {
      this.inscricao.nome = response.data.nome;
      this.inscricao.matricula = response.data.id;
      this.inscricao.telefone = response.data.telefone;
      this.inscricao.email = response.data.email;
      this.inscricao.cargo = response.data.cargo;
      this.inscricao.congregacao = response.data.congregacao;
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.content {
  margin-top: 50px;
  background-color: rgb(245, 240, 240);
  border-radius: 3px;
  padding: 20px;
}
.btn-laranja {
  background-color: #f8694d;
  color: #fff;
  width: 100%;
  margin-top: 20px;
  font-weight: 700;
  height: 60px;
}
.btn-laranja:hover {
  background-color: #f15232;
}
.loading {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>