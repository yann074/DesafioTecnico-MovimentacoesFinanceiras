<script>
import { RouterLink } from 'vue-router';
import logo from '../../assets/logo.png';
import ButtonLogout from './ButtonLogout.vue';


export default {
  components: {
    ButtonLogout
  },
  data() {
    return {
      imagem: logo,
    };
  }
};
</script>

<template>
          <header class="bg-dark py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Logo -->
      <a href="#" class="text-white text-decoration-none">
        <router-link :to="`/dashboard`" >
                <img :src="imagem" alt="" class="img-fluid" style="width: 15%;">
          </router-link>
      </a>
      
      <!-- Navegação -->
      <nav>
        <ul class="nav">
          <li class="nav-item ms-4">
            <router-link :to="`/dashboard`" class="btn btn-primary">
                <i class="bi bi-plus"></i> Home
              </router-link>
          </li>
          <li class="nav-item ms-4">
            <router-link :to="`/register`" class="btn btn-primary">
                <i class="bi bi-plus"></i> Adicionar Transação
              </router-link>
          </li>
          <li>
            <ButtonLogout class="ms-3" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>