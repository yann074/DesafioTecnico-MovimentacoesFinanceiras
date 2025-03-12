<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          placeholder="Digite o nome"
          v-model="name"
        />
      </div>
  
      <button type="submit" class="btn btn-primary w-70">Salvar</button>
    </form>
  </template>
  
  <script>
  import Api from "../../../service/Api";
  import { ref } from "vue";
  
  export default {
    setup() {
      const name = ref(""); 
  
      const handleSubmit = async () => {
        try {
          const response = await Api.post("/category", { name: name.value });
  
          console.log(response.data);
          window.alert("Categoria adicionada com sucesso");
          window.location.reload();
          name.value = ""; 
        } catch (error) {
          console.error("Erro ao adicionar categoria:", error.response?.data || error.message);
        }
      };
  
      return { name, handleSubmit };
    },
  };
  </script>
  