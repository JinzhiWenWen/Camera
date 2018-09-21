<template>
    <div id="Recharge">
         <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    充值
                </div>
        </div>
        <div class="Recharge_content">
            <span>钱包地址</span>
            <b>xxxxxx</b>
            <i></i>
        </div>
        <p>
            禁止向SLK地址充值除SLK之外的资产，任何充值SLK地址的非SLK资产将不可找回
        </p>
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
.Recharge_content{
    height: 80px;
    line-height: 80px;
    padding: 0px 15px;
    font-size: 26px;
    border-bottom: 1px solid #ccc;
}
p{
    font-size: 24px;
    color: #ccc;
    padding: 0px 15px;
    line-height: 40px;
    margin-top: 20px;
}
</style>