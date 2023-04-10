<template>
  <div>
    <the-header></the-header>
    <router-view :students="students" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
export default{
  name:'App',
  components:{
    TheHeader
  },
  data () {
     return {
      students:this.$store.state.students
    //     { //Sudent-1
    //       ID:'ABCD123',
    //       name:'Vimlesh Kumar',
    //       age:21,
    //       gender:'male',
    //       nationality:'Indian',
    //       Address:'L-395 Kanpur 208017',
    //       mobile:8130684131,
    //       maths:99,
    //       chemistry:90,
    //       physics:98,
    //       total:287,
    //       details:'View'
    //     },
    //     { //Sudent-1
    //       ID:'ABCD123',
    //       name:'Vimlesh Kumar',
    //       age:21,
    //       gender:'male',
    //       nationality:'Indian',
    //       Address:'L-395 Kanpur 208017',
    //       mobile:8130684131,
    //       maths:99,
    //       chemistry:90,
    //       physics:98,
    //       total:287,
    //       details:'View'
    //     }

      
    }
  },
}
</script>
