<template>
  <v-app-bar
      fixed
      color="white"
      light
      flat
    >

      <v-toolbar-title style="cursor : pointer" >
        <router-link class="text-decoration-none" v-if="user" :to="'/'"><span class="font-weight-bold orange--text">{{ appName }}</span></router-link>
        <router-link class="text-decoration-none" v-else :to="'/home'"><span class="font-weight-bold orange--text">{{ appName }}</span></router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!user">
        <v-btn text active-class="white" exact-active-class="orange  white--text" light class="transparent mr-3" :to="{ name: 'login' }" >
          <span class="mr-3">{{ $t('login') }}</span>
          <i class="fas fa-user"></i>
        </v-btn>

        <v-btn text active-class="white" exact-active-class="orange  white--text" light class="transparent" :to="{ name: 'register' }">
          <span class="mr-3">{{ $t('register') }}</span>
          <i class="fas fa-key"></i>
        </v-btn>
      </div>
      <div v-else>
        <v-menu
            bottom
            left
            light
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                color="yellow"
                v-on="on"
              >
                <v-avatar>
                  <v-img :src="user.photo_url"></v-img>
                </v-avatar>
              </v-btn>
            </template>

            <v-list>
              <v-list-item :to="{ name: 'settings.profile' }" >
                <v-list-item-title><span class="mr-2">Profile</span></v-list-item-title>
              </v-list-item>
              <v-list-item @click="logout">
                <v-list-item-title><span class="mr-2">Logout</span></v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>
      </div>

      <locale-dropdown />
    </v-app-bar>
</template>

<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    logout () {
      Swal.fire({
        title: 'Logout',
        text : 'Anda akan keluar',
        icon: 'information',
        showCancelButton: true
      }).then(res => {
        if(res.value){
          // Log out the user.
          this.$store.dispatch('auth/logout')

          // Redirect to login.
          this.$router.push({ name: 'login' })
        }
      })
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
