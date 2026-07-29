<template>
  <Navbar />

  <div class="container mt-5" style="max-width: 450px;">
    <div class="card shadow">
      <div class="card-body">

        <h2 class="text-center mb-4">Login</h2>

        <form @submit.prevent="login">

          <div class="mb-3">
            <label class="form-label">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="username"
              placeholder="Masukkan username"
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="password"
              placeholder="Masukkan password"
            />
          </div>

          <button class="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { useUserStore } from "../stores/user";

const router = useRouter();
const userStore = useUserStore();

const username = ref("");
const password = ref("");

function login() {

  if (username.value === "admin" && password.value === "12345") {

    userStore.login({
      username: username.value
    });

    alert("Login berhasil!");

    router.push("/");

  } else {

    alert("Username atau Password salah!");

  }

}
</script>