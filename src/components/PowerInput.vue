<template>
  <div>
    <input type="text" @input="handleInput" :value="value">
  </div>
</template>
<script>
export default {
  name: 'p',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput(event){
      const value = event.target.value;
      this.$emit('input',value)
    }
  }
}
</script>

