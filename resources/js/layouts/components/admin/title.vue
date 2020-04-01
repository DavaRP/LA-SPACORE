<template>
  <div>
        <v-skeleton-loader
        :loading="loading"
        transition="scale-transition"
        type="list-item-three-line"
        >
            <div>
                <h4 class="display-3">{{name}}</h4>
            <small class="grey--text">{{caption}}</small>
            <v-breadcrumbs class="ml-n6" :items="items">
            <template v-slot:item="{ item }">
                    <v-breadcrumbs-item
                        :href="item.href"
                        :disabled="item.disabled"
                        active-class="white--text"
                        exact-active-class="white--text"
                    >
                        {{ item.text }}
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
            </div>
        </v-skeleton-loader>
  </div>
</template>

<script>
export default {
    props: ['name','caption','items'],
    data(){
        return{
            loading : true,
        }
    },
    mounted(){
        setTimeout(() => { 
            this.loading = false
        },1000)
    }
}
</script>

<style>

</style>