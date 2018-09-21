<template>
    <div id="Supporter">
        <div class="basic_head">
                    <div class="arrow" @click="Last_step">&laquo;</div>
                    <div class="head_cont">
                        支持者
                    </div>
        </div>
        <div class="role_radio_div">
                <div class="role_ipt_div">
                    <span>抵押SLK数量</span>
                    <input type="text" placeholder="可用余额 0.000000SKL" v-model="Apply.pledge">
                </div>
                <div class="role_ipt_div">
                    <span>输入密码</span>
                    <input type="password" v-model="Apply.payPwd">
                </div>
                <div class="role_div_bottom">
                    抵押数量限制在
                    <b>{{setting_supporter.minPledge}}</b>~<b>{{setting_supporter.maxPledge}}</b>
                    之间
                </div>
        </div>
        <div class="next_step_footer">
             <button @click="Apply_fn">
                 立即支持
             </button>
         </div>
    </div>
       
</template>

<script>
    export default {
        data(){
            return {
                setting_supporter:'',
                Apply:{
                    aid:"",//活动id
                    uid:"5b8a5ab830c9c562f96c7f92",//用户id
                    name:"测试",
                    pledge:'',//抵押数
                    status:0,
                    payPwd:'',//密码
                }
               
            }
        },
        created(){
             this.Apply.aid=this.$route.query.aid;
             this.setting_supporter=this.$route.query.setting_supporter
        },
        methods:{
            Last_step(){
                this.$router.go(-1)
            },
            Apply_fn(){
                this.$http.post('http://192.168.1.109:3000/v1/activity/enroll/supporter',this.Apply).then(res=>{
                    console.log(res)
                    this.$router.go(-1)
                })
                
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
.role_radio_div{
    font-size: 30px;
    .role_ipt_div{
        border-bottom: 1px solid #ccc;/*no*/
        height: 80px;
        padding: 0px 15px;
        overflow: hidden;
        span{
            line-height: 80px;
        }
        input{
            float: right;
            line-height: 80px;
            width: 400px;
            box-sizing: border-box;
            outline: none;
            border: none;
        }
    }
}
 .role_div_bottom{
      margin: 0px 15px;
      line-height: 50px;
      color: #ccc;
      font-size: 28px;
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