<script setup>

import Api from "../../../service/Api";
import { ref, onMounted } from "vue";
import { format } from 'date-fns'

const category = ref([]);

const fetchData = async () => {
  try {
    const response = await Api.get("/category");
    console.log(response.data.data);
    category.value = response.data.data || [];
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};
const deleteCategory = async (id) => {
  if (confirm("Tem certeza que deseja excluir esta categoria?")) {
    try {
      await Api.delete(`/category/${id}`);
      category.value = category.value.filter(cat => cat.id !== id); // Remove da lista
      alert("Categoria excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
    }
  }
};

onMounted(fetchData)
</script>

<template>
    <ul class="list-group mt-3">
      <li v-for="(cat, index) in category" :key="index" class="list-group-item d-flex justify-content-between">
            {{ cat.name }}
        <button @click="deleteCategory(cat.id)" class="btn btn-danger btn-sm">Excluir</button>
      </li>
    </ul>
</template>