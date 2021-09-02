// import Vue from '../vue/platforms/web/runtime/index'
import Vue from 'vue'
import App from './App.vue'
// import Vuex from './vuex/index'
import Vuex from 'vuex'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Vuex);

const pageA = {
    state: {
        count: 100
    },
    mutations: {
        incrementA(state) {
            state.count++;
        }
    },
    actions: {
        incrementAction(context) {
            // console.log('context',context)
            context.commit('incrementA');
        }
    },
    namespaced: true,
}

let store = new Vuex.Store({
    modules: {
        a: pageA,
        // b: pageB
    },
    getters: {
        getStatePlusOne: state => state.a.count
    }

});
// console.log(store)

router.beforeEach((to, from, next) => {
    // console.log('next')
    next()
})

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')



Vue.config.productionTip = false;