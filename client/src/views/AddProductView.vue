<template>
  <v-container>
    <v-btn class="mb-3" outlined @click="goBack()"> Retour </v-btn>

    <v-card>
      <v-card-text>
        <h1 class="text-center my-5 blue--text text--darken-3">
          {{ title }}
        </h1>

        <v-text-field label="Titre" v-model="product.title" />

        <v-text-field label="Catégorie" v-model="product.category" />

        <v-text-field label="Description" v-model="product.description" />
      </v-card-text>

      <v-card-actions>
        <v-btn text color="success" @click="addProduct" v-if="method === 'ADD'">
          Ajouter
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="updateProduct"
          v-if="method === 'MODIFY'"
        >
          Modifier
        </v-btn>
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
      product: {},
      method: "",
      title: "",
    };
  },
  async created() {
    const id = this.$route.params.id;
    if (id) {
      this.product = await API.getProductByID(id);
      this.method = "MODIFY";
      this.title = "Modifier un produit"
    } else {
      this.method = "ADD";
      this.title = "Ajouter un produit"
    }
  },
  methods: {
    async addProduct() {
      await API.addProduct(this.product);
      this.goBack();
    },
    async updateProduct() {
      await API.updateProduct(this.$route.params.id, this.product);
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
