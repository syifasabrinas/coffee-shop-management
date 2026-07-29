<template>
  <Navbar />

  <div class="container mt-5">

    <h2>Riwayat Transaksi</h2>

    <div class="alert alert-info mt-4">

      <h5>Belum ada data transaksi.</h5>

      <p>
        Nanti pada tahap berikutnya data transaksi bisa disimpan menggunakan API atau database.
      </p>

    </div>

  </div>

  <Footer />
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>