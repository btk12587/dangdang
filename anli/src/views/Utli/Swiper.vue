<template>
  <div class="aa">
    <!-- <div class="swiper-container" id="swiperB"> -->
    <div class="swiper-container" id="swiperB">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/img/banner.jpg" alt="" />
          <img src="../../assets/img/banner.jpg" alt="" />
          <img src="../../assets/img/banner.jpg" alt="" />
          <img src="../../assets/img/banner.jpg" alt="" />
        </div>
        <div class="swiper-slide active">
          <img src="../../assets/img/banner2.jpg" alt="" />
          <img src="../../assets/img/banner2.jpg" alt="" />
          <img src="../../assets/img/banner2.jpg" alt="" />
          <img src="../../assets/img/banner2.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../../assets/img/banner3.jpg" alt="" />
          <img src="../../assets/img/banner3.jpg" alt="" />
          <img src="../../assets/img/banner3.jpg" alt="" />
          <img src="../../assets/img/banner3.jpg" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
import "../../assets/js/swiper-bundle.min.js"
import Swiper from "swiper";

export default {
  data() {
    return {};
  },
  mounted() {
    new Swiper("#swiperB", {
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true, // 循环模式选项,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  },
  beforeRouteEnter(to,from,next){
      console.log("我是组件内的路由守卫！");
      next();
      setTimeout(() => {
          next({path:"/info/2"})
      }, 3000);
  }
};
</script>

<style scoped>
/* @import"../../assets/css/swiper-bundle.min.css"; */
.swiper {
  width: 600px;
  height: 300px;
}
.swiper-container {
  width: 100%;
  height: 300px;
}

.swiper-pagination {
  color: white;
}

.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  background: red;
  color: white;
  line-height: 30px;
  text-align: center;
}
.swiper-slide {
  display: flex;
}
</style>