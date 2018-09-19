<template>
    <div id="Personal_profile">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人简介
                </div>
                <div class="preservation" @click="preservation_fn">
                    保存
                </div>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" class="text" v-model="intro"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
         data(){
            return {
                 uid:"5b8a5ab830c9c562f96c7f9e",
                 Personal_inf:'',
                 intro:''
            }
        },
        created(){
            this.Personal_inf=this.$route.query.Personal_inf;
            this.intro=this.Personal_inf.intro;
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            preservation_fn(){
                this.$http.post('http://192.168.1.109:3000/v1/users/amend/intro',{
                       uid:this.uid,
                       intro:this.intro
                }).then(res=>{
                    console.log(res)
                })
                this.$router.go(-1)
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
.text{
    width: 100%;
    height: 500px;
    outline: none;
    border: none;
    padding: 15px;
    font-size: 28px;
}
</style>