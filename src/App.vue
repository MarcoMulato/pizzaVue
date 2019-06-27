<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>UP</span>
        <span class="font-weight-light">IZZA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Ingresar</span>
      </v-btn>
    </v-toolbar>

    <v-content style="padding: 40px 0px 0px">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Order from './views/Order';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Order,
  },
};
</script>
