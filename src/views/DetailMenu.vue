<template>
  <Navbar />

  <div class="container mt-5">

    <div class="row">

      <div class="col-md-6">

        <img
          :src="menu.image"
          class="img-fluid rounded shadow"
          alt="Coffee"
        >

      </div>

      <div class="col-md-6">

        <h2>{{ menu.name }}</h2>

        <h4 class="text-success mb-3">
          Rp {{ menu.price }}
        </h4>

        <p>
          {{ menu.description }}
        </p>

        <button
          class="btn btn-warning"
          @click="addToCart"
        >
          Add To Cart
        </button>

        <RouterLink
          to="/menu"
          class="btn btn-secondary ms-2"
        >
          Kembali
        </RouterLink>

      </div>

    </div>

  </div>

  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";

const menu = {
  id: 1,
  name: "Cappuccino",
  price: 25000,
  description:
    "Cappuccino adalah minuman kopi espresso yang dipadukan dengan steamed milk dan milk foam sehingga menghasilkan rasa yang lembut dan creamy.",
  image:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
};

function addToCart() {
  alert(menu.name + " berhasil ditambahkan ke cart");
}
</script>