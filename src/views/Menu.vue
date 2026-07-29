<template>
  <Navbar />

  <div class="container mt-5">
    <h2 class="text-center mb-4">☕ Coffee Menu</h2>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="item in menu"
        :key="item.id"
      >
        <div class="card shadow h-100">
          <img
            :src="item.image"
            class="card-img-top"
            style="height:250px; object-fit:cover;"
          />

          <div class="card-body d-flex flex-column">
            <h4>{{ item.name }}</h4>

            <p class="text-muted">
              {{ item.description }}
            </p>

            <h5 class="text-success mb-3">
              Rp {{ Number(item.price).toLocaleString("id-ID") }}
            </h5>

            <div class="mt-auto">
              <RouterLink
                :to="'/detail-menu/' + item.id"
                class="btn btn-primary me-2"
              >
                Detail
              </RouterLink>

              <button
                class="btn btn-warning"
                @click="addToCart(item)"
              >
                Add To Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import api from "../services/api";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const menu = ref([]);

const getMenu = async () => {
  try {
    const response = await api.get("/menu");
    menu.value = response.data;
  } catch (error) {
    console.error(error);
    alert("Gagal mengambil data menu.");
  }
};

function addToCart(item) {
  cartStore.addToCart(item);
  alert(item.name + " berhasil ditambahkan ke keranjang.");
}

onMounted(() => {
  getMenu();
});
</script>