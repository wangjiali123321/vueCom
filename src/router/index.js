// import Vue from '../../vue/platforms/web/runtime/index'
import Vue from 'vue'
import Router from '../vuerouter/index'
import Recommend from '../components/recommend/recommend'
import Disc from '../components/disc/disc'
// console.log(Router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/table'
    },
    {
      path: '/recommend',
      // component: Recommend,
      component: (resolve) => require(['../components/recommend/recommend'], resolve),
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/table',
      // component: Recommend,
      component: (resolve) => require(['../page/table'], resolve)
    }
  ],
  scrollBehavior: () => ({ y: 0 }),
  base: '/edge/',
  mode: 'history'
})
