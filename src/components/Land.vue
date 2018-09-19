<template>
    <div id="Land">
        <div class="land_logo">
            <img src="" alt="logo">
        </div>
        <div class="land_ipt">
            <input type="text" placeholder="手机号码" v-model="phone">
            <input type="password" placeholder="密码" v-model="pwd">
        </div>
        <div class="land_btn">
            <button @click="land_fn">登陆APP</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                    phone:'',
                    pwd:''            
            }
        },
        methods:{
            land_fn(){
               this.$http.post('http://192.168.1.109:3000/v1/auth/signIn',{
                    phone:this.phone,
                    pwd:this.pwd
               }).then(res=>{
                   console.log(res)
                   if(res.data.code == 200 ){
                        this.$router.push({
                            path:'/home',
                            query:{
                            id:1
                            }
                        })
                   }
               })
                  
            },
           
        }
           
        
    }
</script>

<style scoped lang="scss">
.land_logo{
    width: 100%;
    height: 200px;
    margin-top: 200px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}  
.land_ipt{
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
    .land_ipt_btn{
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
.land_btn{
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
.land_out{
    margin-top: 100px;
    font-size: 28px;
    text-align: center;
}
</style>