<template>
    <div id="Personal_profile">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人简介
                </div>
                <div class="preservation" @click="preservation_fn">
                    保存
                </div>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" class="text" v-model="Personal_inf_x.intro"></textarea>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
         data(){
            return {
            }
        },
        created(){
         
        },
        computed:{
             ...mapState(['Personal_inf_x']),
        },
        methods:{
            ...mapActions(['Personal_profile_fn_x']),
            Last_step(){
                 this.$router.go(-1)
            },
            preservation_fn(){
                this.Personal_profile_fn_x(this.Personal_inf_x.intro)
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
    .preservation{
        position: absolute;
        line-height: 80px;
        right: 15px;
        top: 0px;
        font-size: 28px;
    }
}
.text{
    width: 100%;
    height: 500px;
    outline: none;
    border: none;
    padding: 15px;
    font-size: 28px;
}
</style>