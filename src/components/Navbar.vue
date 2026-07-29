<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold" to="/">
        ☕ Coffee Shop
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              Dashboard
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/menu">
              Menu
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart">
              Cart
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/history">
              History
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/admin">
              Admin
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">
              Login
            </RouterLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>