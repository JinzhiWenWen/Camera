<template>
    <div id="WeChat">
           <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 微信
             </div>
        </div>
        <div>
            <baidu-map class="map">
            </baidu-map>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return {

            }
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
 
        }
    }
</script>

<style scoped lang="scss">

.basic_head{
    position: relative;
    height: 80px;
    background: #eee;
    line-height: 80px;
    text-align: center;
    .arrow{
        position: absolute;
        left: 30px;
        font-size: 40px;
    }
    .head_cont{
        font-size: 38px;
    }
}
 .amap-demo {
      height: 300px;
    }
    .map {
  width: 100%;
  height: 300px;
}
</style>