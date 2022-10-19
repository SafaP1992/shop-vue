import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/SinglePage/ProductView.vue'

import Products from '../views/Admin/Products.vue'
import Posts from '../views/Admin/Posts.vue'
import Users from '../views/Admin/Users.vue'

import IndexAdmin from '../views/Admin/Index.vue'

import MainLayout from '../layouts/MainLayout.vue'
import AdminLayout from '../layouts/AdminLayout.vue'

import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'product/:id/:title',
        name: 'SingleProduct',
        component: ProductView
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import("../views/SearchView.vue"),
      },
      {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: IndexAdmin,
      },
      {
        path: 'users',
        component: Users
      },
      {
        path: 'products',
        component: Products
      },
      {
        path: 'posts',
        component: Posts
      },
    ]
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
