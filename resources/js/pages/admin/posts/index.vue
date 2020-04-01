<template>
  <v-sheet>
    <Title :name="'Todos'" :caption="'Lorem ipsum dolor sit amet.'" :items="items" />
    <v-row>
        <v-col cols="12">
            <DTable 
            :title="'Todos'" 
            :caption="'Lorem ipsum dolor sit amet.'" 
            :headers="headers"
            :module="'todos'"
            :head="false"
            :insert="{
                show : true,
                link : 'post-create'
            }"
            :boolean="{
                isShow : true,
                field : 'completed'
            }"            
            :image="{
                isShow : false,
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
                { text: 'Completed', value: 'status' },
                { text: 'Action', value: 'action' },
            ],
        }
    }
}
</script>

<style>

</style>