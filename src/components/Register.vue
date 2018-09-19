<template>
    <div id="Land">
        <div class="register_logo">
            <img src="" alt="logo">
        </div>
        <div class="register_ipt">
            <input type="text" placeholder="手机号码" v-model="phone">
            <input type="password" placeholder="密码" v-model="pwd">
            <div class="register_ipt_btn">
                <input type="text" placeholder="验证码" v-model="vCode">
                <button @click="vCode_fn">获取验证码</button>
            </div>
        </div>
        <div class="register_btn">
            <button @click="register_fn">注册账号</button>
        </div>
        <div class="register_out">
            <p>第三方登陆</p>
        </div>
    </div>
</template>

<script>
import {setStore,getStore,removeStore} from '@/utill'
    export default {
        data(){
            return {
                    phone:'15835973754',
                    vCode:'',
                    pwd:'zhangyuan123'            
            }
        },
        methods:{
            register_fn(){
                this.vCode=parseInt(this.vCode);
                console.log(this.vCode)
                this.$http.post('http://192.168.1.109:3000/v1/auth/signUp',{
                    phone:this.phone,
                    vCode:this.vCode,
                    pwd:this.pwd
                }).then(res=>{
                    console.log(res.data)
                    console.log(res.data.code)
                    if(res.data.msg == '注册成功'){
                        console.log('哈哈哈哈')
                        this.$router.push({
                            path:'/land',
                            query:{
                            id:1
                            }
                        })
                    }
                   
                })
                 
               
            },
            vCode_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/auth/phoneVerify/'+this.phone).then(res=>{
                    console.log(res)
                })
            }
        }
           
        
    }
</script>

<style scoped lang="scss">
.register_logo{
    width: 100%;
    height: 200px;
    margin-top: 200px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}  
.register_ipt{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width:600px;
        height: 80px;
        outline: none;
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 28px;
        display: block;
        float: left;
    }
    .register_ipt_btn{
        margin-top: 30px;
        input{
            width: 450px;
        }
        button{
            height: 60px;
            width: 150px;
            outline: none;
            border: none;
            box-sizing: border-box;
            border: 1px solid #ccc;
            margin-top: 20px;
        }
    }
}
.register_btn{
        text-align: center;
        margin-top: 50px;
        button{
            width: 600px;
            height: 100px;
            outline: none;
            border: none;
            border: 1px solid #ccc;
        }
}
.register_out{
    margin-top: 100px;
    font-size: 28px;
    text-align: center;
}
</style>