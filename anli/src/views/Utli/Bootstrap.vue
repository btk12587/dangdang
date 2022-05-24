<template>
    <div class="bootstrap">
        <!-- Standard button -->
        <button type="button" class="btn btn-default">（默认样式）Default</button>

        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <button type="button" class="btn btn-primary">（首选项）Primary</button>

        <!-- Indicates a successful or positive action -->
        <button type="button" class="btn btn-success">（成功）Success</button>

        <!-- Contextual button for informational alert messages -->
        <button type="button" class="btn btn-info">（一般信息）Info</button>

        <!-- Indicates caution should be taken with this action -->
        <button type="button" class="btn btn-warning">（警告）Warning</button>

        <!-- Indicates a dangerous or potentially negative action -->
        <button type="button" class="btn btn-danger">（危险）Danger</button>

        <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
        <button type="button" class="btn btn-link">（链接）Link</button>


        <hr>
        <vue-ueditor-wrap ></vue-ueditor-wrap>

        <Elui/>

        <router-link to="/about/bootstrap/ech">Swiper</router-link> | 
        <router-link to="/about/bootstrap/ued">ued</router-link>
      
        <router-view/>
    </div>
</template>

<script>
import Elui from "./Elui"
    export default {
    components:{
        Elui
    },
      data(){
        return{
            myConfig:{
                autoHeightEnabled:false,
                initialFrameHeight:240,
                initialFrameWidth:"100%",
                serverUrl:"http://localhost:8080/bookshoop/books/query",
                UEDITOR_HOME_URL:"/UEditor"
            } 
        }
      },
     
    }
</script>