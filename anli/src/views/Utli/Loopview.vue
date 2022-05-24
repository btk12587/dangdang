<template>
  <div class="loopviews">
    <!-- <img src="../../assets/img/l01.jpg" alt=""> -->
    <div class="loopview" ref="loopview">
      <ul clear="clear" ref="uls">
        <li v-for="(item, index) in datas" :key="index" class="fl">
          <a href="#"><img :src="item.isrc" alt="" /></a>
        </li>
      </ul>

      <!-- 设置左右的<> -->
      <div class="leftbutton" ref="leftbutton">&lt;</div>
      <div class="rightbutton" ref="rightbutton">&gt;</div>

      <!-- 小圆点 -->
      <div class="loopbar clear" ref="loopbar">
        <span v-for="(item, index) in datas" :key="index">{{ index + 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { ihref: "#", isrc: require("../../assets/img/l01.jpg") },
        { ihref: "#", isrc: require("../../assets/img/l02.jpg") },
        { ihref: "#", isrc: require("../../assets/img/l03.jpg") },
        { ihref: "#", isrc: require("../../assets/img/l04.jpg") },
        { ihref: "#", isrc: require("../../assets/img/l05.jpg") },
        { ihref: "#", isrc: require("../../assets/img/l06.jpg") },
      ],
      abs:""
    };
  },
  mounted() {
    //index决定显示哪张图片，默认显示第一章
    var index = 0;
    var that = this;

    //解决留白问题，将第一章图片补充到最后
    var newnode = this.$refs.uls.firstElementChild.cloneNode(true);
    this.$refs.uls.appendChild(newnode);
    //动态设置ul的宽度
    this.$refs.uls.style.width =
      this.$refs.uls.offsetWidth * (this.datas.length + 1) + "px";

    // 设置左右按钮在中间的距离
    this.$refs.leftbutton.style.top =
      (this.$refs.uls.offsetHeight - this.$refs.leftbutton.offsetHeight) / 2 +
      "px";
    this.$refs.rightbutton.style.top =
      (this.$refs.uls.offsetHeight - this.$refs.rightbutton.offsetHeight) / 2 +
      "px";

    //将loopbar放在中间
    var spw = getComputedStyle(this.$refs.loopbar.firstElementChild, false)[
      "marginLeft"
    ];
    this.$refs.loopbar.style.left =
      (this.$refs.loopview.offsetWidth -
        this.$refs.loopbar.offsetWidth -
        parseInt(spw)) /
        2 +
      "px";

    var sps = this.$refs.loopbar.children;
    // console.log(sps);

    //设置loopbar默认样式，哪个loopbar变红
    for (var x = 0; x < this.datas.length; x++) {
      sps[x].style.background = "black";
    }
    sps[index].style.background = "red";

    function start() {
      try {
        that.$refs.uls.style.left =
          -index * that.$refs.loopview.offsetWidth + "px";
        for (var x = 0; x < that.datas.length; x++) {
          sps[x].style.background = "black";
        }
        sps[index].style.background = "red";
      } catch (error) {
        that.abs = error;
      }
    }

    var timer = window.setInterval(() => {
      index++;
      if (index == this.datas.length) {
        index = 0;
      }
      start();
    }, 2000);

    this.$refs.loopview.onmouseenter = function () {
      // leftbutton.style.display = "block";
      // rightbutton.style.display = "block";
      window.clearInterval(timer);
    };
    this.$refs.loopview.onmouseleave = function () {
      timer = window.setInterval(() => {
        index++;
        if (index == that.datas.length) {
          index = 0;
        }
        start();
      }, 2000);
    };

    this.$refs.rightbutton.onclick = function () {
      index++;
      if (index == that.datas.length) {
        index = 0;
      }
      //点击的时候让图片动起来
      start();
    };

    this.$refs.leftbutton.onclick = function () {
      index--;
      if (index == -1) {
        index = that.datas.length - 1;
      }
      //点击的时候让图片动起来
      start();
    };

    //点击小圆点实现切换
    for (var i = 0; i < sps.length; i++) {
      sps[i].indexs = i;
      sps[i].onclick = function () {
        index = this.indexs;
        start();
      };
    }
  },
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
img {
  vertical-align: top;
}
.loopview {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.loopview img {
  width: 500px;
  height: 300px;
}
.loopview ul {
  position: absolute;
  /* width: 3500px; */
  height: 300px;
  transition: 1s;
  left: 0px;
  top: 0px;
}
.loopview .loopbar {
  position: absolute;
  bottom: 20px;
  z-index: 99;
}
.loopview .loopbar span {
  float: left;
  margin-left: 3px;
  width: 16px;
  line-height: 16px;
  border-radius: 8px;
  background: black;
  text-align: center;
  font-size: 12px;
  color: white;
}
.loopview .leftbutton {
  position: absolute;
  line-height: 80px;
  left: 0px;
  font-size: 30px;
  color: white;
  width: 80px;
  z-index: 99;
  border-radius: 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  /* display:none; */
}
.loopview .rightbutton {
  position: absolute;
  line-height: 80px;
  right: 0px;
  font-size: 30px;
  color: white;
  width: 80px;
  z-index: 99;
  border-radius: 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  /* display:none; */
}
.loopview .loopbar span {
  cursor: help; /* 设置鼠标停留在上边的时候的样式 */
}
</style>