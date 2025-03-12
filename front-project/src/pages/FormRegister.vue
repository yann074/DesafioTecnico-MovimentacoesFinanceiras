<template>
  <section class="container mt-5">
    <div class="text-center mb-4">
      <h1>Formulário de Cadastro</h1>
    </div>

    <form @submit.prevent="handleSubmit">
  
      <div class="mb-3">
        <label for="valor" class="form-label">Valor:</label>
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="valor"
          name="valor"
          placeholder="Digite o valor"
          v-model="form.value"
        />
      </div>
  
      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição:</label>
        <input
          type="text"
          class="form-control"
          id="description"
          name="description"
          placeholder="Digite a descrição"
          v-model="form.description"
        />
      </div>
  
      <div class="mb-3">
        <label for="tipo" class="form-label">Tipo:</label>
        <select v-model="form.type" class="form-select" name="tipo" required>
          <option value="">Escolha uma Opção</option>
          <option :value="true">Entrada</option>
          <option :value="false">Saída</option>
        </select>
      </div>
  
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria:</label>
        <AllCategory v-model="form.category_id" />
      </div>
  
      <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
    </form>
  </section>
</template>
  
  <script>
import Api from "../service/Api";
import axios from "axios";
import AllCategory from "../components/Layouts/category/AllCategory.vue";


export default {
  components: {
    AllCategory,
  },
  data() {
    return {
      form: {
        value: "",
        description: "",
        type: "",
        category_id: ""
      },
    };
  },
  methods: {

    handleSubmit() {
      Api.post("/transactions", {
        value: this.form.value,
        description: this.form.description,
        type: this.form.type,
        category_id: this.form.category_id,
      })
      .then((response) => {
        console.log("Resposta da API:", response.data);
        alert("cadastrado com sucesso")
        window.location.href = "/dashboard";
  })
  .catch((error) => {
    console.error("Erro:", error.response ? error.response.data : error);
  });
}

}
}

  </script>
  