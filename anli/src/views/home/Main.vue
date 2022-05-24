<template>
  <div class="main">
    <section class="search">
      <img src="../../assets/img/home/hd.gif" alt="" class="con-a" />
      <div class="con-b">
        <div class="box">
          <input type="text" placeholder="南明史" />
          <select>
            <option value="全部分类">全部分类</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
            <option value="上海">上海</option>
          </select>
          <i class="el-icon-search"></i>
        </div>
        <div class="clear">
          <ul class="fl">
            <li>热搜:</li>
            <li><a href="">疫情绘本</a></li>
            <li><a href="">东野圭吾</a></li>
            <li><a href="">蒙牛牛奶</a></li>
            <li><a href="">摩比爱数学</a></li>
            <li><a href="">茵曼</a></li>
            <li><a href="">手续拍卖师</a></li>
          </ul>
          <a href="" class="fr" style="line-height: 40px; color: #c1c1c1"
            >高级搜索</a
          >
        </div>
      </div>
      <div class="con-c">
        <p @click="gobuycar">购物车&nbsp;&nbsp;{{getbuycars.length}}&nbsp;&nbsp;</p>
        <p>我的订单</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getbuycars"]),
  },
  methods:{
    gobuycar(){
      this.$router.push({path:"/buycar"})
    }
  }
};
</script>

<style scoped>
.main {
  width: 1250px;
  margin: 20px auto;
}
.main .search,
.main .search .con-b ul {
  display: flex;
}
.main .search .con-a{
  margin:-20px 0px 0px 40px;
}
.main .search .con-b .box {
  border: 2px solid red;
  display: flex;
  line-height: 40px;
  width: 580px;
}
.main .search .con-b .box input {
  flex: 8;
  padding-left: 10px;
  display: block;
}
.main .search .con-b .box select {
  flex: 2;
  background: #c1c1c1;
}
.main .search .con-b .box i {
  flex: 1;
  font-size: 26px;
  margin-top: 6px;
}
.main .search .con-b ul {
  line-height: 40px;
  color: #c1c1c1;
}
.main .search .con-b ul li a {
  margin-right: 10px;
  color: #c1c1c1;
}
.main .search .con-c {
  border: 1px solid #c1c1c1;
  line-height: 40px;
  height: 40px;
  display: flex;
  margin-left:30px;
}
.main .search .con-c p {
  width: 80px;
  height: 40px;
}
.main .search .con-c p:nth-child(1) {
  border-right: 1px solid #c1c1c1;
  background-color: red;
  width: 100px;
  color: white;
  text-align: right;
  background-image: url("../../assets/img/home/cart.png");
  background-position:6px 0px;
  background-repeat: no-repeat;
}
.main .search .con-c p:hover{
  color:red;
}
.main .search .con-c p:nth-child(1):hover{
  background-color: #c1c1c1;
  background-position:6px -40px;
 
}
</style>