<template>
  <v-container>
    <h1 class="text-center my-5 blue--text text--darken-3">
      Liste des produits
    </h1>
      
    <v-data-table
      id="product-list"
      :headers="headers"
      :items="products"
      :items-per-page="10"
      class="elevation-1"
      @click:row="productClicked"
    />
    <v-btn class="mt-3" color="primary" @click="addProduct">
      Ajouter un produit
    </v-btn>
  </v-container>
</template>

<script>
import API from "@/api";
export default {
  name: "MyHome",
  data() {
    return {
      headers: [
        { text: "Titre", value: "title" },
        { text: "Catégorie", value: "category" },
        { text: "Description", value: "description" },
      ],
      products: [],
    };
  },
  async created() {
    this.products = await API.getAllProduct();
  },
  methods: {
    productClicked(item) {
      const URL = `/product/${item._id}`;
      window.location = URL;
      window.location.href = URL;
      window.location.assign(URL);
    },
    addProduct() {
      const URL = "/addProduct";
      window.location = URL;
      window.location.href = URL;
      window.location.assign(URL);
    },
  },
};
</script>
