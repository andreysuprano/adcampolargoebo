<template>
  <div class="container">
    <div class="content">
      <h3>Nova inscrição</h3>
      <form>
        <div class="row">
          <div class="col">
            <label for="inputEmail4">Nome</label>
            <input type="text" class="form-control" placeholder="Nome Completo" />
          </div>
          <div class="col">
            <label for="inputEmail4">Telefone</label>
            <input type="text" class="form-control" placeholder="(00)99999-9999" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="col">
            <label for="inputState">Congregação</label>
            <select id="inputState" class="form-control">
              <option selected>Selecione...</option>
              <option>Dona Fina</option>
              <option>Vila Torres</option>
              <option>Santa Angela</option>
              <option>Miqueleto</option>
              <option>Partenope</option>
              <option>Jardim Social</option>
              <option>Sede</option>
            </select>
          </div>
        </div>
        <div class="row">          
          <div class="col">
            <label for="inputState">Cargo</label>
            <select id="inputState" class="form-control">
              <option selected>Selecione...</option>
              <option>Presbítero</option>
              <option>Diácono</option>
              <option>Evangelista</option>
              <option>Membro</option>
              <option>Pastor</option>
              <option>Cooperador</option>
            </select>
          </div>
        </div>
            <button type="button" class="btn btn-laranja">Salvar</button>            
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  margin-top: 50px;
  background-color: rgb(245, 240, 240);
  border-radius: 3px;
  padding: 20px;
}
.btn-laranja{
    background-color: #f8694d;
    color:#fff;
    width: 100%;
    margin-top:20px;
    font-weight: 700;
    height: 60px;
}
.btn-laranja:hover{
    background-color: #f15232;
}
</style>