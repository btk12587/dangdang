<template>
    <div class="axios">
        <p>{{msg}}</p>

    </div>
</template>

<script>
var qs = require("qs");
    export default {
        data(){
            return{
                msg:[]
            }
        },
        created(){
            
           this.axios.post("hotel/hkind/query")
            .then(res=>{
                console.log(res.data);
                this.msg = res.data;
            })

            var user = {
                username:"admin",
                password:"123"
            }
            this.axios.post("hotel/login/find",qs.stringify(user))
            .then(res=>{
                console.log(res);
                if(res!=null){
                    console.log("用户名存在");
                } else {
                    console.log("用户不存在");
                }
            })
        }
    }
</script>