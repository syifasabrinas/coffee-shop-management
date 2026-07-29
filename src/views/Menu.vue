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
              Rp {{ item.price.toLocaleString('id-ID') }}
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
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { RouterLink } from "vue-router";

import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const menu = [
  {
    id: 1,
    name: "Cappuccino",
    price: 25000,
    description: "Espresso dengan susu dan foam.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  },
  {
    id: 2,
    name: "Latte",
    price: 28000,
    description: "Perpaduan espresso dan steamed milk.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
  },
  {
    id: 3,
    name: "Americano",
    price: 22000,
    description: "Espresso dicampur air panas.",
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  },
];

function addToCart(item) {
  cartStore.addToCart(item);
  alert(item.name + " berhasil ditambahkan ke keranjang.");
}
</script>