<template>
  <div class="home">
      {{$route.params.name}}    
  </div>
</template>
<script>
export default {
  
  beforeRouteUpdate(to,from,next){
    console.log(to) 
  }
}
</script>


