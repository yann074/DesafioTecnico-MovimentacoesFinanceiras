<script setup>
import { useAuth } from "../../store/auth.tsx";
const auth = useAuth();  

const logout = () => {
  window.location.reload();
  auth.logout();
};
</script>

<template>
  <button class="btn btn-danger" @click="logout">
    <i class="fas fa-sign-out-alt"></i> Sair
  </button>
</template>
