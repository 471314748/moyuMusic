import Vue from 'vue';
import App from './App.vue';
import Home from './components/home.vue';
import Songs from './components/Songs.vue';
import MV from './components/MV.vue';
import Comments from './components/Comments.vue';
import Player from './components/Player.vue';

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUi);

let oldPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (url) {
  return oldPush.call(this, url).catch(err => err);
}
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Songs',
      component: Songs
    },
    {
      path: '/mv',
      component: MV
    },
    {
      path: '/comments',
      component: Comments
    },
    {
      path: '/player',
      component: Player
    },
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
