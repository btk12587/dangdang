<template>
  <div class="home">
    <Main />

    <Loopview :banners="banners"/>

    <ul>
      <li v-for="item in shoppings" :key="item.id" to="/info/3">
        <img :src="item.url" alt="" @click="go(item.id)" />
        <p><span style="color: red">天猫</span>{{ item.tip }}</p>
        <p>
          <span>{{ item.beforeprice }}</span> <span>{{ item.afterprice }}</span>
        </p>
        <p>{{ item.info }}</p>
        <p>月销售{{ item.count }}</p>
      </li>
    </ul>

    <button @click="getstate">年后</button>

    <Fz />
    <Rybh />
    <Yyt />
    <Food />

    <div class="wntj"></div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Fz from "./home/Fz.vue";
import Footer from "../components/Footer.vue";
import Yyt from "./home/Yyt.vue";
import Rybh from "./home/Rybh.vue";
import Food from "./home/Food.vue";
import Main from "./home/Main.vue";
import Loopview from "./home/Loopview.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    Fz,
    Footer,
    Yyt,
    Rybh,
    Food,
    Main,
    Loopview,
  },
  data() {
    return {
      datas: [
        {
          id: 1,
          url: require("../assets/img/a1.jpg"), //保证图片的静态加载，解决使用v-for图片的不现实的问题
        },
        {
          id: 2,
          url: require("../assets/img/a1.jpg"),
        },
      ],
      banners:[
        {
          id:1,
          ihref:"#",
          isrc:require("../assets/img/home/l01.jpg"),

        },
        {
          id:2,
          ihref:"#",
          isrc:require("../assets/img/home/l02.jpg"),
          
        },
        {
          id:3,
          ihref:"#",
          isrc:require("../assets/img/home/l03.jpg"),
          
        },
        {
          id:4,
          ihref:"#",
          isrc:require("../assets/img/home/l04.jpg"),
          
        },
        {
          id:5,
          ihref:"#",
          isrc:require("../assets/img/home/l05.jpg"),
          
        },
        {
          id:6,
          ihref:"#",
          isrc:require("../assets/img/home/l06.jpg"),
          
        }
      ]
    };
  },
  computed: {
    ...mapState({
      shoppings: (state) => state.shoppings,
    }),
  },
  methods: {
    go(res) {
      // console.log(res);
      // console.log(this.shoppings);
      // var obj = {};
      // this.shoppings.forEach(obj2=>{
      //   if( obj2.id==res){
      //     obj = obj2;
      //   }
      // })
      //es6语法模板字符串
      // this.$router.push({path:`/info/${res}`})
      this.$router.push({ name: "Info", params: { id: res } });
    },
    getstate() {
      this.$store.commit("setBanner", true);
      this.$store.commit("setNavbar", true);
    },
    updateName() {
      this.$store.state.name = "李四";
    },
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log("我是home组件内的独享守卫！");

  //   // 注意在这不能获取组件实例中的this
  //   // this.$store.commit("setFlag", true);
  //   next();
  // },
};
</script>

<style scoped>
ul {
  list-style: none;
  /* flex布局 将父元素变成弹性盒子 */
  display: flex;
  /* 换行 */
  flex-wrap: wrap;
  width: 1250px;
  margin: 0 auto;
}

li {
  width: 240px;
  /* 提前给每个li设置1px的透明色 */
  border: 1px solid transparent;
  margin-right: 10px;
}

li img {
  width: 180px;
}

li:hover {
  border: 1px solid red;
}
</style>
