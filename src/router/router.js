import Home from '@/views/Home.vue'
export default [
  {
    path: '/',
    alias: '/home_page',
    name: 'home',
    component: Home,
    beforeEnter: (to,from,next) => {
      // if(from.name === 'about') alert('这是从about页面过来的')
      // else alert ('这不是从about登录页来的')
      next()
    },
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    meta: {
      title: 'about'
    }
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
    meta: {
      title: 'argu'
    }

  },
  {
    path:'/parent',
    component: () => import ('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () =>import('@/views/child.vue')
      }
    ]
  },
  {
    path:'/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: to => '/'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }

]
