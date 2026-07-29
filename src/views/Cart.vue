<template>
  <Navbar />

  <div class="container mt-5">

    <h2 class="mb-4">🛒 Keranjang Belanja</h2>

    <div v-if="cartStore.cart.length == 0" class="alert alert-warning">
      Keranjang masih kosong.
    </div>

    <table
      v-else
      class="table table-bordered table-hover"
    >

      <thead class="table-dark">

        <tr>
          <th>No</th>
          <th>Menu</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(item,index) in cartStore.cart"
          :key="index"
        >

          <td>{{ index+1 }}</td>

          <td>{{ item.name }}</td>

          <td>
            Rp {{ item.price.toLocaleString("id-ID") }}
          </td>

          <td>

            <button
              class="btn btn-danger btn-sm"
              @click="hapus(index)"
            >
              Hapus
            </button>

          </td>

        </tr>

      </tbody>

    </table>

    <div
      v-if="cartStore.cart.length"
      class="text-end mt-3"
    >

      <h4>

        Total :

        <span class="text-success">

          Rp {{ cartStore.totalPrice.toLocaleString("id-ID") }}

        </span>

      </h4>

      <RouterLink
        to="/checkout"
        class="btn btn-success mt-2"
      >

        Checkout

      </RouterLink>

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

function hapus(index){

    cartStore.removeFromCart(index);

}

</script>