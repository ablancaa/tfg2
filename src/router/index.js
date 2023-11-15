import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserView from '../views/UsersView.vue';
import DashBoard_Admin from '../views/DaschBoardAdminView.vue';
import DashBoard_User from '../views/DaschBoardUserView.vue';
import TicketsView from '../views/TicketsView.vue';
import EstadisticasView from '../views/EstadisticasView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/dashBoard_admin',
    name: 'dashBoard_admin',
    component: DashBoard_Admin
  },
  {
    path: '/dashBoard_user',
    name: 'dashBoard_user',
    component: DashBoard_User
  },
  {
    path: '/userView',
    name: 'userview',
    component: UserView
  },
  {
    path: '/tickets_view',
    name: 'tickets_view',
    component: TicketsView
  },
  {
    path: '/estadisticas_view',
    name: 'estadisticas_view',
    component: EstadisticasView
  }, 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
