<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="400">
        <v-img
          height="150px"
          src="https://lh5.googleusercontent.com/proxy/RIT-oWGGWlNEA94oeQpeVmuFB0vfvFVVHRMfoSk-itGk1Q5Udd4FNi1jOJAleBLH9-uvy8elKBATH6MI8P7Q6ppbPweFfMgo-CyzvqNQpF-NI9l0EEGSCC1h=s0-d"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-spacer></v-spacer>
            <v-btn
              icon
            >
              <v-icon>mdi-bookmark-outline</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="mt-3">
            <v-avatar size="56">
              <img
                alt="user"
                :src="item.img"
              >
            </v-avatar>
            <p class="ml-3">
              {{ item.name }}
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold">
            {{ item.prof }}
            <router-link to="/hey">Hey</router-link>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="blue"
            text
          >
            <v-icon
              color="blue"
            >
              mdi-message-text
            </v-icon>
            授業を依頼
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  props: ['item'],
  // mounted: () => ({
  //   console.log(item);
  // })
  mounted() {
    console.log('hi')
  }
};
</script>
