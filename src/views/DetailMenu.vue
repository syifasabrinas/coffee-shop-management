<template>
  <Navbar />

  <div class="container mt-5">
    <div class="card shadow p-3">
      <div class="row">

        <!-- Gambar -->
        <div class="col-md-5">
          <img
            :src="menu.image"
            class="img-fluid rounded"
            style="height:450px; width:100%; object-fit:cover;"
          />
        </div>

        <!-- Detail -->
        <div class="col-md-7">

          <h2 class="fw-bold">{{ menu.name }}</h2>

          <h4 class="text-success mb-3">
            Rp {{ Number(menu.price || 0).toLocaleString("id-ID") }}
          </h4>

          <p class="text-muted">
            {{ menu.description }}
          </p>

          <hr>

          <h5>☕ Taste</h5>
          <p>{{ menu.taste }}</p>

          <h5>🥛 Ingredients</h5>
          <p>{{ menu.ingredients }}</p>

          <h5>📏 Size</h5>
          <p>{{ menu.size }}</p>

          <h5>🔥 Calories</h5>
          <p>{{ menu.calories }}</p>

          <h5>🍰 Perfect Pairing</h5>
          <p>{{ menu.pairing }}</p>

          <div class="mt-4">

            <button
              class="btn btn-warning me-2"
              @click="addToCart(menu)"
            >
              Add To Cart
            </button>

            <RouterLink
              to="/menu"
              class="btn btn-secondary"
            >
              Kembali
            </RouterLink>

          </div>

        </div>

      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { useCartStore } from "../stores/cart";
import api from "../../services/api";

const route = useRoute();
const cartStore = useCartStore();

const menu = ref({});

async function getDetailMenu() {
  try {
    const response = await api.get("/menu/" + route.params.id);
    menu.value = response.data;
  } catch (error) {
    console.log(error);
    alert("Data menu tidak ditemukan!");
  }
}

function addToCart(item) {
  cartStore.addToCart(item);
  alert(item.name + " berhasil ditambahkan ke keranjang.");
}

onMounted(() => {
  getDetailMenu();
});
</script>

<style scoped>
.card {
  border: none;
  border-radius: 15px;
}

h2 {
  color: #6f4e37;
}

h5 {
  color: #8b4513;
  margin-top: 15px;
}

p {
  text-align: justify;
}
</style>