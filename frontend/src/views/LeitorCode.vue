<template>
  <div>
    <Nav />
    <div class="camera-box">
      <h5 class="h5">Scanner BarCode</h5>
      <div id="camera"></div>
    </div>
    <div class="box">
      <div class="bloco"></div>
    </div>
  </div>
</template>

<script>
import Quagga from "quagga";
import { mapMutations } from "vuex";
import Nav from "../components/Nav";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      barCode: "",
    };
  },
  methods: {
    incialistner() {
      var value = false;
      console.log("ouvindo");
      Quagga.onDetected((data) => {
        value = data.codeResult.code;
        console.log(value);
        this.alteraBarcode(value);
        this.$router.push("/confirmar-presenca");
      });
    },
    ...mapMutations(["SET_BARCODE"]),
    alteraBarcode(code) {
      this.SET_BARCODE(code);
    },
  },
  mounted() {
    if (localStorage.getItem("auth") != "true") {
      this.$router.push("/login");
    }
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          constraints: {
            width: 414,
            height: 667,
          },
          target: document.querySelector("#camera"), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["code_128_reader"],
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );
    this.incialistner();
  },
};
</script>

<style scoped>
.box {
  width: 380px;
  height: auto;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.bloco {
  margin-top: 80px;
  width: 370px;
  height: 180px;
  border: 8px solid #eb5234;
  border-radius: 10px;
  box-shadow: 4px 100px 400px 200px rgb(26, 27, 27);
}
.h5 {
  color: #eb5234;
  margin-top: -80px;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 999;
}
#btnmodal {
  top: -300%;
  left: 50%;
  position: absolute;
  z-index: 0;
}
</style>