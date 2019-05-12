<template>
    <div>
        email: yw641954974@qq.com
        <button @click="handleClick">按我</button>
    </div>
</template>

<script>
export default {
  mounted () {
     console.log(this.$bus) 
  },
  methods: {
    handleClick(){
      this.$bus.$emit('on-click','Hello laoyu')
    }
  }
}
</script>
