<template>
    <div id="Warn">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    转账
                </div>
        </div>
        <div class="Warn_content">
            <ul>
                <li>
                    <span>收钱人钱包地址</span>
                    <input type="text" v-model="Warn.walletAddress">
                </li>
                <li>
                    <span>数量</span>
                    <input type="text" :placeholder="slk_x" v-model="Warn.num">
                </li>
                <li>
                    <span>备注</span>
                    <input type="text" v-model="Warn.remark">
                </li>
                <li>
                    <span>手续费</span>
                    <input type="text" v-model="Warn.serviceMoney">
                </li>
            </ul>
        </div>
        <div class="next_step_footer">
             <button @click="Warn_fn">
                 确认转账
             </button>
         </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        data(){
            return {
                Warn:{
                    uid:'',
                    walletAddress:'',
                    num:'',
                    remark:"",
                    serviceMoney:0,
                   
                }
               
            }
        },
        created(){
            this.Warn.uid=this.uid
        },
        computed:{
             ...mapState(['uid','slk_x']),
        },
        methods:{
            ...mapMutations(['Wallet_fn']),
            Last_step(){
                 this.$router.go(-1)
            },
            Warn_fn(){
                this.$http.post('http://192.168.1.109:3000/v1/users/transfer',this.Warn).then(res=>{
                     console.log(res.data)
                    // this.Wallet_fn(res.data.data.slk)
                   
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
.Warn_content{
    ul{
        li{
            height: 80px;
            line-height: 80px;
            padding: 0px 15px;
            span{
                float: left;
            }
            input{
                float: right;
                overflow: hidden;
                border: none;
                width: 300px;
                height: 80px;
                margin-left: 200px;
            }
        }
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