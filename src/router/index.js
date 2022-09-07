import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'


const routes = [
  {
  path: '/home',
    name: 'HomeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about_page" */ '../views/HomeView.vue')
  },
  {
  path: '/about_page',
    name: 'About_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "homeview" */ '../views/About_page.vue')
  },

  {
    path: '/landing_page',
    name: 'Landing_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "landing_page" */ '../views/Landing_page.vue')
  },
  {
    path: '/sign_in',
    name: 'Sign_in',
    component: () => import(/* webpackChunkName: "sign_in" */ '../views/Sign_in.vue')
  },

  {
    path: '/sign_up',
    name: 'Sign_up',
    component: () => import(/* webpackChunkName: "sign_up" */ '../views/Sign_up.vue')
  },

  {
    path: '/all_items',
    name: 'All_items',
    component: () => import(/* webpackChunkName: "all_items" */ '../views/All_items.vue')
  },

  {
    path: '/displaying_single_item',
    name: 'Displaying_single_item',
    component: () => import(/* webpackChunkName: "displaying_single_item" */ '../views/Displaying_single_item.vue')
  },

  {
    path: '/booking_form',
    name: 'Booking_form',
    component: () => import(/* webpackChunkName: "booking_form" */ '../views/Booking_form.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },

  {
    path: '/manage_items',
    name: 'Manage_items',
    component: () => import(/* webpackChunkName: "manage_items" */ '../views/Manage_items.vue')
  },

  {
    path: '/manage_profile',
    name: 'Manage_profile',
    component: () => import(/* webpackChunkName: "manage_profile" */ '../views/Manage_profile.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
