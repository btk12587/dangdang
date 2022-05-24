<template>
  <div class="fz">
    <div class="box">
      <div class="fz-top clear">
        <h3 class="fl">服装</h3>
        <div class="nav fr">
          <ul class="clear" ref="uls">
            <li class="active">
              服装鞋包
              <p class="line1"></p>
              <p class="line2"></p>
              <p class="line3"></p>
              <p class="line4"></p>
            </li>
            <li>
              运动潮流
              <p class="line1"></p>
              <p class="line2"></p>
              <p class="line3"></p>
              <p class="line4"></p>
            </li>
            <li>
              女装男装内衣
              <p class="line1"></p>
              <p class="line2"></p>
              <p class="line3"></p>
              <p class="line4"></p>
            </li>
            <li>
              童装童鞋
              <p class="line1"></p>
              <p class="line2"></p>
              <p class="line3"></p>
              <p class="line4"></p>
            </li>
            <li>
              鞋靴箱包
              <p class="line1"></p>
              <p class="line2"></p>
              <p class="line3"></p>
              <p class="line4"></p>
            </li>
          </ul>
        </div>
      </div>
      <section class="content" ref="content">
        <div class="conA active clear">
          <div class="box-a">
            <img src="../../assets/img/home/fz1.jpg" alt="" />
            <div class="box-as clear">
              <a
                :href="item.ihref"
                v-for="(item, index) in aslink"
                :key="index"
                >{{ item.ival }}</a
              >
            </div>
          </div>
          <div class="box-b">
            <div class="block">
              <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
              <el-carousel height="340px" style="height: 340px; width: 100%">
                <el-carousel-item
                  v-for="(item, index) in boxAimgs"
                  :key="index"
                >
                  <img :src="item" alt="" />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="block-b">
              <a href=""><img src="../../assets/img/home/fz4.jpg" alt="" /></a>
              <a href=""><img src="../../assets/img/home/fz5.jpg" alt="" /></a>
            </div>
          </div>

          <div class="box-c">
            <ul>
              <li v-for="(item, index) in boxBimgs" :key="index">
                <a :href="item.ihref"><img :src="item.isrc" alt="" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="con-b">BBB</div>
        <div class="con-c">CCC</div>
        <div class="con-d">DDD</div>
        <div class="con-e">EEE</div>
      </section>

      <section class="bottom">
        <div class="block">
          <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
          <el-carousel height="60px"  arrow="always" style="height: 60px; width: 100%">
            <el-carousel-item v-for="(item,index) in logos" :key="index">
              <!-- <p>{{item}}</p> -->
              <ul>
                <li v-for="res in logos[index]" :key="res.id">
                  <a :href="res.ihref"><img :src="res.isrc" alt=""></a>
                </li>
              </ul>
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p: ' <p data-v-3630be0c class="line1"></p> <p data-v-3630be0c class="line2"></p> <p data-v-3630be0c class="line3"></p> <p data-v-3630be0c class="line4"></p>',
      aslink: [
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
        {
          ival: "童鞋",
          ihref: "#",
        },
        {
          ival: "婴儿服饰",
          ihref: "#",
        },
        {
          ival: "童装",
          ihref: "#",
        },
      ],
      boxAimgs: [
        require("../../assets/img/home/fz2.jpg"),
        require("../../assets/img/home/fz3.jpg"),
      ],
      boxBimgs: [
        {
          isrc: require("../../assets/img/home/fz6.jpg"),
          ihref: "#",
        },
        {
          isrc: require("../../assets/img/home/fz7.jpg"),
          ihref: "#",
        },
        {
          isrc: require("../../assets/img/home/fz8.jpg"),
          ihref: "#",
        },
        {
          isrc: require("../../assets/img/home/fz9.jpg"),
          ihref: "#",
        },
        {
          isrc: require("../../assets/img/home/fz10.jpg"),
          ihref: "#",
        },
        {
          isrc: require("../../assets/img/home/fz11.jpg"),
          ihref: "#",
        },
      ],
      logos: [
        
        [{id:1, ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:2,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:3,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg")},
      { id:4,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:5,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:6,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:7,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:8,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:9,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") },
      { id:10,ihref: "#", isrc: require("../../assets/img/home/logo1.jpg") }],

      [{id:11, ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      {id:12,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:13,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:14,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:15,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:16,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:17,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:18,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg")},
      { id:19,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") },
      { id:20,ihref: "#", isrc: require("../../assets/img/home/logo2.jpg") }]],
    };
  },
  mounted() {
    var uls = this.$refs.uls.children;
    var contents = this.$refs.content.children;
    for (var i = 0; i < uls.length; i++) {
      uls[i].index = i;
      uls[i].onmouseenter = function () {
        for (var j = 0; j < uls.length; j++) {
          uls[j].classList.remove("active");
          contents[j].classList.remove("active");
        }
        this.classList.add("active");
        contents[this.index].classList.add("active");
      };
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/home/Fz.css";
</style>