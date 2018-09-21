<template>
    <div id="Wallet">
          <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    钱包
                </div>
        </div>
        <div class="Wallet_head">
            <div class="Wallet_more">
                {{slk_x}}SLK
                <b @click="Detailed_fn">明细</b>
            </div>
            <div class="Wallet_ul">
                 <li v-for="(item,index) in arr" :key="index">
                     <span>{{item.name}}</span>
                     <b>{{item.numer}}</b>
                 </li>
            </div>
        </div>
        <div class="Wallet_bottom">
             <ul>
                 <li v-for="(item,index) in arr2" :key="index">
                     <span>{{item.name}}</span>
                     <i @click="router_fn(index)">></i>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        
        data (){
            return {
                uid:"5b8a5ab830c9c562f96c7f9e",
                arr:[
                    {
                       "name":"可用",
                       "numer":"xxxx"
                    },
                    {
                       "name":"冻结",
                       "numer":"xxxx"
                    },
                    {
                       "name":"抵押",
                       "numer":"xxxx"
                    },
                ],
                arr2:[
                    {
                        "name":"转账",
                        "router":"/Warn",
                    },
                    {
                        "name":"充值",
                        "router":"/Recharge",
                    },
                    {
                        "name":"修改钱包密码",
                        "router":"/Modify",
                    }
                ]
            }
        },
        created(){
            this.wallet_fn_v();
        },
        computed:{
             ...mapState(['slk_x']),
        },
        methods:{
            ...mapMutations(['Wallet_fn']),
           Last_step(){
                 this.$router.go(-1)
            },
            router_fn(i){
                this.$router.push({
                    path:this.arr2[i].router,
                    query:{
                        uid:this.uid
                    }
                })
            },
            wallet_fn_v(){
                this.$http.get('http://192.168.1.109:3000/v1/users/wallet/balance/'+this.uid).then(res=>{
                    this.Wallet_fn(res.data.data[0].slk)
                    console.log(res.data.data[0].slk)
                })
            },
            Detailed_fn(){
                this.$router.push({
                    path:'/Wallet_Detailed',
                    query:{
                        uid:this.uid
                    }
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
.Wallet_head{
    width: 100%;
    background: #fff;
    padding-bottom: 50px;
    .Wallet_more{
       text-align: center;
       font-size: 34px;
       font-weight: bold;
       line-height: 100px;
       position: relative;
       b{
         font-weight: bold;
         font-size: 26px;
         color: #ccc;
         position: absolute;
         right: 10px;
         top: 10px;
         line-height: 36px;
       }
    }
    .Wallet_ul{
        overflow: hidden;
        li{
            width: 33.33%;
            float: left;
            display: flex;
            flex-direction:column;
            text-align: center;
            line-height: 46px;
            font-size: 28px;
        }
    }
}
.Wallet_bottom{
    margin-top: 20px;
    ul{
        li{
            background: #fff;
            height: 80px;
            line-height: 80px;
            font-size: 28px;
            padding: 0px 20px;
            border-bottom: 1px solid #ccc;
            &:last-child{
               border: none;
            }
            i{
                float: right;
            }
        }
        
    }
}
</style>