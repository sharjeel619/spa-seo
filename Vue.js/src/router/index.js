import Vue from 'vue'
import VueRouter from 'vue-router'
const ShowsListPage = () => import('../components/ShowList.vue') 
const ShowDetailsPage = () => import('../components/ShowDetails.vue')
const router = new VueRouter({
  routes: [
    {
      name: 'Show Details',
      path: '/tvshow/:id',
      component: ShowDetailsPage
    },
    {
      name: 'Shows List',
      path: '',
      component: ShowsListPage
    },
  ],
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})
Vue.use(VueRouter)
export default router
