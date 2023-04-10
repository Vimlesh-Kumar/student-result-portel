<template>
    <v-card class="mx-auto mt-4" max-width="750" variant="outlined">
        <!-- <h1>{{ std1 }}</h1> -->
        <v-card-title class="text-h4 mb-1 d-flex justify-center bg-green-lighten-4">{{ std1[0].name }}</v-card-title>

        <v-card-text>
            <v-data-table :headers="headers" :items="std1"></v-data-table>
            <v-container class="bg-light-blue-lighten-5">
                <v-row>
                    <v-col>
                        <h2>Marks Obtained</h2>
                    </v-col>
                </v-row>
            </v-container>

        </v-card-text>
    </v-card>
</template>

<script>

export default {
    data() {
        return {
            std1: [],
            headers: [
                // { title: "Name", key: 'name',sortable:false},
                { title: "ID", key: "id", sortable: false },
                { title: "Age", key: 'age', sortable: false },
                { title: "Gender", key: 'gender', sortable: false },
                { title: "Nationality", key: 'nationality', sortable: false },
                { title: "Contact No.", key: 'mobile', sortable: false }
            ]
        }
    },
    computed: {
        idForDetails() {
            return parseInt(this.$route.params.studentId)

        },
        // student(){

        //     return JSON.parse(this.$store.state.students.find(student => student.id === this.idForDetails))
        // }
    },
    created() {
        this.findAstudent()
    },
    methods: {
        findAstudent() {
            this.std1.push((this.$store.state.students.find(student => student.id === this.idForDetails)))
            // console.log(this.std1)
        }
    }

}
</script>

