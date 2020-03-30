<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
        {{ appName }}
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <locale-dropdown />
        </ul>

        <ul class="navbar-nav ml-auto">
          
          <li v-if="user" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark"
               href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            >
              <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
              {{ user.name }}
            </a>
            <div class="dropdown-menu">
              <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                <fa icon="cog" fixed-width />
                {{ $t('settings') }}
              </router-link>

              <div class="dropdown-divider" />
              <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                <fa icon="sign-out-alt" fixed-width />
                {{ $t('logout') }}
              </a>
            </div>
          </li>
          
          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                {{ $t('login') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                {{ $t('register') }}
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav> -->
  <v-app-bar
      fixed
      color="white"
      light
      flat
    >

      <v-toolbar-title>{{ appName }}</v-toolbar-title>

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
