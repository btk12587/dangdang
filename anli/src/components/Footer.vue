<template>
  <div class="footer">
    <ul class="cona">
      <li><a href="">公司简介</a></li>
      |
      <li><a href="">诚聘英才</a></li>
      |
      <li><a href="">网站联盟</a></li>
      |
      <li><a href="">当当招商</a></li>
      |
      <li><a href="">机构销售</a></li>
      |
      <li><a href="">手机当当</a></li>
      |
      <li><a href="">官方Blog</a></li>
      |
      <li><a href="">知识产权</a></li>
      |
      <li><a href="">热词搜索</a></li>
    </ul>

    <p>Copyright &copy; 当当网 2004-2021, All Rights Reserved</p>
    <ul class="conb">
      <li><a href="">京ICP备17043473号-1</a></li>
      |
      <li><a href="">出版物经营许可证 新出发京批字第直0673号</a></li>
      |
      <li><a href="">食品经营许可证:JY11101050363440</a></li>
    </ul>

    <ul class="conc">
      <li><a href="">京ICP备17043473号-1|</a></li>
      |
      <li>
        <a href=""
          ><i class="el-icon-bicycle"></i> 京公网安备
          11010502037644号京公网安备11010502037644号</a
        >
      </li>
      |
      <li><a href="">食品经营许可证:JY11101050363440</a></li>
      |
      <li><a href="">互联网药品信息服务资格证</a></li>
    </ul>
    <p>互联网违法和不良信息举报电话：4001066666-5 邮箱：service@cs.dangdang.com</p>
    <p>网络出版服务许可证（总）网出证（京）字第049号北京当当科文电子商务有限公司，公司地址：北京市朝阳区北三环东路8号静安中心21层</p>
  
   <section class="ff">
       <a href=""><img src="../assets/img/home/footer1.png" alt=""></a>
       <a href=""><img src="../assets/img/home/footer2.png" alt=""></a>
       <a href=""><img src="../assets/img/home/footer3.png" alt=""></a>
       <a href=""><img src="../assets/img/home/footer4.png" alt=""></a>

   </section>
  </div>
  
</template>

<style scoped>
.footer {
  font-size: 10px;
  color:#8c8c8c;
}
a{
  color:inherit;
}
.footer .cona,
.footer .conb,
.footer .conc {
  display: flex;
  width: 800px;
  margin: 10px auto;
}
.footer .cona {
  width: 800px;
  margin-bottom:40px;
}
.footer .conb {
  width: 750px;
}
.footer .conc {
  width: 1000px;
}
.footer .cona li,
.footer .conb li,
.footer .conc li {
  flex: 1;
}

.footer .conc li:nth-child(2){
    flex:2;
}

.footer .ff{
    display: flex;
    width:600px;
    margin:20px auto;
}
.footer .ff a{
    display: block;
    flex:1;
}
</style>