import Vue from 'vue';
import VueRouter from 'vue-router';
//import App from './App.vue'
import head from './head.vue';

import index from './templates/index.vue';
import addBook from './templates/addBook.vue';
import detail from './templates/bookLists.vue';
import bookInfo from './templates/bookInfo.vue';
import register from './templates/register.vue';
import login from './templates/login.vue';
import 'bootstrap/dist/css/bootstrap.css';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';


Vue.use(VueResource);

Vue.use(VueRouter);

Vue.use(ElementUI);

// ES5写法
//const Index = {
//  template: index
//};
//const About = {
//  template: about
//};
//const Detail = {
//  template: detail
//};

// ES6写法 直接component: 单文件组件名
const routes = [ // 定义路由
  {path: '/', component: index}, // 默认路由
  //{path: '/index', component: index},
  {path: '/addBook', component: addBook},
  {path: '/detail', component: detail},
  {path: '/register', component: register},
  {path: '/login', component: login},
  {path: '/user/:id', component: bookInfo}
];

// 创建router实例，然后传 'routes' 配置
const router = new VueRouter({
  routes  // 缩写 routes：routes
});

// 创建和挂载根实例
new Vue({
  el: '#app',
   router, // router配置参数注入路由
   render: h => h(head)
})
//router.go('about');

