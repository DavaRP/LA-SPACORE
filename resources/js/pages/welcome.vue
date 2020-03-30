<template>
  <div>
    <div class="top-right links">
      <template v-if="authenticated">
        <router-link :to="{ name: 'home' }">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
          <v-btn text :to="{name : 'login'}">
            {{ $t('login') }}
          </v-btn>
          <v-btn text :to="{name : 'register'}">
            {{ $t('register') }}
          </v-btn>
      </template>
    </div><v-sheet min-height="80vh">
    <div class="text-center">
      <v-row justify="center">
        <v-col class="text-center">
          <v-img class="mx-auto" src="https://cdn.iconscout.com/icon/free/png-512/laravel-226015.png" width="200" ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="display-3 mb-4">
            {{ title }}
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" lg="6" sm="11">
            <v-chip v-for="(item , index) in features" :key="index" class="orange lighten-3 mx-1" dark>{{item}}</v-chip>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <p class="text-muted">Thanks To : <br><a class=" text-decoration-none orange--text" href="https://github.com/cretueusebiu/laravel-vue-spa">github.com/cretueusebiu/laravel-vue-spa</a></p>
          
          <p class="text-muted">Follow me on : </p>
          <div class="mt-n3">
            <v-btn fab icon >
              <a href="https://www.facebook.com/dava.rizqipradipta" class="grey--text" target="_blank">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
            </v-btn>
            <v-btn fab icon>
              <a href="https://github.com/davaRizqi/" class="grey--text" target="_blank">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </v-btn>
            <v-btn fab icon>
              <a href="https://twitter.com/Dava_rizqi" class="grey--text" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
            </v-btn>
            <v-btn fab icon>
              <a href="https://www.instagram.com/davarp_/" class="grey--text" target="_blank">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>
