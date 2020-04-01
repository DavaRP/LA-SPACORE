<template>
  <v-sheet>
    <v-container>
    <Title :name="'Todos'" :caption="'Insert Todo'" :items="items" />
        
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <v-row>
            <v-col sm="12" cols="12" md="6" lg="6">
                    <v-text-field
                    v-model="form.input"
                    :counter="30"
                    :rules="requiredRules"
                    label="Name"
                    required
                    ></v-text-field>
            </v-col>
            <v-col sm="12" cols="12" md="6" lg="6">
                <v-text-field
                    v-model="form.input"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>
            </v-col>
            
            <v-col sm="12" cols="12" md="6" lg="6">
                    <v-text-field
                    v-model="form.input"
                    :counter="30"
                    type="password"
                    :rules="requiredRules"
                    label="Password"
                    required
                    ></v-text-field>
            </v-col>
            <v-col sm="12" cols="12" md="6" lg="6">
                <v-text-field
                    v-model="form.input"
                    :rules="requiredRules"
                    type="password"
                    label="Password Confirmation"
                    required
                    ></v-text-field>
            </v-col>
            
            <v-col sm="12" cols="12" md="6" lg="6">
                <v-textarea
                    name="input-7-1"
                    label="Address"
                    v-model="form.input"
                    hint="Hint text"
                    row-height="20"
                ></v-textarea>
            </v-col>
            
            <v-col sm="12" cols="12" md="6" lg="6">
                <v-autocomplete
                    v-model="form.select"
                    :items="selects"
                    outlined
                    chips
                    small-chips
                    label="Outlined"
                    multiple
                ></v-autocomplete>
                <v-file-input show-size counter multiple label="File input" v-model="form.file" outlined></v-file-input>
            </v-col>
            <v-col cols="12" sm="12" lg="12" md="12">
                <v-date-picker
                    header-color="dark"
                    v-model="form.date"
                    full-width
                    :landscape="$vuetify.breakpoint.smAndUp"
                    class="mt-4"
                ></v-date-picker>
            </v-col>
            <v-col cols="12">
                    <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    :loading="loading"
                    type="submit"
                    >
                    Submit
                    </v-btn>
            </v-col>
        </v-row>
    </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
import Title from '../../../layouts/components/admin/title'
import DTable from '../../../layouts/components/admin/table'
import Swal from 'sweetalert2'
export default {
  layout : 'admin',
  middleware: 'auth',
    components:{
        Title,
        DTable
    },
    data(){
        return{
            valid: true,
            items: [
                {
                    text: 'User Panel',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Post',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Create',
                    disabled: true,
                    href: 'breadcrumbs_dashboard',
                },
            ],
            form: {
                input : null,
                select : [],
                file : null,
                date : new Date().toISOString().substr(0, 10),
            },
            selects: ['foo', 'bar', 'fizz', 'buzz'],
            requiredRules: [
                v => !!v || 'this field is required'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            loading : false
        }
    },
    methods : {
        async validate () {
            await this.$refs.form.validate()
            if(this.valid){
                Swal.fire({
                    title : "Insert data",
                    text : "Are you sure",
                    icon : 'question',
                    showCancelButton : true
                }).then(res => {
                    if(res.value){
                        this.loading = true

                        // delete this
                        setTimeout(() => {
                            this.loading = false
                            Swal.fire('Success','Your data has been inserted','success')
                        },1000)
                    }
                })
            }
        },
    }
}
</script>

<style>

</style>