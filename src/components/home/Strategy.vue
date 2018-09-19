<template>
    <div id="Strategy">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 攻略
             </div>
         </div>
         <div class="Strategy_p">
            <p>{{Strategy.drawStrategy_title}}}</p>
            <p>{{Strategy.drawStrategy_content}}</p>
         </div>
         <div class="Strategy_ul">
             <ul>
                 <li v-for="(item,index) in Strategy.drawStrategy_list" :key="index">
                     <span>{{item.title}}</span>
                     <p>{{item.content}}</p>
                 </li>
             </ul>
         </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                Strategy:''
            }
        },
        created(){
            this.Strategy_fn();
        },
        mounted(){
       
        },
        methods:{
             Last_step(){
                this.$router.go(-1)
            },
            Strategy_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/draw/strategy').then(res=>{
                    this.Strategy=res.data;
                    console.log( this.Strategy)
                })
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
.Strategy_p{
    padding: 15px;
    font-size: 28px;
    line-height: 48px;
    color: #ccc;
}
.Strategy_ul{
    ul{
        li{
            padding-left: 15px;
            border-bottom: 1px solid #ccc;/*no*/
            span{
                font-size: 28px;
                line-height: 48px;
                color: #03ccbb;
            }
            p{
                font-size: 28px;
                color: #000;
                line-height: 58px;
            }
        }
    }
}
</style>