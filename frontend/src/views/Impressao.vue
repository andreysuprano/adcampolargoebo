<template>
  <div>
    <div>
      <tablerelatorio
        v-for="congregacao of Congregacoes"
        :key="congregacao.index"
        :congregacao="congregacao.nome"
      />
    </div>
  </div>
</template>

<script>
import tablerelatorio from "../components/TableRelatorio";
export default {
  components: {
    tablerelatorio,
  },
  data() {
    return {
      Congregacoes: [
        { nome: "Sede            " },
        { nome: "Dona Fina       " },
        { nome: "Vila Torres     " },
        { nome: "Santa Angela    " },
        { nome: "Miqueleto       " },
        { nome: "Partênope       " },
        { nome: "Jardim Social   " },
        { nome: "Jardim Nely     " },
        { nome: "Jardim Itaboa   " },
        { nome: "Jardim Guarani  " },
        { nome: "Jardim Itaqui   " },
        { nome: "Jardim Rondinha " },
        { nome: "Taquara         " },
        { nome: "Águas Claras    " },
        { nome: "Bateias         " },
        { nome: "Esmeralda       " },
        { nome: "Taquarinha      " },
        { nome: "Acácias         " },
        { nome: "Meliane         " },
        { nome: "Gorski          " },
        { nome: "Albina Girgolete" },
        { nome: "Novo Horizonte  " },
        { nome: "Lajeado         " },
        { nome: "Botiatuva       " },
        { nome: "Sete Salto      " },
        { nome: "Rivabem         " },
        { nome: "Santa Cruz      " },
        { nome: "Itambezinho     " },
        { nome: "Vila Glória     " },
        { nome: "Carmela         " },
        { nome: "São Pedro       " },
        { nome: "Tres Rios       " },
        { nome: "São Caetano     " },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>