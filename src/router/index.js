import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

import { setTitle } from '../lib/util'
Vue.use(Router)

const router = new Router({
  routes
})

const HAS_LOGIN = true;

router.beforeEach((to,from,next) => {
  to.meta && setTitle(to.meta.title)
  if(to.name !== 'login'){
     if(HAS_LOGIN) next()
     else next({name: 'login'})
  } else {
    if(HAS_LOGIN) next({ name: 'home'})
    else next ()
  }
  //logining = true
}) 

// router.beforeResolve

router.afterEach((to,from) => {
  //logining = false
})

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件中调用 beforeRouterUpdate
 * 5. 调用路由独享的守卫.
 * 6. 解析异步路由。
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouterEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫.
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用 beforeRouterEnter 守卫里传给next的回调函数
 */
export default router
