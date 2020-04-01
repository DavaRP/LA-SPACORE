<template>
  <div>
        <v-row v-if="head">
            <v-col>
                <v-skeleton-loader
                :loading="loading"
                transition="scale-transition"
                type="list-item-two-line"
                >
                    <div>
                        <h5 class="display-1">{{title}}</h5>
                        <small class="grey--text">{{caption}}</small>
                    </div>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        
        <v-row v-if="insert.show">
            <v-col>
                <v-skeleton-loader
                :loading="loading"
                transition="scale-transition"
                type="button"
                >
                    <div class="text-left">
                        <v-btn color="blue" dark :to="{name : insert.link}">Insert Data <i class="fas fa-plus ml-3"></i></v-btn>
                    </div>
                </v-skeleton-loader>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="datas"
            :loading="loading"
            class="elevation-1"
        >
            <template v-slot:item.action="{ item }">
                <v-btn class="mr-1" color="success" dark @click="editItem(item.id)" x-small>Edit</v-btn>
                <v-btn class="ml-1" color="red" dark @click="removeItem(item.id)" x-small>Delete</v-btn>
            </template>

            <template v-if="boolean.isShow" v-slot:item.status="{ item }">
                <!-- Tambahin nama field sendiri -->
                <v-chip v-if="item.completed" small color="success">completed</v-chip>
                <v-chip v-if="!item.completed" small color="secondary">Incompleted</v-chip>
            </template>

            <template v-if="image.isShow" v-slot:item.image="{ item }">
                <!-- Tambahin nama field sendiri -->
                <div v-if="image.isArray">
                    <v-avatar v-if="item.thumbnailUrl">
                        <expandable-image :src="item.thumbnailUrl"  />
                    </v-avatar>
                </div>
                <div v-if="image.isJSON">
                    <v-avatar v-if="item.thumbnailUrl">
                        <expandable-image :src="item.thumbnailUrl"  />
                    </v-avatar>
                </div>
                <div v-if="!image.isArray && !image.isJSON">
                    <v-avatar v-if="item.thumbnailUrl">
                        <expandable-image :src="item.thumbnailUrl"  />
                    </v-avatar>
                </div>
            </template>
        </v-data-table>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    name: 'dava-table',
    data(){
        return{
            datas : [],
            loading : true
        }
    },
    props : ['headers','title','caption','module','head','insert','link', 'boolean','image'],
    mounted(){
        axios.get(window.BASE_URL + this.module)
        .then(res => {
            console.log(res.data)
            this.datas = res.data
            this.loading = false

        })
        .catch(err => {
            Swal.fire({
                title : 'ERROR CODE : ' + err.response.status,
                text : err.response.data.message,
            })
            this.loading = false
            console.log(console.log(err.response.data))
        })
    },
    methods : {
        editItem (id) {
            console.log(id)
        },
        removeItem (id) {
            Swal.fire({
                title: 'Are You sure?',
                text: "You can't revert this",
                icon:'warning',
                showCancelButton: true,
            })
            .then(res => {
                if(res.value){
                    Swal.fire('Success','Your item has been deleted','success')
                    console.log(id)
                }else{

                }
            })
        },
    }
}
</script>

<style>

</style>