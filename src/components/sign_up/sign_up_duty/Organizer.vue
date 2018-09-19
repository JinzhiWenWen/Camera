<template>
    <div id="Organizer">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    组织者
                </div>
        </div>
        <div class="Organizer_role">
            <div class="Organizer_role_top">
                <p>申请组织角色</p>
                <input type="text" v-model="Apply.role"> 
                <i>></i>
            </div>
            <div class="Organizer_role_bottom">
                <p>申请说明</p>
                <textarea name="" id="" cols="30" rows="10" class="text" placeholder="如：个人落地执行能力突出......" v-model="Apply.des">
                </textarea>
            </div>
        </div>
        <div class="Organizer_role_radio"> 
            <input type="radio" class="radio" v-model="radio" value="1" name="1">
            <span class="radio_span">抵押SLK</span>
            <input type="radio" class="radio" v-model="radio" value="0" name="1">
            <span class="radio_span">不抵押</span>
             <div class="role_radio_div" v-if="radio == 1">
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
                    <b>xxx</b>~<b>xxx</b>
                    之间
                </div>
             </div>
        </div>
        <div class="next_step_footer">
             <button @click="Apply_fn">
                 申请报名
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                radio:'',
                Apply:{
                    aid:'',//活动id
                    uid:'5b8a5ab830c9c562f96c7f9e',
                    name:"李四",
                    pledge:'',//抵押slk
                    status:0,
                    payPwd:'',//支付密码
                }
               
            }
        },
        created(){
            this.Apply.aid=this.$route.query.aid;
        },
        methods:{
            Last_step(){
                this.$router.go(-1)
            },
            Apply_fn(){
                this.$http.post('http://192.168.1.109:3000/v1/activity/enroll/organizer',this.Apply).then(res=>{
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
.Organizer_role{
    font-size: 30px;
    .Organizer_role_top{
        height: 60px;
        border-bottom: 1px solid #ccc;/*no*/
        padding: 0px 15px;
        position: relative;
        p{
            line-height: 60px;
            font-size: 28px;
            float: left;
        }
        input{
            outline: none;
            border: none;
            box-sizing: border-box;
            line-height: 60px;
            float: right;
            width: 200px;
            margin-right: 100px;
        }
        i{
            font-size: 38px;
            line-height: 60px;
            position: absolute;
            right:20px;
        }
    }
    .Organizer_role_bottom{
        p{
            line-height: 60px;
            font-size: 28px;
            padding: 0px 15px;
        }
        .text{
            width: 100%;
            height: 300px;
            padding: 15px;
            outline: none;
            border: none;
        }
        ::-webkit-input-placeholder { /* WebKit browsers */
            color:    red;
        }
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:    red;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:    red;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
            color:   red;
        }
    }
}
.Organizer_role_radio{
    font-size: 30px;
    .radio{
        width: 30px;
        height: 30px;
        margin: 0px 15px;
    }
    .radio_span{
        line-height: 60px;
        margin-left: 10px;
        
    }
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
    .role_div_bottom{
      margin: 0px 15px;
      line-height: 50px;
      color: #ccc;
      font-size: 28px;
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