import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Tickets from '../views/tickets/Index.vue'
import NewTicket from '../views/tickets/New.vue'
import TicketShow from '../views/tickets/Show.vue'
import TicketEdit from '../views/tickets/Edit.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/auth/login', component: Login },
  { path: '/auth/signup', component: Signup },
  { path: '/dashboard', component: Dashboard },
  { path: '/tickets', component: Tickets },
  { path: '/tickets/new', component: NewTicket },
  { path: '/tickets/:id', component: TicketShow, props: true },
  { path: '/tickets/:id/edit', component: TicketEdit, props: true },
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
