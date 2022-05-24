<template>
    <div class="ueditor">
        <p>我是富文本编辑器</p>

        <vue-ueditor-wrap class="ueditor" v-model="msg"/>

        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:""
            }
        },
        computed:{
            message:function(){
                console.log(this.msg);
                return this.msg;
            }
        }
    }
</script>

<style scoped>
    .ueditor{
        width:800px;
        margin:40px auto;
        /* height:500px; */
    }
    /* .ueditor .view{
        height:800px;
    } */


</style>