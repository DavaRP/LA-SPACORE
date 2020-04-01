<template>
  <div>
      <v-navigation-drawer
    permanent
    fixed
    expand-on-hover
    width="300"
    id="nav"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar  class="mx-auto" >
          <v-img src="https://secure.gravatar.com/avatar/ff1af0bdff100ace01aa01e57e1fbed9?s=160&d=identicon&r=g"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content class="text-center">
          <v-list-item-title class="title">Dava Rizqi Pradipta</v-list-item-title>
          <v-list-item-subtitle>davarizqi@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item link>
        <v-list-item-icon>
            <i class="fas fa-user"></i>
        </v-list-item-icon>
        <v-list-item-title>Edit Profile</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>            
            <i class="fas fa-sign-out-alt"></i>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
      
      <v-list-item exact-active-class="orange white--text" active-class="light" link :to="{name : i.link}" v-for="i in links" :key="i.link">
        <v-list-item-icon>
            <i :class="'fas fa-'+i.icon"></i>
        </v-list-item-icon>
        <v-list-item-title>{{i.name}}</v-list-item-title>
      </v-list-item>
      <!-- List Group -->
    <v-divider></v-divider>

      <v-list-group v-for="m in modules" :key="m.title" active-class="white--text black">
        <template v-slot:activator>
          <v-list-item-icon>
              <i :class="'fas fa-' + m.icon"></i>
          </v-list-item-icon>
          <v-list-item-title>{{m.title}}</v-list-item-title>
        </template>
        
        <v-list-item
          v-for="(crud, i) in m.cruds"
          :key="i"
          link
          :to="{name : crud[2]}"
          active-class="light black--text"
          exact-active-class="orange lighten-2 white--text"
        >
          <v-list-item-title v-text="crud[0]"></v-list-item-title>
          <v-list-item-icon>
            <i :class="'fas fa-'+crud[1]"></i>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <!-- End List Group -->
    </v-list>
    
  </v-navigation-drawer>

  <v-navigation-drawer
    temporary
    fixed
    v-model="navs"
    id="app-bar"
    light
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar  class="mx-auto" >
          <v-img src="https://secure.gravatar.com/avatar/ff1af0bdff100ace01aa01e57e1fbed9?s=160&d=identicon&r=g"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content class="text-center">
          <v-list-item-title class="title">Dava Rizqi Pradipta</v-list-item-title>
          <v-list-item-subtitle>davarizqi@gmail.com</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

          <v-divider></v-divider>
      <v-list-item link>
        <v-list-item-icon>
            <i class="fas fa-user"></i>
        </v-list-item-icon>
        <v-list-item-title>Edit Profile</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
            <i class="fas fa-sign-out-alt"></i>
        </v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
      
      <v-list-item exact-active-class="orange white--text" active-class="light black--text" link :to="{name : i.link}" v-for="i in links" :key="i.icon">
        <v-list-item-icon>
            <i :class="'fas fa-'+i.icon"></i>
        </v-list-item-icon>
        <v-list-item-title>{{i.name}}</v-list-item-title>
      </v-list-item>
      <!-- List Group -->
    <v-divider></v-divider>

      <v-list-group v-for="m in modules" :key="m.title" active-class="white--text black">
        <template v-slot:activator>
          <v-list-item-icon>
              <i :class="'fas fa-' + m.icon"></i>
          </v-list-item-icon>
          <v-list-item-title>{{m.title}}</v-list-item-title>
        </template>
        
        <v-list-item
          v-for="(crud, i) in m.cruds"
          :key="i"
          link
          :to="{name : crud[2]}"
          active-class="light black--text"
          exact-active-class="orange lighten-2 white--text"
        >
          <v-list-item-title v-text="crud[0]"></v-list-item-title>
          <v-list-item-icon>
              <i :class="'fas fa-'+crud[1]"></i>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
      <!-- End List Group -->
  </v-navigation-drawer>
    
  <v-app-bar
      :collapse-on-scroll="collapseOnScroll"
      fixed
      @click="navs = true"
      color="orange accent-4"
      light
      id="app-bar"
      width="50"
    >
        <div class="text-center">
                <i class="fas fa-bars white--text"></i>
        </div>

    </v-app-bar>
  </div>
</template>

<script>
export default {
    name : 'drawer',
    data(){
        return{
        collapseOnScroll : false,
        navs: false,
        links : [
            {
                id:1,
                icon: 'home',
                link: 'home',
                name: 'Home'
            },
            {
                id:2,
                icon: 'eye',
                link: 'dashboard',
                name: 'Dashboard'
            },
        ],
        modules: [
                {
                    id:1,
                    icon: 'newspaper',
                    title : 'Posts',
                    cruds: [
                        ['Create', 'plus', 'post-create'],
                        ['Browse', 'eye', 'post-index'],
                    ],
                },
                {
                    id:2,
                    title : 'Albums',
                    icon: 'list',
                    cruds: [
                        ['Browse', 'eye', 'album-index'],
                    ],
                },
            ]
        }
    }
}
</script>

<style scoped>


/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 200px) { 
    #nav{
        display : none;
    }
}

@media (min-width: 576px) { 
    #nav{
        display : none;
    }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
    #nav{
      display : none;
    }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
    #nav{
        display : none;
    }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
  #nav{
    display: block;
    padding-top: 10px
  }
  #app-bar{
        display : none;
    }
  #logout{
    display: block !important;
  }
}
</style>