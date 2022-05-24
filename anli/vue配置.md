1.vue中如何使用bootstrap 
    1.bootstrap是基于jquery的，在使用之前我们先安装一下jquery包
    npm install jquery -S

    2.由于vue-cli3和vue-cli2的目录结构不一样，在vue-cli2所有的配置项都是在vue.config.js 中，在vue-cli3中可能没有这个文件夹，所有需要我们手动添加，注意要和package.json文件保持同级。
    在新建的vue.config.js文件中添加一下代码，这样jQuery的配置就完成了。

        /*
        *Vue-CLI项目的核心配置文件
        */
        const webpack = require("webpack");

        module.exports = {
            configureWebpack: {
                plugins: [
                    new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery",
                    "window.jQuery": "jquery",
                    Popper: ["popper.js", "default"]
                    })
                ]
            }
        };

    3.接下来我们安装bootstrap依赖，这里的@3是安装bootstrap3.x版本，不喜欢这个版本的小伙伴也可以安装最新版。

    cnpm install bootstrap@3 -S

    4.在main.js中导入

    import "bootstrap"
    import "bootstrap/dist/css/bootstrap.css"

    就可以使用了


在vue中使用Element-ui
    Elemetnt UI，一套为开发者、设计设和产品经理准备的基于Vue2.0的桌面端组件库

    安装依赖
    npm i element-ui -S

    在main.js中引入
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);

使用axios 
    npm install --save axios vue-axios

    在main.js里面配置
        import axios from 'axios'
        import VueAxios from 'vue-axios'
        Vue.use(VueAxios, axios)

    修改端口号：node_modules -> @vue -> cli-serve -> lib -> options.js

    解决跨域问题：
        options.js文件里面：
            proxy: {
                '/api': {
                    target: 'http://localhost:8080',
                    changeOrigin: true,
                    pathRewrite: {
                        '/api': ''
                    }
                }
            },
        在main.js里面
            axios.defaults.baseURL = '/api'


使用富文本编辑器：【Ueditor】
   将下载好的Ueditor文件解压后放到public文件下的static文件中重命名为Editor
（自己建立一个static文件，直接放到public文件下会出错）

    导入ueditor 
    npm install vue-ueditor-wrap --save

    在mian.js中写入
    import VueUeditorWrap from 'vue-ueditor-wrap'
    Vue.component('vue-ueditor-wrap', VueUeditorWrap)


    在组件内使用
        <vue-ueditor-wrap/>


使用echarts:
    //引入依赖
    npm install echarts --save

    直接使用模板


使用swiper
    引入npm install swiper --save-dev

    在js里面引入
        import "swiper/swiper-bundle.min.css"
        import "swiper/swiper-bundle.min.js"


    在模板使用使用
        import Swiper from "swiper"

        然后使用即可
        








