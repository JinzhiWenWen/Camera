<template>
    <div id="Micro_blog">
        <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 微博
             </div>
        </div>
        <div>
            <a class="jiathis_button_qzone">123</a>
            <a class="jiathis_button_tsina">213</a>
            <a class="jiathis_button_tqq">123</a>
            <a class="jiathis_button_weixin">123</a>
            <a class="jiathis_button_renren">213</a>
            <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank">123</a>
            <a class="jiathis_counter_style">123</a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
                this.init()
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
            init: function () {
                let url = 'https://cdnjs.cloudflare.com/ajax/libs/social-share.js/1.0.16/js/social-share.min.js'
                let script = document.createElement('script')
                script.setAttribute('src', url)
                document.getElementsByTagName('head')[0].appendChild(script)
            }
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
</style>