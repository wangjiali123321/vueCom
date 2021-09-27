// import Vue from '../../vue/platforms/web/runtime/index'
import Vue from 'vue'
import Router from '../vuerouter/index'
// console.log(Router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/topo',
      // component: Recommend,
      component: (resolve) => require(['../components/topo/topo'], resolve),
    },
    {
      path: '/table',
      // component: Recommend,
      component: (resolve) => require(['../page/table'], resolve)
    },
    {
      path: '/map',
      // component: Recommend,
      component: (resolve) => require(['../page/map'], resolve)
    }
  ],
  scrollBehavior: () => ({ y: 0 }),
  base: '/edge/',
  mode: 'history'
})
