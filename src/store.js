import {createStore} from 'vuex'
const store =createStore({
    state(){
        return{
            // students:[]
            students:JSON.parse(localStorage.getItem("studentsObj"))
            // students: JSON.parse(localStorage.getItem('studentsObj')) == null ? [] : JSON.parse(localStorage.getItem('studentsObj'))
            // students:[
            //     { //Sudent-1
            //         ID:'ABCD123',
            //         name:'Vimlesh Kumar',
            //         age:21,
            //         gender:'male',
            //         nationality:'Indian',
            //         mobile:8130684131,
            //         maths:99,
            //         chemistry:90,
            //         physics:98,
            //         total:287,
            //         Address:'L-395 Kanpur 208017',
            //         // details:'View'
            //     }
            // ]
        }
    }
})

export default store;