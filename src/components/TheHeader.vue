<template>
    <!-- <v-card color="grey-lighten-4" flat height="200px" rounded="0"></v-card> -->

    <v-toolbar color="blue" density="compact" height="75">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Student Result Plateform</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat><router-link to="/result-overview" class="white text">Result-Overview</router-link></v-btn>
            <v-btn flat><router-link to="/add-student">Add Student</router-link></v-btn>
            <v-btn flat><router-link to="/students">Students List</router-link></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style scoped></style>