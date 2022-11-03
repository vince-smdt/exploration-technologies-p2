<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-spacer />
      <v-toolbar-title class="d-flex justify-center">Démonstration avec Heroku</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      //
    }),
  }
</script>