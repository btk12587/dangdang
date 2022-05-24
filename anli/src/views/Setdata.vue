<template>
  <div class="setdata">
    <button @click="clearbuy">清空购物车</button>
    <button @click="setdata">数据重置</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      abc: [
        {
          id: 1,
          name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
          
        },
        {
          id: 2,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 3,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 4,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 5,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 6,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 7,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 8,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 9,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
        {
          id: 10,
           name:"牛奶",
          url: require("../assets/img/a1.jpg"),
          tip: "阿婆家薯片小吃零食...",
          afterprice: 14.9,
          beforeprice: 9.9,
          info: "阿婆家的食品旗舰店",
          count: 5.0,
        },
      ],
      isflag: {
        isbanner: true,
        isnavbar: true,
      },
      user: {},
      buycarsa: [],
    }
  },
  methods: {
    clearbuy() {
      this.$store.commit("clearBuycars");
    },
    setdata() {
      var obj = {
        isflag: this.isflag,
        user: this.user,
        buycars: this.buycarsa,
        shoppings: this.abc,
      };
      this.$store.commit("clearstate", obj);
    },
  },
};
</script>