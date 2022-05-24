import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        shoppings: [{
                id: 1,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 2,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 3,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 4,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 5,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 6,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 7,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 8,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 9,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 10,
                url: require("../assets/img/a1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            }
        ],
        wntj: [{
                id: 1,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 2,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 3,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 4,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 5,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 6,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 7,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 8,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 9,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 10,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 11,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 12,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 13,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 14,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 15,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 16,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 17,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 18,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 19,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            },
            {
                id: 20,
                url: require("../assets/img/home/wntj1.jpg"),
                tip: "阿婆家薯片小吃零食...",
                afterprice: 14.9,
                beforeprice: 9.9,
                info: "阿婆家的食品旗舰店",
                count: 5.00
            }
        ],
        isflag: {
            isbanner: true,
            isnavbar: true,
            isbuycar: true,
            isaddBuycar: false
        },
        user: {},
        // name: "张三"
        //购物车
        buycars: []

    },
    mutations: {
        setBuycar(state, res) {
            state.isflag.isbuycar = res;
        },
        setaddBuycar(state, res) {
            state.isflag.isaddBuycar = res;
        },
        setBanner(state, res) {
            state.isflag.isbanner = res;
        },
        setNavbar(state, res) {
            state.isflag.isnavbar = res;
        },
        setUser(state, res) {
            state.user = res;
        },
        removeUser(state) {
            state.user = {}
        },

        addcount(state) {
            console.log(state);
        },

        //添加购物车
        setBuycars(state, res) {

            var flag = true;
            state.buycars.map((item, index) => {
                // state.buycars.forEach(item => {
                if (res.id == item.id) {

                    Vue.set(state.buycars[index], "addr", res.addr);
                    Vue.set(state.buycars[index], "num", item.num + res.num);

                    flag = false;

                }
            })
            if (flag) {
                state.buycars.push(res);
            }

        },
        //清除购物车
        clearBuycars(state) {
            state.buycars = [];
        },
        //重置
        clearstate(state, res) {
            state.buycars = res.buycars;
            state.isflag = res.isflag;
            state.shoppings = res.shoppings;
            state.user = res.user;

            Vue.delete(state, "obj");
            Vue.delete(state, "count");
            Vue.delete(state, "buycarsa");
        }

    },
    getters: {
        //对state中的值进行加工
        getbuycars(store) {
            var obj = store.buycars;
            // console.log(store.buycars);
            obj.forEach(res => {
                res.checked = false;
                res.url = "../" + res.url;
                res.total = Math.round(res.num * res.afterprice * 100) / 100;
            })

            return obj;
        }
    },
    actions: {
        //添加购物车
        setBuycars(context, res) {

            res.flag = true;
            context.state.buycars.forEach((item, getindex) => {
                if (item.id == res.id) {
                    res.getindex = getindex;
                    res.flag = false;
                    context.commit('addBuycars', res);
                }
            })
            if (res.flag) {
                context.commit('addBuycars', res);
            }
        },
    },
    modules: {}
})