<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="10"
      class="elevation-1"
      @click:row="productClicked"
    />
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
    }
  },
};
</script>
