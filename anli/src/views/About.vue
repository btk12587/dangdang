<template>
  <div class="about">
    <h1>This is an about page</h1>
    
     <div id="nav">
       <router-link to="/about/elui">Elui</router-link> |
      <router-link to="/about/bootstrap">Bootstrap</router-link> |
      <router-link to="/about/ueditor">Ueditor</router-link> |
      <router-link to="/about/axi">Axios</router-link> |
      <router-link to="/about/echarts">Echarts</router-link> |
      <router-link to="/about/swiper">Swiper</router-link> |
      <router-link to="/about/loopview">Loopview</router-link> 

     </div>

     <router-view/>
  </div>
</template>


<script>
export default {
    data(){
      return{}
    },
    mounted(){
      // this.$store.commit("")
      // 挂载的时候让他隐藏掉
      this.$store.commit("setBanner",false);
      
    },
    beforeRouteLeave(to,from,next){
      this.$store.commit("setBanner",true);
      next();
    }

}
</script>
