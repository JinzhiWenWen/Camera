<template>
    <div id="Modify">
         <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    修改钱包密码
                </div>
        </div>
        <div class="Modify_content">
             <div class="ipt_pass">
                 <span>旧密码</span>
                 <input type="password" v-model="confirm.oldPayPwd">
             </div>
              <div class="ipt_pass">
                 <span>新密码</span>
                 <input type="password" v-model="confirm.newPayPwd">
             </div>
              <div class="ipt_pass">
                 <span>重复新密码</span>
                 <input type="password" v-model="Modify">
             </div>
        </div>
         <div class="next_step_footer">
             <button @click="confirm_fn">
                 确认修改
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                Modify:'',
                confirm:{
                    "uid":"5ba1bcfdc0134f4880c19733",
                    "oldPayPwd":"",
                    "newPayPwd":""
                }

            }
        },
        methods:{
             Last_step(){
                 this.$router.go(-1)
            },
            confirm_fn(){
                if(this.confirm.newPayPwd ==this.Modify){
                    console.log(this.confirm)
                    this.$http.post('http://192.168.1.109:3000/v1/auth/amend/payPwd',this.confirm).then(res=>{
                         console.log(res)
                    })
                    this.$router.go(-1)
                }else{
                    console.log('两次输入密码不一样哦')
                }
                  
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
.Modify_content{
    .ipt_pass{
        border-bottom: 1px solid #ccc;
        height: 80px;
        line-height: 80px;
        span{
            font-size: 28px;
            padding: 15px;
        }
        input{
            float: right;
            width: 300px;
            height: 80px;
            border: none;
            outline: none;
            font-size: 30px;
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