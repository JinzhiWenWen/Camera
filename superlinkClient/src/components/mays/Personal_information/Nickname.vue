<template>
    <div id="Nickname">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人昵称
                </div>
                <div class="preservation" @click="preservation_fn">
                    保存
                </div>
        </div>
        <div class="Nickname_ipt">
            <input type="text" v-model="Personal_inf_x.name">
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
          console.log(this.Personal_inf_x)
        },
        computed:{
             ...mapState(['Personal_inf_x']),
        },
        methods:{
             ...mapActions(['Nickname_fn_x']),
            Last_step(){
                 this.$router.go(-1)
            },
            preservation_fn(){//保存昵称
                 this.Nickname_fn_x(this.Personal_inf_x.name);
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
.Nickname_ipt{
    input{
            width: 100%;
            height: 80px;
            outline: none;
            border: none;
            background: #fff;
            font-size: 28px;
            padding: 15px;
        }
    
}
</style>