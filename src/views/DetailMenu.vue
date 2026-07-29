<template>
  <Navbar />

  <div class="container mt-5">

    <div class="card shadow">

      <div class="row g-0">

        <div class="col-md-5">

          <img
            :src="menu.image"
            class="img-fluid rounded-start"
            style="height:100%; object-fit:cover;"
          >

        </div>

        <div class="col-md-7">

          <div class="card-body">

            <h2>{{ menu.name }}</h2>

            <h4 class="text-success">
              Rp {{ menu.price.toLocaleString("id-ID") }}
            </h4>

            <p class="mt-3">
              {{ menu.description }}
            </p>

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
import { useRoute, RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const route = useRoute();

const dataMenu = [
  {
    id: 1,
    name: "Cappuccino",
    price: 25000,
    description: "Espresso dengan susu dan foam.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
  },
  {
    id: 2,
    name: "Latte",
    price: 28000,
    description: "Perpaduan espresso dan steamed milk.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
  },
  {
    id: 3,
    name: "Americano",
    price: 22000,
    description: "Espresso dicampur air panas.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500",
  },
];

const menu = dataMenu.find(
  (item) => item.id == route.params.id
);

function addToCart(item) {
  cartStore.addToCart(item);
  alert(item.name + " berhasil ditambahkan ke keranjang.");
}
</script>