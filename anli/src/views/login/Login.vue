<template>
  <div class="login">
    <div class="nav" ref="nav">
      <span class="active">密码登录</span> |
      <span>验证码登录</span>
    </div>
    <div class="content" ref="content">
      <div class="con-a active">
        用户名: <input type="text" v-model="username" /><br />
        密码：<input type="password" v-model="password" />
      </div>
      <div class="con-b">
        手机号: <input type="text" v-model="phone" /><br />
        验证码：<input type="password"  />
      </div>
    </div>

    <button @click="login">登录</button>
    <!-- <p>vuex中的值:{{$store.state.name}}</p> -->


    <Login/>
  </div>
</template>

<script>
import Login from "../../components/Footer.vue"
export default {
  components:{
    Login
  },
  data() {
    return {
      username: "",
      password: "",
      phone:""
    };
  },
  methods: {
    login() {
      let user = {
        username: this.username,
        password: this.password,
      };

      this.$store.commit("setUser", user);
      sessionStorage.setItem("user", JSON.stringify(user));

      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    // this.$store.commit("")
    // 挂载的时候让他隐藏掉
    this.$store.commit("setBanner", false);
    this.$store.commit("setNavbar", false);


    //添加单击事件
    var sps = this.$refs.nav.children;
    var cons = this.$refs.content.children;
    for(var i=0;i<sps.length;i++){
      sps[i].index = i;
      sps[i].onclick = function(){
        // console.log(this.index);
        for(var j=0;j<sps.length;j++){
          sps[j].classList.remove("active");
          cons[j].classList.remove("active")

        }
        sps[this.index].classList.add("active");
        cons[this.index].classList.add("active");
      }
    }
  },
  beforeRouteLeave(to, from, next) {
    // 离开的时候让他显示出来
    this.$store.commit("setBanner", true);
    this.$store.commit("setNavbar", true);
    next();
  },
};
</script>

<style scoped>
.nav span{
  color:#717171;
}
  .nav .active{
    color:#333333;
  }
  .content >div{
    display: none;
  }
  .content >.active{
    display: block;
  }
</style>