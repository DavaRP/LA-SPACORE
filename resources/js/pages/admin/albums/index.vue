<template>
  <v-sheet>
    <Title :name="'Albums'" :caption="'Album Datas'" :items="items" />
    <v-row>
        <v-col cols="12">
            <DTable 
            :title="'Albums'" 
            :caption="'Lorem ipsum dolor sit amet.'" 
            :headers="headers"
            :module="'photos'"
            :head="false"
            :insert="{
                show : true,
                link : 'post-create'
            }"
            :boolean="{
                isShow : false,
            }"
            :image="{
                isShow : true,
                isArray : false,
                isJSON : false,
                field : 'url'
            }"
            
             />
        </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
import Title from '../../../layouts/components/admin/title'
import DTable from '../../../layouts/components/admin/table'
export default {
  layout : 'admin',
  middleware: 'auth',
    components:{
        Title,
        DTable
    },
    data(){
        return{
            items: [
                {
                    text: 'User Panel',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Post',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
            headers: 
            [
                { text: 'Id', value: 'id' },
                { text: 'Title', value: 'title' },
                { text: 'Image', value: 'image' },
                { text: 'Action', value: 'action' },
            ],
        }
    }
}
</script>

<style>

</style>