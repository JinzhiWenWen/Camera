<template>
    <div id="Toexamine">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    报名信息
                </div>
        </div>
        <div class="Toexamine_cont">
             抵押{{pledge}}&nbsp;SLK&nbsp;申请{{identity}}
        </div>
        <div class="Toexamine_Explain">
             <p>申请说明</p>
             <p>无限延申</p>
        </div>
        <div class="Toexamine_inf">
             <p>个人卡片信息</p>
             <p>无限延申</p>
             <p>底部按钮固定</p>
        </div>
        <div class="Toexamine_btn">
             <button :value="refuse" @click="Toexamine_fn(refuse)">拒绝</button>
             <button :value="adopt" @click="Toexamine_fn(adopt)">通过</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 uid:'',
                 aid:'',
                 identity:'',
                 pledge:'',
                 refuse:'-1',//拒绝
                 adopt:'1',//通过
                 value1:''
            }
        },
        created(){
            this.uid=this.$route.query.uid;
            this.aid=this.$route.query.aid;
            this.identity=this.$route.query.identity;
            this.pledge=this.$route.query.pledge;
        },
        methods:{
             Last_step(){
                 this.$router.go(-1)
             },
             Toexamine_fn(state){
                 console.log(state)
                 if(this.identity == '参与者'){
                          this.$http.get('http://192.168.1.109:3000/v1/activity/check/participator/'+this.uid+'/'+this.aid+'/'+state).
                          then(res=>{
                              console.log(res)
                          })
                 }else if(this.identity == '发起者'){
                           this.$http.get('http://192.168.1.109:3000/v1/activity/check/creator/'+this.uid+'/'+this.aid+'/'+state).
                          then(res=>{
                              console.log(res)
                          })
                 }else if(this.identity == '组织者'){
                            this.$http.get('http://192.168.1.109:3000/v1/activity/check/organizer/'+this.uid+'/'+this.aid+'/'+state).
                            then(res=>{
                               console.log(res)
                            })
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
.Toexamine_cont{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    text-align: center;
    background: #03ccbb;
}
.Toexamine_Explain{
    padding-left: 15px;
    background: #fff;
    p{
       line-height: 60px;
        font-size: 30px;
    }
}
.Toexamine_inf{
    margin-top: 20px;
    background: #fff;
    p{
        line-height: 60px;
        font-size: 30px;
        text-align: center;
    }
}
.Toexamine_btn{
    position:fixed;
    bottom: 0px;
    width: 100%;
    button{
        width: 50%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
        float: left;
        outline: none;
        border: none;
        border: 1px solid #ccc;
    }
}
</style>