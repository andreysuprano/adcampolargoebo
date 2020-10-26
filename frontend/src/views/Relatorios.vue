<template>
  <div>
    <Nav />
    <div class="container">
      <div class="cards">
        <div class="row w-100">
          <div class="col-md-3">
            <div class="card border-info mx-sm-1 p-3">
              <div class="card border-info shadow text-info p-3 my-card">
                <span class="fa fa-users" aria-hidden="true"></span>
              </div>
              <div class="text-info text-center mt-3"><h4>Inscritos</h4></div>
              <div class="text-info text-center mt-2">
                <h1>{{ Inscritos }}</h1>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
              <div class="card border-success shadow text-success p-3 my-card">
                <span class="fas fa-user-check" aria-hidden="true"></span>
              </div>
              <div class="text-success text-center mt-3">
                <h4>Presentes</h4>
              </div>
              <div class="text-success text-center mt-2"><h1>0</h1></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
              <div class="card border-danger shadow text-danger p-3 my-card">
                <span class="fas fa-user-slash" aria-hidden="true"></span>
              </div>
              <div class="text-danger text-center mt-3"><h4>Faltantes</h4></div>
              <div class="text-danger text-center mt-2"><h1>0</h1></div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
              <div class="card border-warning shadow text-warning p-3 my-card">
                <span class="fas fa-smile-wink" aria-hidden="true"></span>
              </div>
              <div class="text-warning text-center mt-3">
                <h4>Satisfeitos</h4>
              </div>
              <div class="text-warning text-center mt-2"><h1>0</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-relatorio">
        <div class="content-table">
          <div class="row">
            <h4 class="titulo-tabela">Por Congregação</h4>
            <div class="col-4">
              <select
                id="inputState"
                class="form-control"
                v-model="Congregacao"
              >
                <option selected>{{ Congregacao }}</option>
                <option>Sede</option>
                <option>Dona Fina</option>
                <option>Vila Torres</option>
                <option>Santa Angela</option>
                <option>Miqueleto</option>
                <option>Partênope</option>
                <option>Jardim Social</option>
                <option>Jardim Nely</option>
                <option>Jardim Itaboa</option>
                <option>Jardim Guarani</option>
                <option>Jardim Itaqui</option>
                <option>Jardim Rondinha</option>
                <option>Taquara</option>
                <option>Águas Claras</option>
                <option>Bateias</option>
                <option>Esmeralda</option>
                <option>Taquarinha</option>
                <option>Acácias</option>
                <option>Meliane</option>
                <option>Gorski</option>
                <option>Albina Girgolete</option>
                <option>Novo Horizonte</option>
                <option>Lajeado</option>
                <option>Botiatuva</option>
                <option>Sete Salto</option>
                <option>Rivabem</option>
                <option>Santa Cruz</option>
                <option>Itambezinho</option>
                <option>Vila Glória</option>
                <option>Carmela</option>
                <option>São Pedro</option>
                <option>Tres Rios</option>
                <option>São Caetano</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-laranja"
              @click="listarPorCongregacao()"
            >
              <i class="fas fa-search"></i>Buscar
            </button>
            <h5>Total {{ Total }}</h5>
          </div>
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Congregação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="inscricao of InscricoesPorCongregacao"
                    :key="inscricao.id"
                  >
                    <th>{{ inscricao.id }}</th>
                    <td>{{ inscricao.nome }}</td>
                    <td>{{ inscricao.telefone }}</td>
                    <td>{{ inscricao.email }}</td>
                    <td>{{ inscricao.cargo }}</td>
                    <td>{{ inscricao.congregacao }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-falso"></div>
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
      InscricoesPorCongregacao: [],
      Congregacao: "Selecione...",
      Cargo: "Selecione...",
      Total: 0,
      Inscritos: 0,
    };
  },
  methods: {
    listarPorCongregacao() {
      Inscricao.listarPorCongregacao(this.Congregacao).then((response) => {
        this.InscricoesPorCongregacao = response.data;
        this.Total = this.InscricoesPorCongregacao.length;
      });
    },
  },
  mounted() {
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("/login");
    } else {
      Inscricao.listar().then((response) => {
        this.InscricoesPorCongregacao = response.data;
        this.Total = this.InscricoesPorCongregacao.length;
        this.Inscritos = this.InscricoesPorCongregacao.length;
      });
    }
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
.content-table {
  margin-top: 50px;
  background-color: rgb(245, 240, 240);
  border-radius: 3px;
  padding: 20px;
}
.titulo-tabela {
  margin-left: 15px;
  margin-bottom: 10px;
}
.btn-laranja {
  background-color: #f8694d;
  color: #fff;
  width: 10%;
  font-weight: 700;
  height: 38px;
}
i {
  margin-right: 8px;
}
.my-custom-scrollbar {
  position: relative;
  height: 300px;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}
select {
  margin-bottom: 15px;
}
.footer-falso {
  margin-top: 150px;
}
h5 {
  margin-top: 5px;
  margin-left: 15px;
}
.my-card {
  position: absolute;
  left: 40%;
  top: -20px;
  border-radius: 10%;
}
.cards {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: -10px;
}
</style>