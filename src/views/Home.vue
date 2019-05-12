<template>
  <div class="home">
    home
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeRouteEnter (to,from,next) {
    // this 获取不到  整个页面还没渲染
    console.log(from)
    next( vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave(to,from,next){
    // const leave = confirm('你确定要离开吗')
    // if(leave) next()
    // else next(false)
    next()
  }
}
</script>
