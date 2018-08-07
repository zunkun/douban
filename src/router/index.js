import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入组件
import Home from '@/pages/home/home'
// import Movie from '@/pages/movie/movie'
import Books from '@/pages/books/books'
import Book from '@/pages/books/book'
// import Broadcast from '@/pages/broadcast/broadcast'
// import Group from '@/pages/group/group'
// import Search from '@/pages/search/search'

// 要告诉 vue 使用 vueRouter

const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  //  {
  // 	path: '/movie',
  // 	name: 'Movie',
  // 	component: Movie,
  // },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  }, {
    path: '/book/subject/:id',
    name: 'Book',
    component: Book,
    meta: {
      keepAlive: true
    }
  },
  // {
  // 	path: '/broadcast',
  // 	name: 'Broadcast',
  // 	component: Broadcast,
  // },
  // {
  // 	path: '/group',
  // 	name: 'Group',
  // 	component: Group,
  // },
  // {
  // 	path: '/search',
  // 	name: 'Search',
  // 	component: Search,
  // }
];
var router = new VueRouter({
  routes
})
export default router;