<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main
      style="margin-top: 20px;margin-left: 300px;
    width: calc(80% - 300px);"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
  },
}
</script>
