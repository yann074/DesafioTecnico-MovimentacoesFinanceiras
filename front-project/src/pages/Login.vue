<template>
    <section class="login">
      <div class="container mt-5">
        <div class="text-center mb-4">
          <h1>Faça seu Login</h1>
        </div>
  
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Digite seu email"
              v-model="form.email"
            />
          </div>
  
          <div class="mb-3">
            <label for="password" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              v-model="form.password"
            />
          </div>
  
          <button type="submit" class="btn btn-primary w-100">Fazer Login</button>
        </form>
  

      </div>
    </section>
  </template>
  
  <script>
import Api from "../service/Api";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
methods: {
    async handleSubmit() {
      try {
        const response = await Api.post("/login", {
          email: this.form.email,
          password: this.form.password,
        });
        
        console.log(response.data);
        localStorage.setItem("token", response.data.data.token);
        window.alert("Usuário logado com sucesso")
        this.$router.push("/dashboard"); 
        
      } catch (error) {
        console.error("Erro de login:", error.response?.data || error.message);
      }
    },
  },


};
</script>
