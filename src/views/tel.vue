<template>
    <div>
        tel: 15014025294
        {{message}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      message:''
    }
  },
  mounted () {
    this.$bus.$on('on-click' , message => {
      this.message = message
    })
  }
}
</script>

