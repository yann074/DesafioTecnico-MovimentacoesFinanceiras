<template>
  <section class="container mt-5">
    <div class="text-center mb-4">
      <h1>Formulário de Edição</h1>
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
        <select v-model="form.type" class="form-select" name="type" required>
          <option value="">Escolha uma Opção</option>
          <option :value="true">Entrada</option>
          <option :value="false">Saída</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria:</label>
        <AllCategory v-model="form.category_id" />
      </div>

      <button type="submit" class="btn btn-primary w-100">Atualizar</button>
    </form>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router"; 
import Api from "../service/Api";
import AllCategory from "../components/Layouts/category/AllCategory.vue";

export default {
  components: {
    AllCategory,
  },
  setup() {
    const route = useRoute(); 
    const router = useRouter(); 
    const form = ref({
      value: "",
      description: "",
      type: "",
      category_id: "",
    });

    const fetchData = async () => {
      try {
        const response = await Api.get(`/transactions/${route.params.id}`);
        form.value = response.data.data;
        window.location("/dashboard");
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    const handleSubmit = async () => {
      try {
        await Api.put(`/transactions/${route.params.id}`, form.value);
        alert("Transação atualizada com sucesso!");
        router.push("/dashboard"); 
      } catch (error) {
        console.error("Erro ao atualizar:", error.response ? error.response.data : error);
      }
    };

    onMounted(fetchData);

    return { form, handleSubmit };
  },
};
</script>
