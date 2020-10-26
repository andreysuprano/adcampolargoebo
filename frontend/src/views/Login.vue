<template>
  <div>
    <div class="container-fluid">
      <div class="box">
        <img src="../assets/logo-horizontal.png" style="width: 100%" />
        <h4 class="title">EBO2020</h4>
        <div>
          <div class="form-group">
            <input
              type="login"
              name="login"
              class="form-control"
              placeholder="Usuário"
              v-model="username"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="senha"
              class="form-control"
              placeholder="Senha"
              v-model="senha"
              required
            />
          </div>
          <div>
            <button class="btn-login efeito" @click="Logar()">Login</button>
          </div>
        </div>
      </div>
    </div>
        <div id="snackbar">{{ Message }}</div>

  </div>
</template>

<script>
import auth from "../services/auth";
export default {
  data() {
    return {
      username: "",
      senha: "",
      Message: "",
    };
  },
  methods: {
    Logar() {
      if (this.username != "" && this.senha != "") {
        const authPayload = {
          username: this.username,
          senha: this.senha,
        };
        auth.authUser(authPayload).then((response) => {
          if (response.data.auth) {
            localStorage.setItem("auth", true);
            localStorage.setItem("usuario", response.data.user);
            localStorage.setItem("usuario_id", response.data.user_id);
            this.$router.push('/relatorios');
          } else {
            this.Message = "Usuário ou senha incorretos";
            this.MostraToast();
          }
        }).catch(()=>{
            this.Message = "Usuário ou senha incorretos";
            this.MostraToast();
        });
      }else{
          this.Message = "Usuário ou senha vazios";
          this.MostraToast();
      }
    },
    MostraToast() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
  },
};
</script>

<style  scoped>
.box {
  width: 350px;
  height: auto;
  background: white;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
}

.btn-login {
  background-color: #f8694d;
  color: white;
  width: 100%;
  height: 60px;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 2%;
  padding-bottom: 2%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  cursor: pointer;
}

.title {
  margin-top: 25px;
  color: #707070;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
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