<template>
    <v-navigation-drawer
      style="margin-top: 70px;"
      fixed
      permanent
      left
      clipped
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://zukan.pokemon.co.jp/zukan-api/up/images/index/be7758f49ac31c3d4a55c11dad3811ec.png">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Kantoku</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
      </template>

      <v-divider></v-divider>

      <!-- <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return {
        drawer: null,
        // supports:[
        //   'Consulting and suppourt',
        //   'Discord community',
        //   'Report a bug',
        //   'Github issue board',
        //   'Stack overview'
        // ]
    }
  }
}
</script>