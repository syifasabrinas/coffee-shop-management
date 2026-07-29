<template>
  <Navbar />

  <div class="container mt-5">

    <h2 class="mb-4 text-center">
      Admin Menu Coffee Shop
    </h2>

    <div class="card mb-4 shadow">

      <div class="card-body">

        <h4>{{ editMode ? "Edit Menu" : "Tambah Menu" }}</h4>

        <form @submit.prevent="saveMenu">

          <div class="mb-3">
            <label>Nama Menu</label>
            <input
              v-model="form.name"
              class="form-control"
              required
            >
          </div>

          <div class="mb-3">
            <label>Harga</label>
            <input
              type="number"
              v-model="form.price"
              class="form-control"
              required
            >
          </div>

          <div class="mb-3">
            <label>Deskripsi</label>
            <textarea
              v-model="form.description"
              class="form-control"
              required
            ></textarea>
          </div>

          <div class="mb-3">
            <label>URL Gambar</label>
            <input
              v-model="form.image"
              class="form-control"
              required
            >
          </div>

          <button
            class="btn btn-success me-2"
          >
            {{ editMode ? "Update" : "Tambah" }}
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            @click="resetForm"
          >
            Reset
          </button>

        </form>

      </div>

    </div>

    <table class="table table-bordered table-hover">

      <thead class="table-dark">

        <tr>

          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Aksi</th>

        </tr>

      </thead>

      <tbody>

        <tr
          v-for="(item,index) in menu"
          :key="item.id"
        >

          <td>{{ index+1 }}</td>

          <td>{{ item.name }}</td>

          <td>Rp {{ Number(item.price).toLocaleString("id-ID") }}</td>

          <td>

            <button
              class="btn btn-warning btn-sm me-2"
              @click="editMenu(item)"
            >
              Edit
            </button>

            <button
              class="btn btn-danger btn-sm"
              @click="deleteMenu(item.id)"
            >
              Hapus
            </button>

          </td>

        </tr>

      </tbody>

    </table>

  </div>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import api from "../../services/api";

const menu = ref([]);

const editMode = ref(false);

const editId = ref(null);

const form = ref({
  name: "",
  price: "",
  description: "",
  image: "",
});

async function getMenu() {
  const response = await api.get("/menu");
  menu.value = response.data;
}

async function saveMenu() {

  if (editMode.value) {

    await api.put("/menu/" + editId.value, form.value);

    alert("Menu berhasil diupdate");

  } else {

    await api.post("/menu", form.value);

    alert("Menu berhasil ditambahkan");

  }

  resetForm();

  getMenu();

}

function editMenu(item){

  editMode.value = true;

  editId.value = item.id;

  form.value = { ...item };

}

async function deleteMenu(id){

  if(confirm("Yakin ingin menghapus menu?")){

    await api.delete("/menu/" + id);

    alert("Menu berhasil dihapus");

    getMenu();

  }

}

function resetForm(){

  editMode.value = false;

  editId.value = null;

  form.value = {

    name:"",
    price:"",
    description:"",
    image:""

  };

}

onMounted(()=>{

  getMenu();

});
</script>