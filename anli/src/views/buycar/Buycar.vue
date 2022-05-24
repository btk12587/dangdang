<template>
  <div class="buycar">
    <div class="box">
      <div class="box-top">
        <section>
          全选：<input type="checkbox" @click="Allchose" /> 反选：<input
            type="checkbox"
            @click="reschose"
          />
        </section>
        <p>商品信息</p>
        <p>单价(元)</p>
        <p>数量</p>
        <p>金额(元)</p>
        <p>操作</p>
      </div>
      <ul class="box-bottom">
        <li v-for="item in getbuycars" :key="item.id">
          <input type="checkbox" v-model="item.checked" />
          <section class="info clear">
            <img
              class="fl"
              :src="item.url"
              style="width: 100px; height: 100px; margin-right: 20px"
              alt=""
            />
            <p class="fl">{{ item.name }}</p>
          </section>

          <p>{{ item.afterprice }}</p>
          <p>
            <button @click="del(item.id)">del</button><span>{{ item.num }}</span
            ><button @click="add(item.id)">add</button>
          </p>
          <p>{{ item.total }}</p>
          <section class="util">
            <button @click="remove(item.id)">删除</button>
          </section>
        </li>

        <p class="clear">
          <span class="fl">店铺合计</span>
          <span class="fr">总结：{{ total|format }}</span>
        </p>
      </ul>
    </div>

    <div class="total clear" id="show" ref="show">
      <label for="" class="fl">
        全选：<input type="checkbox" @click="Allchose"
      /></label>
      <p class="fl">已选中{{ count }}</p>
      <button class="fr balance">结算</button>
      <p class="fr">总计:{{ total|format }}</p>
    </div>
  </div>
</template>

<script>
// window.onscroll = function () {
//   var t = document.documentElement.scrollTop || document.body.scrollTop;
//   if (t > 200) {
//     document.querySelector("#show").classList.remove("show");
//   } else {
//     document.querySelector("#show").classList.add("show");
//   }
// };
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      total: 0,
      count: 0,
    };
  },
  methods: {
    del(data) {
      this.getbuycars.forEach((res) => {
        //找到与data一致的商品
        if (res.id == data) {
          res.num--;
          if (res.num < 1) {
            res.num = 1;
          }
        }
      });
    },
    add(data) {
      this.getbuycars.forEach((res) => {
        //找到与data一致的商品
        if (res.id == data) {
          res.num++;
        }
      });
    },
    remove(data) {
      this.getbuycars.forEach((res, index) => {
        //找到与data一致的商品
        if (res.id == data) {
          this.getbuycars.splice(index, 1);
        }
      });
    },
    Allchose() {
      //全选
      this.getbuycars.forEach((res) => {
        res.checked = true;
      });
    },
    reschose() {
      //反选
      this.getbuycars.forEach(function (res) {
        res.checked = !res.checked;
      });
    },
  },
  computed: {
    ...mapGetters(["getbuycars"]),
  },
  watch: {
    getbuycars: {
      handler() {
        // this问题

        // 重置一次
        this.total = 0;

        this.count = 0;
        this.getbuycars.forEach((res) => {
          if (res.checked) {
            this.total += res.total;
            this.count++;
          }
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.$store.commit("setBanner", false);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setBanner", true);
    next();
  },
  filters: {
    format: function (res) {
      //第一个参数表示要格式处理的文本，第二个，第三个才是参数
      return Math.round(res*100)/100;
    },
  },

  
};
</script>

<style scoped>
.buycar {
  height: 2000px;
}
.buycar .box {
  width: 1000px;
  margin: 20px auto;
}
.buycar .box .box-top,
.buycar .box .box-bottom > li {
  display: flex;
}
.buycar .box .box-bottom {
  background: #fafafa;
  border: 1px solid #c1c1c1;
}
.buycar .box .box-bottom > li {
  margin-bottom: 20px;
  border-bottom: 1px solid #c1c1c1;
}

.buycar .box .box-top > p,
.buycar .box .box-top > section,
.buycar .box .box-bottom li > img,
.buycar .box .box-bottom li > section,
.buycar .box .box-bottom li > p,
.buycar .box .box-bottom li > input {
  flex: 1;
}
.buycar .box .box-top p:nth-child(2),
.buycar .box .box-bottom li > section:nth-of-type(1) {
  flex: 3;
}
.total {
  width: 800px;
  margin: 20px auto;
}
.balance {
  padding: 10px 20px;
  font-size: 30px;
  background: red;
}
.show {
  position: fixed;
  bottom: 30px;
  left: 20%;
}
</style>