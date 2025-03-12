<template>
  <select v-model="selectedCategory" @change="updateCategory" class="form-select">
    <option value="">Escolha uma categoria</option>
    <option v-for="(category, index) in categories" :key="index" :value="category.id">
      {{ category.name }}
    </option>
  </select>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Api from "../../../service/Api";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

// Estado
const categories = ref([]);
const selectedCategory = ref(props.modelValue); 

const updateCategory = () => {
  emit("update:modelValue", selectedCategory.value);
};

watch(() => props.modelValue, (newValue) => {
  selectedCategory.value = newValue;
});

const fetchData = async () => {
  try {
    const response = await Api.get("/category");
    categories.value = response.data.data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

onMounted(fetchData);
</script>
