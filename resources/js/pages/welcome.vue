<template>
  <div class="mt-12 mb-12">
    <div class="top-right links">
      <template v-if="authenticated">
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
      </template>
      <template v-else>
          <v-btn text :to="{name : 'login'}">
            {{ $t('login') }}
          </v-btn>
          <v-btn text :to="{name : 'register'}">
            {{ $t('register') }}
          </v-btn>
      </template>
    </div>
    <v-sheet min-height="100vh" class="mt-12">
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
        <v-col cols="12" lg="10" sm="11">
            <v-chip v-for="(item , index) in features" :key="index" class="orange lighten-3 mx-1 my-1" dark>{{item}}</v-chip>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="7">
          <froala :tag="'textarea'" :config="config" v-model="model"></froala>
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
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex'
import VueFroala from 'vue-froala-wysiwyg';
export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },
  methods : {
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
  },
  data: () => ({
    title: window.config.appName,
    features : [
      'laravel 7','SPA','CORS ready','Sweetalert2','Multi Language','Vue.js 2','Vuetify'
    ],
    config: {
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
          }
        },
        placeholderText: 'Edit Your Content Here!',
        toolbarButtons: {
               moreText: {
                  buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'textColor', 'backgroundColor', 'clearFormatting'],
                  align: 'left',
                  buttonsVisible: 3
               },
               moreParagraph: {
                  buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatUL', 'paragraphFormat', 'lineHeight', 'outdent', 'indent', 'quote'],
                  align: 'left',
                  buttonsVisible: 3
               },
               moreRich: {
                  buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons'],
                  align: 'left',
                  buttonsVisible: 5
               }
            }
      },
      model: null
  }),

  computed: mapGetters({
    authenticated: 'auth/check',
    user: 'auth/user'
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
