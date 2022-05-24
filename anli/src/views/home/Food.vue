<template>
  <div class="food">
    <el-breadcrumb separator="/">
      <!-- 用于跳转 -->
      <el-breadcrumb-item
        ><span class="home">食品</span></el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item :to="{ path: '/about' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item
        ><a href="/login">优选食品</a></el-breadcrumb-item
      >
     
    </el-breadcrumb>

    <div class="con">
      <div class="con-a">
        <img :src="food[0].isrc" alt="" />
        <img :src="food[1].isrc" alt="" />
        <img :src="food[2].isrc" alt="" />
        <img :src="food[3].isrc" alt="" />
      </div>
      <div class="con-b">
        <img :src="food[4].isrc" alt="" />
      </div>
      <div class="con-c">
        <img :src="food[5].isrc" alt="" />
        <img :src="food[6].isrc" alt="" />
        <img :src="food[7].isrc" alt="" />
        <img :src="food[8].isrc" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: [
        {
          id: 1,
          ihref: "#",
          isrc: require("../../assets/img/home/sp1.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 2,
          ihref: "#",
          isrc: require("../../assets/img/home/sp2.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 3,
          ihref: "#",
          isrc: require("../../assets/img/home/sp3.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 4,
          ihref: "#",
          isrc: require("../../assets/img/home/sp4.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 5,
          ihref: "#",
          isrc: require("../../assets/img/home/sp5.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 6,
          ihref: "#",
          isrc: require("../../assets/img/home/sp6.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 7,
          ihref: "#",
          isrc: require("../../assets/img/home/sp7.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 8,
          ihref: "#",
          isrc: require("../../assets/img/home/sp8.jpg"),
          inf: "fsfsfdsf",
        },
        {
          id: 9,
          ihref: "#",
          isrc: require("../../assets/img/home/sp9.jpg"),
          inf: "fsfsfdsf",
        },
      ],
    };
  },
};
</script>

<style scoped>
.food {
  width: 1250px;
  margin: 40px auto;
}
.food span:hover,
.food a:hover {
  color: red;
  text-decoration: none;
}
.food a {
  font-size: 20px;
}
.food .home {
  font-size: 20px;
  color: #303133;
  font-weight: 700;
}
.food .con {
  display: flex;
  margin: 20px auto;
  border-top: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
}
.food .con img {
  border-right: 1px solid #c1c1c1;
  border-bottom: 1px solid #c1c1c1;
}
.food .con .con-a,
.food .con .con-b,
.food .con .con-c {
  flex: 1;
}
.food .con .con-a,
.food .con .con-c {
  display: flex;
  flex-wrap: wrap;
}
.food .con .con-a img,
.food .con .con-c img {
  flex: 1;
  width: 100%;
}
.food .con .con-b img {
  width: 100%;
}
</style>

