// import Vue from '../../vue/platforms/web/runtime/index'
import Vue from 'vue'
import Router from '../vuerouter/index'
// console.log(Router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/cropper'
    },
    {
      path: '/topo',
      // component: Recommend,
      component: (resolve) => require(['../components/topo/topo3'], resolve),
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
    },
    {
      path: '/test',
      // component: Recommend,
      name:'test',
      component: (resolve) => require(['../page/test'], resolve)
    },
    {
      path: '/three',
      name:'threejs',
      // component: Recommend,
      component: (resolve) => require(['../page/three'], resolve)
    },
    {
      path: '/rxjs',
      name: 'rxjs',
      component: (resolve) => require(['../page/rxjs'], resolve)
    },
    {
      path: '/cropper',
      name: 'cropper',
      component: (resolve) => require(['../page/cropper'], resolve)
    },
    {
      path: '/simpleuplaoder',
      name: 'simpleuplaoder',
      component: (resolve) => require(['../page/simpleuploader'], resolve)
    },
    {
      path: '/star',
      name: 'star',
      component: (resolve) => require(['../page/star/index'], resolve)
    }
  ],
  scrollBehavior: () => ({ y: 0 }),
  base: '/edge/',
  mode: 'history'
})
