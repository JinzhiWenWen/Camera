<template>
    <div id="Nickname">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人昵称
                </div>
                <div class="preservation" @click="preservation_fn">
                    保存
                </div>
        </div>
        <div class="Nickname_ipt">
            <input type="text" v-model="name">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 Personal_inf:'',
                 uid:'5b8a5ab830c9c562f96c7f9e',
                 name:''
            }
        },
         created(){
            this.Personal_inf=this.$route.query.Personal_inf;
            this.name=this.Personal_inf.intro;
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
             preservation_fn(){
                 console.log(this.name)
                this.$http.post('http://192.168.1.109:3000/v1/users/amend/name',{
                       uid:this.uid,
                       name:this.name
                }).then(res=>{
                    console.log(res)
                })
                // this.$router.go(-1)
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
    .preservation{
        position: absolute;
        line-height: 80px;
        right: 15px;
        top: 0px;
        font-size: 28px;
    }
}
.Nickname_ipt{
    input{
            width: 100%;
            height: 80px;
            outline: none;
            border: none;
            background: #fff;
            font-size: 28px;
            padding: 15px;
        }
    
}
</style>