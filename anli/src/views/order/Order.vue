<template>
  <div class="order">
    <!-- <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark"></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
      </el-main>
    </el-container> -->

    <el-container>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
    </el-container>

    <hr />

    <el-row :gutter="10">
      <el-col :xs="12" :sm="6"><div class="grid-content">李白</div></el-col>
      <el-col :xs="12" :sm="6"><div class="grid-content">李白</div></el-col>
      <el-col :xs="12" :sm="6"><div class="grid-content">李白</div></el-col>
      <el-col :xs="12" :sm="6"><div class="grid-content">李白</div></el-col>
    </el-row>

    <el-container>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-container>

    <el-container>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-container>

    <el-container>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>

      <el-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px"
      >
        点我打开
      </el-button>

      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose2"
      >
        <h1>hello world!</h1>
        <h1>hello world!</h1>
        <h1>hello world!</h1>
        <h1>hello world!</h1>
        <h1>hello world!</h1>
        <h1>hello world!</h1>

        <ul>
          <li><a href="">哈哈</a></li>
          <li><a href="">哈哈</a></li>
          <li><a href="">哈哈</a></li>
          <li><a href="">哈哈</a></li>
          <li><a href="">哈哈</a></li>
          <li><a href="">哈哈</a></li>
        </ul>
      </el-drawer>
    </el-container>

    <el-container>
      <el-carousel :interval="2000" type="card" :autoplay="true" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2", //一级目录
          children: [
            //二级目录
            {
              label: "二级 2-1",
              children: [
                //三级目录
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-3",
              children: [
                {
                  label: "三级 2-3-1",
                },
              ],
            },
            {
              label: "二级 2-4",
              children: [
                {
                  label: "三级 2-4-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      drawer: false,
      direction: "rtl",
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data); //查看当前层级
    },
    handleSelect(key, keyPath) {
      //key表示当前活动选项，keypath 返回一个路径数组
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose2(done) {
      // this.$confirm('确认关闭？')
      //   .then(()=> {
      //     done();
      //   })
      //   .catch(()=> {});
      done();
    },
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>