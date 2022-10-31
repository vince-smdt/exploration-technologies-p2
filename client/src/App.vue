<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Démonstration avec Heroku</v-toolbar-title>
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