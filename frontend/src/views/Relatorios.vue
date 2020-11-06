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
                <h1 style="margin-left: 20px">
                  <i
                    v-if="loadingTable == true"
                    class="fas fa-circle-notch fa-spin"
                  ></i>
                </h1>
                <h1 v-if="loadingTable == false">{{ Inscritos }}</h1>
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
              <div class="text-success text-center mt-2">
                <h1 style="margin-left: 20px">
                  <i
                    v-if="loadingTable == true"
                    class="fas fa-circle-notch fa-spin"
                  ></i>
                </h1>
                <h1 v-if="loadingTable == false">{{presentes.length}}</h1>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
              <div class="card border-danger shadow text-danger p-3 my-card">
                <span class="fas fa-user-slash" aria-hidden="true"></span>
              </div>
              <div class="text-danger text-center mt-3"><h4>Faltantes</h4></div>
              <div class="text-danger text-center mt-2">
                <h1 style="margin-left: 20px">
                  <i
                    v-if="loadingTable == true"
                    class="fas fa-circle-notch fa-spin"
                  ></i>
                </h1>
                <h1 v-if="loadingTable == false">{{Inscritos - presentes.length}}</h1>
              </div>
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
              <div class="text-warning text-center mt-2">
                <h1 style="margin-left: 20px">
                  <i
                    v-if="loadingTable == true"
                    class="fas fa-circle-notch fa-spin"
                  ></i>
                </h1>
                <h1 v-if="loadingTable == false">0</h1>
              </div>
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
                <option>Visitante</option>
              </select>
            </div>
            <button
              type="button"
              class="btn btn-laranja"
              @click="listarPorCongregacao()"
            >
              <i class="fas fa-search"></i>Buscar
            </button>
            <h5 v-if="loadingTable == false">Total {{ Total }}</h5>
            <h3 style="margin-left: 20px">
              <i
                v-if="loadingTable == true"
                class="fas fa-circle-notch fa-spin"
              ></i>
            </h3>
          </div>
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <div class="table-responsive">
              <table class="table" ref="tabela">
                <thead>
                  <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Congregação</th>
                    <th scope="col">Pagamento</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">&nbsp;</th>
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
                    <td>{{ inscricao.cargo }}</td>
                    <td>{{ inscricao.congregacao }}</td>
                    <td>{{ inscricao.statusPagamento }}</td>
                    <td>
                      <button
                        type="button"
                        id="btn-editar"
                        class="btn btn-dark"
                        @click="editar(inscricao.id)"
                        data-toggle="modal"
                        data-target="#editar"
                      >
                        <i class="btnicon fas fa-pencil-alt"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deletar(inscricao.id)"
                      >
                        <i class="btnicon fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button
            style="width: 100px; height: 40px"
            type="button"
            class="btn btn-danger"
            @click="gerarPdf()"
          >
            <i class="btnicon fas fa-print"></i>
          </button>
        </div>
        <div id="snackbar">{{ Message }}</div>
      </div>
    </div>
    <div class="container">
      <div class="card-relatorio">
        <div class="content-table">
          <div class="row">
            <h4 class="titulo-tabela">Por Nome</h4>
            <div class="col-4">
              <input
                type="text"
                class="form-control"
                v-model="nome"
                style="margin-bottom: 20px"
              />
            </div>
            <button
              type="button"
              class="btn btn-laranja"
              @click="listarPorNome()"
            >
              <i class="fas fa-search"></i>Buscar
            </button>
            <h5 v-if="loadingTable == false">Total {{ TotalNome }}</h5>
            <h3 style="margin-left: 20px">
              <i
                v-if="loadingTable == true"
                class="fas fa-circle-notch fa-spin"
              ></i>
            </h3>
          </div>
          <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <div class="table-responsive">
              <table class="table" ref="tabela">
                <thead>
                  <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Congregação</th>
                    <th scope="col">Pagamento</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="inscricao of InscricoesPorNome"
                    :key="inscricao.id"
                  >
                    <th>{{ inscricao.id }}</th>
                    <td>{{ inscricao.nome }}</td>
                    <td>{{ inscricao.telefone }}</td>
                    <td>{{ inscricao.cargo }}</td>
                    <td>{{ inscricao.congregacao }}</td>
                    <td>{{ inscricao.statusPagamento }}</td>
                    <td>
                      <button
                        type="button"
                        id="btn-editar"
                        class="btn btn-dark"
                        @click="editar(inscricao.id)"
                        data-toggle="modal"
                        data-target="#editar"
                      >
                        <i class="btnicon fas fa-pencil-alt"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        @click="deletar(inscricao.id)"
                      >
                        <i class="btnicon fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="footer-falso"></div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade static"
      id="editar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Editar Inscrição
            </h5>
            <button
              id="fecharmodal"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="limpaForm()"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="loading == true">
            <i
              class="fas fa-circle-notch fa-spin"
              id="loading"
              style="font-size: 50px"
            ></i>
          </div>
          <div class="modal-body" v-if="loading == false">
            <div class="row">
              <div class="col">
                <label for="inputEmail4">Matricula</label>
                <input
                  id="matricula"
                  type="text"
                  class="form-control"
                  required
                  v-model="InscricaoFormulario.id"
                  disabled
                />
              </div>
              <div class="col">
                <label for="inputEmail4">Telefone</label>
                <input
                  id="telefone"
                  type="text"
                  class="form-control"
                  v-mask="'(##)#####-####'"
                  placeholder="(41)98765-4321"
                  v-model="InscricaoFormulario.telefone"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="inputEmail4">Nome</label>
                <input
                  id="nome"
                  type="text"
                  class="form-control"
                  placeholder="Nome Completo"
                  required
                  v-model="InscricaoFormulario.nome"
                />
              </div>
              <div class="col">
                <label for="inputEmail4">Pagamento</label>
                <select
                  class="form-control"
                  v-model="InscricaoFormulario.statusPagamento"
                  id="pagamento"
                >
                  <option selected disabled value="">Selecione...</option>
                  <option>pago</option>
                  <option>pendente</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  id="email"
                  v-model="InscricaoFormulario.email"
                />
              </div>
              <div class="col">
                <label for="inputState">Congregação</label>
                <select
                  class="form-control"
                  required
                  id="congregacao"
                  v-model="InscricaoFormulario.congregacao"
                >
                  <option selected disabled value="">Selecione...</option>
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
                  <option>Visitante</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="inputState">Cargo</label>
                <select
                  class="form-control"
                  v-model="InscricaoFormulario.cargo"
                  id="cargo"
                >
                  <option selected disabled value="">Selecione...</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Evangelista">Evangelista</option>
                  <option value="Presbítero">Presbítero</option>
                  <option value="Diácono">Diácono</option>
                  <option value="Cooperador">Cooperador</option>
                  <option value="Membro">Membro</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" @click="salvar()">
              Salvar
            </button>
          </div>
        </div>
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
      InscricoesPorCongregacao: [],
      InscricoesPorNome: [],
      Message: "",
      presentes:'',
      Congregacao: "",
      Cargo: "Selecione...",
      Total: 0,
      Inscritos: 0,
      loading: true,
      loadingTable: true,
      TotalNome:0,
      nome: "",
      InscricaoFormulario: {
        id: "",
        nome: "",
        telefone: "",
        email: "",
        congregacao: "",
        cargo: "",
        statusPagamento: "",
      },
      inscricaoEmBranco: {
        nome: "",
        telefone: "",
        email: "",
        congregacao: "",
        cargo: "",
      },
    };
  },
  methods: {
    listarPorCongregacao() {
      if (!this.Congregacao) {
        Inscricao.listar().then((response) => {
          this.InscricoesPorCongregacao = response.data;
          this.Total = this.InscricoesPorCongregacao.length;
        });
      } else {
        Inscricao.listarPorCongregacao(this.Congregacao).then((response) => {
          this.InscricoesPorCongregacao = response.data;
          this.Total = this.InscricoesPorCongregacao.length;
        });
      }
    },
    listarPorNome() {
      this.InscricoesPorNome = this.InscricoesPorCongregacao.filter((inscricao)=>{return inscricao.nome.includes(this.nome)}); 
      this.TotalNome = this.InscricoesPorNome.length;
    },
    limpaForm() {
      this.InscricaoFormulario = this.inscricaoEmBranco;
    },
    editar(id) {
      this.loading = true;
      console.log(id);
      document.getElementById("editar").setAttribute("show", "true");
      Inscricao.buscar(id).then((response) => {
        this.InscricaoFormulario = response.data;
        this.loading = false;
      });
    },
    deletar(id) {
      Inscricao.deletar(id)
        .then(() => {
          console.log("deletou");
          this.listarPorCongregacao();
        })
        .catch(() => {
          console.log("deu ruim");
        });
    },
    salvar() {
      Inscricao.cadastrar(this.InscricaoFormulario)
        .then(() => {
          this.listarPorCongregacao();
          document.getElementById("fecharmodal").click();
          this.Message = "Inscrição alterada com sucesso!";
          this.limpaForm();
          this.MostraToast();
        })
        .catch(() => {
          this.salvar();
        });
    },
    gerarPdf() {
      this.$router.push("/impressao");
    },
    MostraToast() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
  },
  mounted() {
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("/login");
    } else {
      if(localStorage.getItem("usuario") == 'Recepcao'){
        this.$router.push("/leitor-codigo");
      }else{
        Inscricao.listar().then((response) => {
          this.InscricoesPorCongregacao = response.data;
          this.Total = this.InscricoesPorCongregacao.length;
          this.Inscritos = this.InscricoesPorCongregacao.length;
          this.loadingTable = false;
        });
        Inscricao.listarPresentes().then((response) => {
          this.presentes = response.data
        });
      }
    }
  },
};
</script>

<style scoped>
.btnicon {
  margin-left: 7px;
}

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
  height: 400px;
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
.btn {
  border-radius: 2px;
}
.box-table {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>