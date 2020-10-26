<template>
  <div>
    <Nav />
    <div class="container">
      <div class="content">
        <h3>Nova inscrição</h3>
        <div class="row">
          <div class="col">
            <label for="inputEmail4">Nome</label>
            <input
              type="text"
              class="form-control"
              placeholder="Nome Completo"
              required
              v-model="InscricaoFormulario.nome"
            />
          </div>
          <div class="col">
            <label for="inputEmail4">Telefone</label>
            <input
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
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              required
              v-model="InscricaoFormulario.email"
            />
          </div>
          <div class="col">
            <label for="inputState">Congregação</label>
            <select
              id="inputState"
              class="form-control"
              required
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
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="inputState">Cargo</label>
            <select class="form-control" v-model="InscricaoFormulario.cargo">
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
        <button
          type="button"
          class="btn btn-laranja"
          v-if="isLoading == false"
          @click="SalvarForm()"
        >
          Salvar
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

      <div id="snackbar">{{ Message }}</div>
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
      InscricaoFormulario: {
        nome: "",
        telefone: "",
        email: "",
        congregacao: "",
        cargo: "",
      },
      inscricaoEmBranco: {
        nome: "",
        telefone: "",
        email: "",
        congregacao: "",
        cargo: "",
      },
      Message: "Usuário cadastrado com sucesso!",
      isLoading: false,
    };
  },
  methods: {
    MostraToast() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    SalvarForm() {
      if (
        this.InscricaoFormulario.nome == "" ||
        this.InscricaoFormulario.telefone == "" ||
        this.InscricaoFormulario.email == "" ||
        this.InscricaoFormulario.congregacao == "" ||
        this.InscricaoFormulario.cargo == ""
      ) {
        this.Message = "Dados Inválidos Verifique!";
        this.MostraToast();
      } else {
        this.isLoading = true;
        Inscricao.cadastrar(this.InscricaoFormulario).then(() => {
          this.InscricaoFormulario.nome = "";
          this.InscricaoFormulario.telefone = "";
          this.InscricaoFormulario.email = "";
          this.InscricaoFormulario.congregacao = "";
          this.InscricaoFormulario.cargo = "";
          this.Message = "Usuário cadastrado com sucesso!";
          this.MostraToast();
          this.isLoading = false;
        });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("/login");
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
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>