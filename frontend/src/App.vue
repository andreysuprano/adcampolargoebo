<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
data() {
  return {
    
  }
},
  mounted () {
    if(localStorage.getItem('auth') == 'true'){
      this.$router.push('/relatorios');
    }else{
      this.$router.push('/login');
    }
  },
}
</script>
<style>
body{
  background: #eb5234;
}

</style>
