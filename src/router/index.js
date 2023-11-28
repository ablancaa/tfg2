import { createRouter, createWebHashHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UsersView from '../views/UsersView.vue';
import UserDetail from "../views/UserDetail.vue";
import DashBoard_Admin from '../views/DaschBoardAdminView.vue';
import DashBoard_User from '../views/DaschBoardUserView.vue';
import TicketsView from '../views/TicketsView.vue';
import TicketDetail from '../views/TicketDetail.vue'
import EstadisticasView from '../views/EstadisticasView.vue';
import PageNotFound from '@/components/PageNotFound.vue'

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
    path: '/usersView',
    name: 'usersView',
    component: UsersView
  },
  {
    path: '/userDetail/:idUser/:imgUser/name/:name/surname1/:surname1/surname2/:surname2/rol/:rol/email/:email/phone/:phone',
    name: 'userDetail',
    component: UserDetail,
    props: false,
    
  },
  {
    path: '/ticketsView',
    name: 'ticketsView',
    component: TicketsView
  },
  {
    path: '/ticketDetail/:idTicket/title/:title/description/:description/category/:category/state/:state/priority/:priority/date/:date/idUser/:idUser/technical/:technical/comments/:comments',
    name: 'ticketDetail',
    component: TicketDetail
  },
  {
    path: '/estadisticasView',
    name: 'estadisticasView',
    component: EstadisticasView
  },
  {
    path: '/:PageNotFound(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
