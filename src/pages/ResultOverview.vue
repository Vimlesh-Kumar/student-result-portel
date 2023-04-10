<template>
  <v-container>
    <v-row v-if="students2">
      <v-col md="5">
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>

        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="students2" :search="search" class="elevation-1">
          <template v-slot:[`item.action`]="{ item }">
            <v-btn @click="showStudentDetails(item.raw.id)" class="bg-success">Show Details</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import router from '@/router'
export default {

  props: ["students"],
  data() {
    return {
      search: "",
      students2: [],
      headers: [
        { title: 'ID', key: 'id' },
        { title: "Student Name", key: "name" },
        { title: "Maths", key: "maths" },
        { title: "Physics", key: "physics" },
        { title: "Chemistry", key: "chemistry" },
        { title: "Total", key: 'total' },
        { title: "Action", key: 'action', sortable: false }
      ],
    }
  },


  mounted() {
    this.students2 = this.$store.state.students
  },
  methods: {
    showStudentDetails(id) {
      router.push(`/students/${id}`)
    }
  }
}
</script>