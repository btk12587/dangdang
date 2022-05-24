<template>
  <div id="app">
    <div v-if="$store.state.isflag.isbanner" class="mainbanner">
      <img src="./assets/img/banner.jpg" alt="" />
    </div>
    <div id="nav" class="navbar" v-if="$store.state.isflag.isnavbar">
      <p class="addr"><span>送至:{{addr}}</span>
        <ul class="clear">
            <li class="fl" v-for="(item,index) in addrs" :key="index">
                <span  @click="setaddr(item)">{{item}}</span>
            </li>
        </ul>


      </p>
      <router-link to="/">Home</router-link> |
      <p class="user" v-if="JSON.stringify($store.state.user) != '{}'">
        <span>Hi,{{ $store.state.user.username }}</span
        >欢迎会当当
      </p>
      <router-link v-else to="/login">请登录</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/buycar">购物车</router-link>
      |
      <p><router-link to="/order">我的订单</router-link></p>
      |
      <p>我的云书房</p>
      |
      <p>
        <el-dropdown>
          <span class="el-dropdown-link">
            我的当当<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/setdata">重置数据</router-link></el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
      |
      <p>
        <el-dropdown>
          <span class="el-dropdown-link">
            当当拼团<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>当当拼团</el-dropdown-item>
            
          </el-dropdown-menu>
        </el-dropdown>
      </p>
      | <router-link to="/tip">小说投稿</router-link> |
      <p>企业采购</p>
      |
      <p>客户服务</p>
      |
      <p @click="out">退出登录</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data(){
    return{
      addr:"北京",
      addrs:['北京','上海','深圳',"秦皇岛","沧州",'北京','上海','深圳',"秦皇岛","沧州"
      ,'北京','上海','深圳',"秦皇岛","沧州",'北京','上海','深圳',"秦皇岛","沧州"
      ,'北京','上海','深圳',"秦皇岛","沧州",'北京','上海','深圳',"秦皇岛","沧州",]
      
    }
  },
  methods: {
    out() {
      this.$store.commit("removeUser");
      sessionStorage.removeItem("user");
    },
     setaddr(res){
      this.addr =res;
    }
  },
  created() {
    //解决vuex在页面刷新后数据丢失问题

    //因为js代码是运行在内存中的，代码运行时所有的变量，函数也都是保存在
    //内存中的。当我们在刷新页面的时候，以前申请的内存被释放，重新加载
    //脚本代码，变量重新赋值，如果我们想保证这些数据不丢失，我们必须将这些
    //数据保存在外部，例如：localStorage、SessionStorage等，做数据持久化处理

    //在页面加载时读取sessionStorage里的状态信息
    // console.log('');
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>

<style>
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
input,
select{
  border:none;
  outline: none;
}
a{
  color:inherit;
  text-decoration: none;
}
ul{
  list-style: none;
}

.clear:after{
  content:"";
  display:block;  
  clear:both;
}
.fl{
  float:left;
}
.fr{
  float:right
}
img{
  vertical-align: top;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar {
  display: flex;
}

.mainbanner {
  width: 90%;
  margin: 0px auto;
  height: 200px;
}
.mainbanner img {
  width: 100%;
  vertical-align: top;
  height: 200px;
}
.navbar > p,
.navbar > a {
  flex: 2;
  text-align: center;
}
.navbar > p:first-child {
  flex: 4;
}
/* .user {
  flex: 2 !important;
} */
.addr{
  position: relative;
}
.addr li{
  margin:10px 5px;
}
.addr ul{
  display: none;
  position: absolute;
  width:230px;
  border:1px solid #c1c1c1;
  background:white;
  z-index: 99;
  left:50px;
}
.addr:hover ul{
  display: block;
}

</style>
