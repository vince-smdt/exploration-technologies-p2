<template>
  <v-container>
    <v-btn class="mb-3" outlined @click="goBack()"> Retour </v-btn>

    <v-card>
      <v-card-text>
        <p class="d-flex align-center">
          <v-icon class="me-1"> mdi-code-braces-box </v-icon>
          {{ product._id }}
        </p>

        <h1 class="text-center my-5 blue--text text--darken-3">
          {{ product.title }}
        </h1>

        <h3>Catégorie</h3>
        <p>{{ product.category }}</p>

        <h3>Description</h3>
        <p>{{ product.description }}</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between mx-3">
        <v-btn text color="primary" @click="modifyProduct"> Modifier </v-btn>
        <v-btn text color="red" @click="deleteProduct"> Supprimer </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import API from "@/api";
export default {
  name: "ProductView",
  data() {
    return {
      product: {},
    };
  },
  async created() {
    this.product = await API.getProductByID(this.$route.params.id);
  },
  methods: {
    async modifyProduct() {
      const URL = `/modifyProduct/${this.$route.params.id}`;
      window.location = URL;
      window.location.href = URL;
      window.location.assign(URL);
    },
    async deleteProduct() {
      await API.deleteProduct(this.$route.params.id);
      this.goBack();
    },
    goBack() {
      const URL = '/';
      window.location = URL;
      window.location.href = URL;
      window.location.assign(URL);
    },
  },
};
</script>
