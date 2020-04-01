<template>
<v-sheet
    min-height="620"
    class="overflow-hidden"
    style="position: relative;"
  > 
  <Drawer />
  <v-content id="content">
    <v-row justify="center">
      <v-col cols="12" lg="10" sm="12" md="10">
        <v-container fluid>
          <vue-page-transition name="zoom">
          <router-view />
          </vue-page-transition>
        </v-container>
      </v-col>
    </v-row>
  </v-content>
  <MyFooter />
</v-sheet>
</template>

<script>
import Drawer from '../layouts/components/admin/drawer'
import MyFooter from '../layouts/components/admin/footer'
export default {
    name : 'AdminLayout',
    components:{
        Drawer,
        MyFooter
    },
}
</script>

<style scoped>
/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 200px) { 
    #nav{
        display : none;
    }
  #content{
    margin-top : 50px;
  }
}

@media (min-width: 576px) { 
    #nav{
        display : none;
    }
  #content{
    margin-top : 50px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    #nav{
      display : none;
    }
  #content{
    margin-top : 50px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    #nav{
        display : none;
    }
  #content{
    margin-top : 50px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  #nav{
    display: block;
    padding-top: 10px
  }
}
</style>
