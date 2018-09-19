<template>
    <div id="title">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 标题
             </div>
        </div> 
        <input type="text" name="" id="" placeholder="标题" class="ipt" v-model="title">
        <div class="title">
             <button @click="Preservation">保存</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import eventBus from '@/assets/js/eventBus.js'
    export default {
        data(){
            return {
                 title:'',
            }
        },
        computed:{
          
        },
        methods:{ 
            Last_step(){
                this.$router.go(-1)
            },
            Preservation(){//保存
                 eventBus.$emit('title',this.title)
                 this.$router.push({
                    path:'/basic',
                    query:{
                        title:this.title
                    }
                })
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
.ipt{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 15px;
}
.title{
    text-align: center;
    margin-top: 50px;
    button{
        width: 500px;
        height: 80px;
        line-height: 80px;
        outline: none;
        border: none;
        border: 1px solid #ccc;
    }
}
</style>