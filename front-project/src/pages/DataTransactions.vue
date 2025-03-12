<script setup>
  import Api from "../service/Api";
  import { ref, onMounted } from "vue";
import { format } from 'date-fns'
import NewCategory from "../components/Layouts/category/NewCategory.vue";
import DeleteCategory from "../components/Layouts/category/DeleteCategory.vue";

const transactions = ref([]);

const fetchData = async () => {
  try {
    const response = await Api.get("/transactions"); 
    console.log(response.data.data); 
    transactions.value = response.data.data.map(transaction => {
      return {
        ...transaction,
        created_at: format(new Date(transaction.created_at), "hh:mm - dd/MM/yyyy ")
      }
    }); 
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

const deleteData = async (id) => {
  try {
    const response = await Api.delete(`/transactions/${id}`);
    console.log(response.data);
    transactions.value = transactions.value.filter(transaction => transaction.id !== id);
  } catch (error) {
    console.error("Erro ao deletar os dados:", error);
  }
};

onMounted(fetchData)
</script>

<template>
    <div id="app" class="container mt-5">
      <h1 class="mb-4">Lista de Itens</h1>
  
      <!-- Tabela de itens com Bootstrap -->
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Data de Criação</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Categoria</th>
              
              
            </tr>
        </thead>
        <tbody>
            
            <tr  v-for="(transaction, index) in transactions" :key="index">
                <td>{{ transaction.created_at  }}</td>
                <td>{{ transaction.type === 1 ? "Entrada" : "Saída" }}</td>
                <td>{{ transaction.value }}</td>
                <td>{{ transaction.description }}</td>
                <td>{{ transaction.category }}</td>
                <td>
                  <button @click="deleteData(transaction.id)" class="btn btn-danger">
                    <i class="fas fa-trash"></i> Deletar
                  </button>
                  <router-link :to="`/edit/${transaction.id}`" class="btn btn-danger ms-4">
                    <i class="fas fa-paint-brush"></i> Editar
                  </router-link>
                </td>
                  
                </tr>
                
              </tbody>
            </table>
            <h3>Adicionar  Categoria</h3>
            <NewCategory />
            <h3>Categorias Disponíveis</h3>
            <DeleteCategory />
    </div>
  </template>

