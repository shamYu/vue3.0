<template>
  <div>
    PowerShow: {{content}}
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

