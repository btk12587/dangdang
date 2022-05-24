<template>
  <div class="rybh">
    <el-breadcrumb separator="/">
      <!-- 用于跳转 -->
      <el-breadcrumb-item
        ><span class="home">日用百货</span></el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item :to="{ path: '/about' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item
        ><a href="/login">滴露</a>&nbsp;旗舰店</el-breadcrumb-item
      >
      <el-breadcrumb-item
        ><a href="/">水星家纺</a>&nbsp;旗舰店</el-breadcrumb-item
      >
      <el-breadcrumb-item><a href="/">戴森</a>&nbsp;旗舰店</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">碧然德</a>&nbsp;旗舰店</el-breadcrumb-item
      >
      <el-breadcrumb-item><a href="/">蕉下</a>&nbsp;旗舰店</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="con">
      <div class="con-a">
        <img :src="rybh[0].isrc" alt="" />
        <img :src="rybh[1].isrc" alt="" />
        <img :src="rybh[2].isrc" alt="" />
        <img :src="rybh[3].isrc" alt="" />
      </div>
      <div class="con-b">
        <img :src="rybh[4].isrc" alt="" />
      </div>
      <div class="con-c">
        <img :src="rybh[5].isrc" alt="" />
        <img :src="rybh[6].isrc" alt="" />
        <img :src="rybh[7].isrc" alt="" />
        <img :src="rybh[8].isrc" alt="" />
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
      rybh: [
        {
          id: 1,
          ihref: "#",
          isrc: require("../../assets/img/home/ry1.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 2,
          ihref: "#",
          isrc: require("../../assets/img/home/ry2.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 3,
          ihref: "#",
          isrc: require("../../assets/img/home/ry3.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 4,
          ihref: "#",
          isrc: require("../../assets/img/home/ry4.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 5,
          ihref: "#",
          isrc: require("../../assets/img/home/ry5.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 6,
          ihref: "#",
          isrc: require("../../assets/img/home/ry6.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 7,
          ihref: "#",
          isrc: require("../../assets/img/home/ry7.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 8,
          ihref: "#",
          isrc: require("../../assets/img/home/ry8.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 9,
          ihref: "#",
          isrc: require("../../assets/img/home/ry9.jpg"),
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
.rybh {
  width: 1250px;
  margin: 40px auto;
}
.rybh span:hover,
.rybh a:hover {
  color: red;
  text-decoration: none;
}
.rybh a {
  font-size: 20px;
}
.rybh .home {
  font-size: 20px;
  color: #303133;
  font-weight: 700;
}
.rybh .con {
  display: flex;
  margin: 20px auto;
  border-top: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
}
.rybh .con img {
  border-right: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
}
.rybh .con .con-a,
.rybh .con .con-b,
.rybh .con .con-c {
  flex: 1;
}
.rybh .con .con-a,
.rybh .con .con-c {
  display: flex;
  flex-wrap: wrap;
}
.rybh .con .con-a img,
.rybh .con .con-c img {
  flex: 1;
  width: 100%;
}
.rybh .con .con-b img {
  width: 100%;
}
.rybh .footer{
  display: flex;
  background: #f7f7f7;
  position: relative;
  top:-20px;
  padding:20px 0px;
  border:1px solid #c1c1c1;
  border-top:1px solid transparent;

}
.rybh .footer li{
  flex:1;
  border-right:1px dashed #c1c1c1;
}
.rybh .footer img{
  width:80%;
}
</style>

