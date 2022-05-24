<template>
  <div class="yyt">
    <el-breadcrumb separator="/">
      <!-- 用于跳转 -->
      <el-breadcrumb-item
        ><span class="home">孕婴童</span></el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item :to="{ path: '/about' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item><a href="/login">童书畅销榜</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">童书3-6岁</a></el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">童书7-10岁榜</a></el-breadcrumb-item>
    </el-breadcrumb>

    <div class="con">
      <div class="con-a">
        <img :src="yyt[0].isrc" alt="" />
        <img :src="yyt[1].isrc" alt="" />
      </div>
      <div class="con-b">
        <img :src="yyt[2].isrc" alt="" />
      </div>
      <div class="con-c">
        <img :src="yyt[3].isrc" alt="" />
        <img :src="yyt[4].isrc" alt="" />
        <img :src="yyt[5].isrc" alt="" />
        <img :src="yyt[6].isrc" alt="" />
        <img :src="yyt[7].isrc" alt="" />
        <img :src="yyt[8].isrc" alt="" />
      </div>
    </div>

     <ul class="footer">
      <li v-for="item in footers" :key="item.id">
        <a href=""><img :src="item.isrc" alt=""></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yyt: [
        {
          id: 1,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt1.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 2,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt2.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 3,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt3.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 4,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt4.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 5,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt5.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 6,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt6.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 7,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt7.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 8,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt8.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 9,
          ihref: "#",
          isrc: require("../../assets/img/home/yyt9.jpg"),
          inf: "fsfsfdsf",
        },
      ],
       footers:[
        {
          id:1,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:2,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:3,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:4,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:5,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:6,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:7,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:8,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:9,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        },
        {
          id:10,
          isrc:require("../../assets/img/home/rybhf1.jpg"),
          info:"dsfsdf"
        }
      ]
    };
  },
};
</script>

<style scoped>
.yyt {
  width: 1250px;
  margin: 40px auto;
}
.yyt span:hover,
.yyt a:hover {
  color: red;
  text-decoration: none;
}
.yyt a {
  font-size: 20px;
}
.yyt .home {
  font-size: 20px;
  color: #303133;
  font-weight: 700;
}

.yyt .con {
  display: flex;
  margin:20px auto;
  border-top: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
}
.yyt .con img {
  border-right: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
}
.yyt .con .con-c{
  display: flex;
  flex-wrap: wrap;
}

.yyt .con .con-a,
.yyt .con .con-c {
  display: flex;
  flex-wrap: wrap;
}
.yyt .con .con-a img,
.yyt .con .con-c img {
  flex: 1;
  width: 100%;
}
.yyt .con .con-b img {
  height:430px;
}

.yyt .footer{
  display: flex;
  background: #f7f7f7;
  position: relative;
  top:-20px;
  padding:20px 0px;
  border:1px solid #c1c1c1;
  border-top:1px solid transparent;

}
.yyt .footer li{
  flex:1;
  border-right:1px dashed #c1c1c1;
}
.yyt .footer img{
  width:80%;
}
</style>