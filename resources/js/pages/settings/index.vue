<template>
  <v-row>
    <v-col cols="12" lg="3" sm="12">
        <v-list>
          <v-list-item-group v-model="menu">
            <v-list-item
              v-for="(item, i) in tabs"
              :key="i"
              active-class="white--text orange darken-4 "
              class="text-decoration-none"
              :to="{name : item.route}"
            >
              <v-list-item-icon>
                <i :class="'fas fa-' + item.icon"></i>

              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </v-col>
    <v-col cols="12" lg="9" sm="12">
      <v-container>
        <vue-page-transition  name="flip-y">
          <router-view />
        </vue-page-transition >
      </v-container>
    </v-col> 
    
  </v-row>

</template>

<script>
export default {
  middleware: 'auth',
  data ()  {
    return {
      menu : 0
    }
  },
  computed: {
    tabs () {
      return [
        {
          icon: 'user',
          name: this.$t('profile'),
          route: 'settings.profile'
        },
        {
          icon: 'lock',
          name: this.$t('password'),
          route: 'settings.password'
        }
      ]
    }
  }
}
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
