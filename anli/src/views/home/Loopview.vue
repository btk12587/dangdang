<template>
  <div class="loopview" ref="loopview">
    <!-- 图片 -->
    <ul class="nav" ref="nav">
      <li v-for="item in banners" :key="item.id">
        <a :href="item.ihref"><img :src="item.isrc" alt="" /></a>
      </li>
    </ul>

    <!-- 左右按钮 -->
    <p class="leftbutton" ref="leftbutton">&lt;</p>
    <p class="rightbutton" ref="rightbutton">&gt;</p>

    <!-- 小圆点 -->
    <ul class="sps" ref="sps">
      <li v-for="(item, index) in banners" :key="item.id">{{ index + 1 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["banners"], //来接受父组间传过来的值
  data() {
    return {
      index: 0, //表示轮播图显示第几张图片
      timer: null, //用于取消定时器
    };
  },
  mounted() {
    let lis = this.$refs.nav.children;
    let sps =  this.$refs.sps.children;
    let that = this;


    //小球变色
    function spsColor(){
      //让选中的小球变成红色
        for(let j=0;j<sps.length;j++){
          sps[j].style.background = "#646464";
        }
        sps[that.index].style.background = "red";
    }
    //图片动起来
    function move() {
      for (let i = 0; i < lis.length; i++) {
        lis[i].style.opacity = 0;
      }
      lis[that.index].style.opacity = 1;
    }
    //初始化
    move();
    //实现自动播放
    that.timer = setInterval(() => {
      this.index++;
      if (this.index == lis.length) {
        this.index = 0;
      }
spsColor()
       
      move();
    }, 2000);
    this.$refs.rightbutton.onclick = function () {
      that.index++;
      if (that.index == lis.length) {
        that.index = 0;
      }
      move();
    };
    this.$refs.leftbutton.onclick = function () {
      that.index--;
      if (that.index == -1) {
        that.index = lis.length - 1;
      }
      move();
    };
    // 鼠标移入的时候
    this.$refs.loopview.onmouseenter = function () {
      //让左右按钮显示
      that.$refs.leftbutton.style.opacity = 1;
      that.$refs.rightbutton.style.opacity = 1;
      //将定时器终止
      clearInterval(that.timer);
    };
    // 鼠标移出的时候
    this.$refs.loopview.onmouseleave = function () {
      //  让左右按钮消失
      that.$refs.leftbutton.style.opacity = 0;
      that.$refs.rightbutton.style.opacity = 0;
      // 继续轮播
      that.timer = setInterval(() => {
        that.index++;
        if (that.index == lis.length) {
          that.index = 0;
        }

       spsColor();
        move();
      }, 2000);
    };

    //将sps放到最中间

    //offsetWidth:拿到元素的宽度
    // console.log(this.$refs.loopview.offsetWidth);

    //拿到样式的值
    var spsl = getComputedStyle(this.$refs.sps.firstElementChild, false)[
      "marginRight"
    ];
    //  将数字打开的字符串转成数值
    // console.log(parseInt(spsl));
    this.$refs.sps.style.left =
      (this.$refs.loopview.offsetWidth -
        this.$refs.sps.offsetWidth -
        parseInt(spsl)) /
        2 +
      "px";

    //拿到所有的小圆点加入鼠标移入事件
 
    for(let i=0;i<sps.length;i++){
      sps[i].getindex = i;
      sps[i].onmouseenter = function(){
        that.index = this.getindex;
        move();

       spsColor()
      }
    }
  },
};
</script>

<style scoped>
.loopview {
  width: 800px;
  height: 500px;
  margin: 20px auto;
  position: relative;
}
.loopview .nav img,
.loopview .nav {
  width: 800px;
  height: 500px;
}
.loopview .nav {
  position: relative;
}
.loopview .nav li {
  position: absolute;
  top: 0px;
  left: 0px;
  transition: 1s;
}
.loopview .leftbutton,
.loopview .rightbutton {
  opacity: 0;
  transition: 1s;
  position: absolute;
  height: 80px;
  width: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  line-height: 80px;
  font-size: 40px;
  z-index: 99;
}
.loopview .leftbutton {
  left: 15px;
  top: 210px;
}
.loopview .rightbutton {
  right: -15px;
  top: 210px;
}
.loopview .sps {
  display: flex;
  position: absolute;
  bottom: 30px;
  z-index: 99;
}
.loopview .sps li {
  border-radius: 50%;
  background: #646464;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color: white;
  margin-right: 8px;
  /* 将箭头变成小手 */
  cursor: pointer; 
}
.loopview .sps li:nth-child(1){
  background:red;
}
</style>