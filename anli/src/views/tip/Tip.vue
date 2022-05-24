<template>
  <div class="tip">我是公告组件</div>
</template>

<script>
export default {
  mounted() {
    // this.$store.commit("")
    // 挂载的时候让他隐藏掉
    this.$store.commit("setBanner", false);
    this.$store.commit("setNavbar", false);
    
  },
  beforeRouteLeave(to, from, next) {
    // 离开的时候让他显示出来
    console.log("我是tip组件内的beforeRouteLeave，我执行了！");
    this.$store.commit("setBanner", true);
    this.$store.commit("setNavbar", true);
    next();
  },
};
</script>