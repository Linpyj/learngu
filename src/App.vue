<template>
  <v-app>
    <Header />
    <Sidebar />
    <v-main
      style="margin-top: 20px;"
    >
      <v-row>
        <v-col cols="3">
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col 
              cols="6"
              v-for="i in 5"
              :key="i"
            >
            <Card />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

export default {
  name: 'App',

  components: {
    Header,
    Sidebar,
    Card
  },

  data: () => ({
    //
  }),
};
</script>
