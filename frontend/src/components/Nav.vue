<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img class="logo" src="../assets/logo-horizontal.png" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              <i class="fas fa-chart-line"></i>Dashboard</a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-user-plus"></i>
              Cadastro</a>
            <a class="nav-item nav-link" href="#">
              <i class="fas fa-file-invoice"></i>Relatórios</a>
            <a class="nav-item nav-link " href="#">
              <i class="fas fa-check-square"></i>Presença</a>
          </div>
        </div>
        <a class="usuario my-2 my-sm-0">Andrey</a>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fas fa-sign-out-alt"></i>Sair</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.usuario{
  font-weight: 600;
  margin-right: 15px;
}
i{
  margin-right: 8px;
}
</style>