<template>
    <div id="Set_up">
        <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    设置
                </div>
        </div>
        <div class="Set_up_ul">
             <ul>
                 <li v-for="(item,index) in arr" :key="index">
                    <span>{{item.name}}</span>
                    <b>{{item.information}}</b>
                    <i @click="fn2(index)">></i>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                arr:[
                    {
                        "name":"身份证认证",
                        "information":"待完善",
                        "router":"/ID"
                    },
                    {
                        "name":"活体认证",
                        "information":"已完成",
                        "router":"/Living_thing"
                    },
                    {
                        "name":"手机号码",
                        "information":"18646146106",
                        "router":"/Phone"
                    },
                    {
                        "name":"微信",
                        "information":"dd_111",
                        "router":"/WeChat"
                    },
                    {
                        "name":"微博",
                        "information":" 章鱼摆摆",
                        "router":"/Micro_blog"
                    },
                    {
                        "name":"QQ",
                        "information":"731616021",
                        "router":"/QQ"
                    },
                    {
                        "name":"邮箱",
                        "information":"zhangyuan@qq.com",
                        "router":"/Email"
                    }
                ]
            }
        },
        methods:{
           fn(){
                 this.$router.go(-1)
            },
            fn2(i){
                  this.$router.push({
                    path:this.arr[i].router,
                    query:{
                        id:1,
                        ifShow:true
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
.Set_up_ul{
    ul{
        li{
            line-height: 80px;
            margin-bottom: 20px;
            background: #fff;
            padding: 0px 20px;
            position: relative;
            font-size: 30px;
            span{
                color: #000;
            }
            b{
                float: right;
                margin-right: 50px;
                color: #ccc;
            }
            i{
                position: absolute;
                right: 20px;
            }
        }
    }
}
</style>