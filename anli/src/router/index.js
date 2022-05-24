import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Elui from "../views/Utli/Elui.vue"
import Bootstrap from "../views/Utli/Bootstrap.vue"
import Ueditor from "../views/Utli/Ueditor.vue"
import Axi from "../views/Utli/Axi.vue"
import Echarts from "../views/Utli/Echarts.vue"
import Swiper from "../views/Utli/Swiper.vue"
import Loopview from "../views/Utli/Loopview.vue"
import Login from "../views/login/Login.vue"

//在全局守卫使用this.$store 等 先导入在使用
// import store from '@/store'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/tip',
        name: "Tip",
        component: () =>
            import ("../views/tip/Tip.vue")
    },
    {
        path: '/info/:id',
        name: 'Info',
        component: Info,
        beforeEnter: (to, from, next) => {
            // to:route: 即将要进入的目标路由对象
            // from：route:当前导航正要离开的路由
            // next：Function:一定要调用该方法来resolve这个钩子。执行效果依
            // console.log("我是给info 路由独享的守卫");
            // console.log(this.$store.state.flag);
            next();
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ("../views/order/Order.vue")
    },
    {
        path: '/addsuccessbuycar',
        name: 'Addsuccessbuycar',
        component: () =>
            import ("../views/buycar/AddSuccessBuycar.vue")
    },
    {
        path: '/buycar',
        name: 'Buycar',
        component: () =>
            import ("../views/buycar/Buycar.vue")
    },
    {
        path: '/setdata',
        name: 'Setdata',
        component: () =>
            import ("../views/Setdata.vue")
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        children: [{
                path: 'elui',
                component: Elui
            },
            {
                path: 'echarts',
                component: Echarts
            },
            {
                path: 'swiper',
                name: 'Swiper',
                component: Swiper
            },
            {
                path: 'ueditor',
                component: Ueditor
            },
            {
                path: 'axi',
                component: Axi
            },
            {
                path: 'loopview',
                component: Loopview
            },
            {
                path: 'bootstrap',
                component: Bootstrap,
                children: [{
                        path: 'ech',
                        component: Echarts,
                    },
                    {
                        path: 'ued',
                        component: Ueditor,
                    }
                ]
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    // to:route: 即将要进入的目标路由对象
    // from：route:当前导航正要离开的路由
    // next：Function:一定要调用该方法来resolve这个钩子。执行效果依赖
    // next方法的调用参数
    // console.log(to, from);

    //注意死循环问题
    // console.log("我是全局守卫!");
    // console.log(JSON.parse(localStorage.getItem("user")));
    // console.log(store.state.user.username);

    if (to.path != "/login") {
        if (sessionStorage.getItem("user")) {
            next();
        } else {
            //可以允许短暂的进入，做两秒之后跳走
            // next();
            if (to.path != "/") {
                // setTimeout(() => {
                alert("登录失败");
                next({ path: "/login" })
                    // }, 2000);
            } else {
                next();
            }
        }
    } else {
        next();
    }


})

export default router