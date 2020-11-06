<template>
  <div class="container">
      <div class="row">
        <h2 style="margin-top:25px;margin-bottom:25px;margin-right:25px ">{{congregacao}}</h2>
        <h2 style="margin-top:25px;margin-bottom:25px;">Total: {{InscricoesPorCongregacao.length }}</h2>
      </div>
    <table class="table" ref="tabela">
      <thead>
        <tr>
          <th scope="col">Matricula</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Cargo</th>
          <th scope="col">Congregação</th>
          <th scope="col">Pagamento</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="inscricao of InscricoesPorCongregacao" :key="inscricao.id">
          <th>{{ inscricao.id }}</th>
          <td>{{ inscricao.nome }}</td>
          <td>{{ inscricao.telefone }}</td>
          <td>{{ inscricao.cargo }}</td>
          <td>{{ inscricao.congregacao }}</td>
          <td>{{ inscricao.statusPagamento }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Inscricao from "../services/Inscricoes";

export default {
  data() {
    return {
      InscricoesPorCongregacao: [],
    };
  },
  props: {
      congregacao: {
          type: String,
      },
  },

  mounted() {
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("/login");
    } else {
      Inscricao.listarPorCongregacao(this.congregacao).then((response) => {
        this.InscricoesPorCongregacao = response.data;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>