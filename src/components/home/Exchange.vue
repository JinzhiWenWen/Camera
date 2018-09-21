<template>
    <div id="Exchange">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 兑换
             </div>
        </div>
        <div class="Exchange_cont">
            <div class="Exchange_cont_top">
                <span @click="Detailed">明细</span>
            </div>
            <div class="Exchange_cont_center">
                 <span>糖果总数</span>
                 <p><i>{{store_candy_numer}}</i></p>
            </div>
            <div class="Exchange_cont_bottom">
                <button @click="show">兑换 SLK</button>
                <p>满{{show_candy.candy2slkRate}}糖果可兑换1个SLK</p>
            </div>
        </div>
        <div class="Exchange_alert2" ref="Exchange_alert">
            <div class="alert_top">
               <i @click="disappear">X</i>
            </div>
           <div class="alert_center">
               <b>兑换</b>
               <input type="text" v-model="test">
               <b>SLK</b>
           </div>
           <div class="alert_bottom">
               <p>糖果总数<i>{{show_candy.andyNum}}</i>,最多可兑换<span>{{show_candy.getSlk}}</span>个SLK</p>
               <p>兑换的SLK直接进入钱包</p>
           </div>
           <div class="alert_btn">
               <button @click="en_exchange">确认兑换</button>
           </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        data (){
            return {
                exchange:'',
            }
        },
        created(){
            this.show_candy_actions(); //刚进入页面会进行获取最多可兑换的slk
         
        },
        computed:{
           ...mapState(['store_candy_numer','show_candy','num']),
              test: {//设置vuex里的num
                get () {
                     return this.$store.state.num
                },
                set (val) {
                    console.log('11111111')
                     this.$store.commit('setTest', val)
                }
            }
        },
        mounted(){
            
        },
        methods:{
             ...mapActions(['exchange_actions','show_candy_actions']),
             ...mapMutations(['candy_fn']),
            Last_step(){//返回
                this.$router.go(-1)
            },
            Detailed(){//明细
                    this.$router.push({
                        path:'/Detailed',
                        query:{
                        }
                    })
            },
            show(){//显示兑换
                this.$refs.Exchange_alert.className='Exchange_alert';
                 this.show_candy_actions();
            },
            disappear(){//让兑换消失
                this.$refs.Exchange_alert.className='Exchange_alert2'
            },
            en_exchange(){//确认兑换
                this.exchange_actions();//兑换
                this.$refs.Exchange_alert.className='Exchange_alert2'
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
.Exchange_cont{
    padding: 0px 15px;
    .Exchange_cont_top{
        text-align: right;
        span{
            font-size: 30px;
            line-height: 60px;
        }
    }
    .Exchange_cont_center{
        text-align: center;
        span{
            font-size: 30px;
            line-height: 100px;
        }
        p{
            font-size: 56px;
        }
    }
    .Exchange_cont_bottom{
        text-align: center;
        margin-top: 80px;
        button{
            outline: none;
            border: 1px solid #000;
            height: 100px;
            width: 500px;
            border-radius: 50px;
        }
        p{
            margin-top: 20px;
            line-height: 60px;
            font-size: 28px;
        }
    }
}
#Exchange{
    position: relative;
}
.Exchange_alert{
    width: 600px;
    height: 500px;
    background: #fff;
    position: absolute;
    left: 50%;
    margin-left: -300px;
    top: 200px;
    text-align: center;
    display: block;
    .alert_top{
         text-align: right;
         font-size: 32px;
         padding: 15px;
         font-weight: bold;
    }
    .alert_center{
        font-size: 38px; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        b{
            float: left;
        }  
        input{
            width: 200px;
            display: block;
            float: left;
            border-bottom: 1px solid #ccc;/*no*/
            margin: 0px 15px;
        }  
    }
    .alert_bottom{
        margin-top: 20px;
        text-align: center;
        line-height: 40px;
        font-size: 26px;
        color: #03ccbb;
        span{
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    .alert_btn{
        button{
            outline: none;
            border: 1px solid #ccc;/*no*/
            width: 400px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            margin-top: 50px;
            border-radius: 20px;
        }
    }
}
.Exchange_alert2{
    display: none;
}
</style>