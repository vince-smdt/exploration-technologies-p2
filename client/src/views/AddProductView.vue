<template>
  <v-container>
    <v-btn class="mb-3" outlined @click="$router.go(-1)"> Retour </v-btn>

    <v-card>
      <v-card-text>
        <h1 class="text-center my-5 blue--text text--darken-3">
          Ajouter un produit
        </h1>

        <v-text-field label="Titre" v-model="product.title" />

        <v-text-field label="Catégorie" v-model="product.category" />

        <v-text-field label="Description" v-model="product.description" />
      </v-card-text>

      <v-card-actions>
        <v-btn text color="success" @click="addProduct"> Ajouter </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import API from "@/api";
export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        title: "",
        category: "",
        description: "",
      },
    };
  },
  methods: {
    async addProduct() {
      await API.addProduct(this.product);
      const URL = "/";
      window.location = URL;
      window.location.href = URL;
      window.location.assign(URL);
    },
  },
};
</script>
