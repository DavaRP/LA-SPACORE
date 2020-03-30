<template>
<div>
  <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
            light
          >
          <i class="fas fa-ellipsis-v"></i>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in locales"
            :key="i"
          >
            <v-list-item-title @click="setLocale(i)">{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
</div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    },
    convert(locales) {
      return locales
    }
  }
}
</script>
