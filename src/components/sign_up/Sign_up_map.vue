<template>
    <div id="sign_up_map">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    地图签到
                </div>
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
            Last_step(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" scoped>
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