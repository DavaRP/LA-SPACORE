<template>
  <v-sheet>
    <Title :name="'Dashboard'" :caption="'Lorem ipsum dolor sit amet.'" :items="items" />
    <v-row>
        <v-col cols="12" v-for="i in summaries" :key="i.id" lg="3" sm="6" md="6">
            <v-card
                class=" text-center"
                :color="i.color"
                light
                hover
                ripple
                min-height="300"
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :value="i.value"
                    color="rgba(255, 255, 255, .7)"
                    height="200"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="font-weight-thin">{{i.title}}</div>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                <v-btn block text>Go to Report</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12">
            <DTable 
            :title="'Datas'" 
            :caption="'Lorem ipsum dolor sit amet.'" 
            :headers="headers"
            :module="'users'"
            :head="true"
            :insert="{
                show : false,
            }"
            :boolean="{
                isShow : false,
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
import Title from '../layouts/components/admin/title'
import DTable from '../layouts/components/admin/table'
export default {
    layout : 'admin',
    components:{
        Title,
        DTable
    },
    metaInfo () {
        return { title: this.$t('home') }
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
                    text: 'Dashboard',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
            summaries : [
                {
                    id:1,
                    title: 'Sales Last 24 Hours',
                    value: [
                        423,
                        446,
                        675,
                        510,
                        590,
                        610,
                        760,
                    ],
                    color: 'secondary'
                },
                {
                    id:2,
                    title: 'User Looged in Last 24 Hours',
                    value: [
                        100,
                        120,
                        90,
                        80,
                        65,
                        100,
                        120,
                    ],
                    color: 'secondary'
                },
                {
                    id:3,
                    title: 'User Looged in Last 24 Hours',
                    value: [
                        100,
                        120,
                        90,
                        80,
                        65,
                        100,
                        120,
                    ],
                    color: 'secondary'
                },
                {
                    id:4,
                    title: 'User Looged in Last 24 Hours',
                    value: [
                        100,
                        120,
                        90,
                        80,
                        65,
                        100,
                        120,
                    ],
                    color: 'secondary'
                },
            ],
            headers: 
            [
                { text: 'Id', value: 'id' },
                { text: 'Name', value: 'name' },
                { text: 'Username', value: 'username' },
                { text: 'Phone', value: 'phone' },
                { text: 'Email', value: 'email' },
                { text: 'Website', value: 'website' },
                { text: 'Action', value: 'action' },
            ],
        }
    }
}
</script>

<style>

</style>