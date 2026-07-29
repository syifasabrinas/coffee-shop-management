<template>
  <Navbar />

  <div class="container mt-5">

    <h2 class="mb-4">💳 Checkout</h2>

    <div class="card shadow">

      <div class="card-body">

        <form @submit.prevent="checkout">

          <div class="mb-3">
            <label class="form-label">Nama Customer</label>
            <input
              type="text"
              class="form-control"
              v-model="customer.nama"
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Nomor HP</label>
            <input
              type="text"
              class="form-control"
              v-model="customer.hp"
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label">Alamat</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="customer.alamat"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Metode Pembayaran</label>

            <select
              class="form-select"
              v-model="customer.metode"
            >
              <option value="Cash">Cash</option>
              <option value="QRIS">QRIS</option>
              <option value="Transfer Bank">Transfer Bank</option>
            </select>

          </div>

          <h4 class="text-success">

            Total Bayar :

            Rp {{ cartStore.totalPrice.toLocaleString("id-ID") }}

          </h4>

          <button
            class="btn btn-success mt-3"
            type="submit"
          >
            Bayar
          </button>

        </form>

      </div>

    </div>

  </div>

  <Footer />
</template>

<script setup>

import { reactive } from "vue";
import { useRouter } from "vue-router";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const router = useRouter();

const customer = reactive({

  nama:"",
  hp:"",
  alamat:"",
  metode:"Cash"

});

function checkout(){

    alert("Pembayaran berhasil!");

    cartStore.clearCart();

    router.push("/history");

}

</script>