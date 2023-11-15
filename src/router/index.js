import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserView from '../views/UsersView.vue';
import UserDetail from "../views/UserDetail.vue";
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
    path: '/dashBoardAdmin',
    name: 'dashBoardAdmin',
    component: DashBoard_Admin
  },
  {
    path: '/dashBoardUser',
    name: 'dashBoardUser',
    component: DashBoard_User
  },
  {
    path: '/userView',
    name: 'userView',
    component: UserView
  },
  {
    path: '/userDetail/:idUser/name/:name/surname1/:surname1/surname2/:surname2/rol/:rol/email/:email/phone/:phone',
    name: 'userDetail',
    component: UserDetail,
    props: false,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'userDetail',
        component: UserDetail,
      }
    ]
  },
  {
    path: '/ticketsView',
    name: 'ticketsView',
    component: TicketsView
  },
  {
    path: '/estadisticasView',
    name: 'estadisticasView',
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
