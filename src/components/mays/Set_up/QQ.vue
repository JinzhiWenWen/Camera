<template>
    <div id="QQ">
           <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 QQ
             </div>
             <div class="next_step_footer">
             	<!-- <button @click="shareSina">登陆</button> -->
                 <share :config="config"></share>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                config:{
                    url                 : '', // 网址，默认使用 window.location.href
                    source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
                    title               : '', // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
                    description         : '', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
                    image               : '', // 图片, 默认取网页中第一个img标签
                    sites               : ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
                    disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
                    wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
                    wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'

                },
            }
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
            shareSina() {
                        //分享到新浪微博
                    var sharesinastring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=' + this.p.title+ '&url=' + this.p.url + '&site="满艺网"';
                    window.location.href = sharesinastring;
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
.next_step_footer{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 80%;
        height: 100px;
        border: none;
        outline: none;
        border: 1px solid #ccc;/*no*/
        border-radius: 15px;
    }
}
</style>