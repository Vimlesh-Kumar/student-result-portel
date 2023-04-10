<template>
    <v-form @submit.prevent="submitData">
        <v-container>
            <v-row>
                <v-col>
                    <h2>Personal Details</h2>

                </v-col>
            </v-row>
            <v-row justify="center">
                <v-divider></v-divider>
                <v-col cols="12" md="8">
                    <v-text-field label="Full Name" v-model="fullName"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field type="number" label="Age" v-model="age"></v-text-field>
                </v-col>
            </v-row>

            <v-row>

                <v-col cols="12" md="4">
                    <v-combobox label="Gender" :items="['Male', 'Female', 'Others']" v-model="gender"></v-combobox>
                </v-col>
                <v-col cols="12" md="4">
                    <v-combobox label="Natonality" :items="['Indian', 'Nepal', 'U.S.']" v-model="nationality"></v-combobox>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="Phone Number" v-model="phoneNumber"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <h2>Education Details</h2>

                </v-col>
            </v-row>
            <v-row>
                <v-divider></v-divider>
                <v-col cols="12" md="4">
                    <v-text-field type="number" v-model="mathsMarks" @blur="maths" label="Maths"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field type="number" v-model="phyMarks" @blur="phy" label="Physics"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field type="number" v-model="chemMarks" @blur="chem" label="Chemistry"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h2>Address Details</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea label="Address" v-model="address"></v-textarea>
                </v-col>
            </v-row>
            <v-col cols="12" md="12">
                <v-btn type="submit" class="bg-success">Submit</v-btn>
            </v-col>


        </v-container>
    </v-form>
</template>
    

<script>
export default {
    data() {
        return {
            fullName: '',
            age: '',
            gender: '',
            nationality: '',
            phoneNumber: '',
            address: '',
            mathsMarks: null,
            phyMarks: null,
            chemMarks: null,
            sum: 0,

        }

    },


    methods: {
        submitData() {
            var studetns = JSON.parse(localStorage.getItem('studentsObj')) == null ? [] : JSON.parse(localStorage.getItem('studentsObj'));
            var id = studetns.length == 0 ? 0 : studetns[studetns.length - 1].id + 1;
            // var code='CSE-URN'
            // var newId=code+id
            let std1 = {
                id: id,
                name: this.fullName,
                age: this.age,
                gender: this.gender,
                nationality: this.nationality,
                mobile: this.phoneNumber,
                maths: this.mathsMarks,
                physics: this.phyMarks,
                chemistry: this.chemMarks,
                total: this.sum,
                address: this.address
            }


            studetns.push(std1);
            localStorage.setItem('studentsObj', JSON.stringify(studetns));

            this.$store.state.students = JSON.parse(localStorage.getItem("studentsObj"));
            console.log(this.$store.state.students)
            // this.$store.state.students = this.students;
            // this.$store.state.students.push(std1)        

            this.$router.push('/result-overview')
            // newId=''

        },

        maths() {

            this.totalMarks()
        },
        phy() {

            this.totalMarks()
        },
        chem() {

            this.totalMarks()
        },
        totalMarks() {
            const m = +this.mathsMarks
            const p = +this.phyMarks
            const c = +this.chemMarks
            this.sum = +m + p + c
            console.log(this.sum)
        }
    }
}
</script>