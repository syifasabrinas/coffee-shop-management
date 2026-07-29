<template>

    <Navbar />

    <div class="container mt-5">

        <div class="p-5 mb-4 bg-dark rounded-4 text-white">

            <h1 class="display-4 fw-bold">

                ☕ Coffee Shop

            </h1>

            <p class="lead">

                Good Coffee, Good Mood ☕
            Let's brew something amazing today!

            </p>

            <RouterLink
                to="/menu"
                class="btn btn-warning btn-lg">

                Order Now

            </RouterLink>

        </div>

        <div class="row">

            <div class="col-md-4">

                <div class="card shadow">

                    <div class="card-body">

                        <h3>☕ Premium Coffee</h3>

                        <p>

                            Fresh coffee with high quality beans.

                        </p>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card shadow">

                    <div class="card-body">

                        <h3>🍰 Dessert</h3>

                        <p>

                            Sweet dessert for your coffee.

                        </p>

                    </div>

                </div>

            </div>

            <div class="col-md-4">

                <div class="card shadow">

                    <div class="card-body">

                        <h3>🚚 Fast Delivery</h3>

                        <p>

                            Fast delivery with best service.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <Footer />

</template>

<script setup>

import Navbar from "../components/Navbar.vue"

import Footer from "../components/Footer.vue"

import { RouterLink } from "vue-router"

</script>