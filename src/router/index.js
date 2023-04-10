// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ResultOverview from '../pages/ResultOverview'
import AddStudent from '../pages/AddStudent.vue'
import StudentList from '../pages/StudentList.vue'
import StudentDetails from '../pages/StudentDetails'

const routes = [
  { path: '/', redirect: '/students' },
  { path: '/add-student', component: AddStudent },
  { path: '/students', component: StudentList },
  { path: '/students/:studentId', component: StudentDetails },
  { path: '/result-overview', component: ResultOverview },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
