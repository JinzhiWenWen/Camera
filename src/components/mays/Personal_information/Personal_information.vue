<template>
    <div id="Personal_information">
          <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人信息
                </div>
        </div>
        <div class="geren_content">
            <div class="geren_touxiang">
                 <span>头像</span>
                <div>
                    <img :src="Personal_inf_x.avatar" alt="头像">
                </div>
                <i @click="head_fn">></i>
            </div>
             <ul class="geren_content_ul">
                 <li v-for="(item,index) in arr" :key="index">
                    <span>{{item.name}}</span>
                     <div v-if="index==0">{{Personal_inf_x.name}}</div>
                     <div v-if="index ==1">{{Personal_inf_x.intro}}</div>
                     <div v-if="index ==2">信用大咖</div>
                     <i @click="router_fn(index)">></i>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
         data(){
            return {
                 uid:'5b8a5ab830c9c562f96c7f9e',
                 Personal_inf:'',
                 arr:[
                      {
                         "name":"昵称",
                         "cont":"小明",
                         "router":"/Nickname"
                     },
                      {
                         "name":"个人简介",
                         "cont":"待完善",
                         "router":"/Personal_profile"
                     },
                     {
                         "name":"属性",
                         "cont":"信用大咖",
                         "router":"/attribute"
                     },
                      {
                         "name":"个人角色卡片",
                         "router":"/card"
                     }
                 ]
            }
        },
        created(){
            this.Personal_inf_fn_x();   
        },
        mounted(){
        
        },
        computed:{
             ...mapState(['Personal_inf_x']),
        },
        methods:{
            ...mapActions(['Personal_inf_fn_x']),
            Last_step(){
                 this.$router.go(-1)
            },
            head_fn(){
                 this.$router.push({
                    path:'/Head_portrait',
                    query:{
                        Personal_inf:this.Personal_inf
                    }
                })
            },
            router_fn(i){
                this.$router.push({
                    path:this.arr[i].router,
                    query:{
                        Personal_inf:this.Personal_inf_x
                    }
                })
            },
            Personal_inf_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/users/personal/info/'+this.uid).then(res=>{
                    console.log(res)
                    this.Personal_inf=res.data.data;
                    this.arr[0].cont=this.Personal_inf.name;
                    // this.arr[1].
                    console.log(this.Personal_inf)
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
.geren_content{
    .geren_touxiang{
        padding: 0px 20px;
        height: 140px;
        background: #ccc;
        position: relative;
        display: flex;
        align-items: center;
        span{
            font-size: 26px;
            line-height: 140px;
            float: left;
        }
        div{
            float: left;
            margin-left: 500px;
            img{
               display: block;
               width: 100px;
               height: 100px;
               border: 1px solid #03ccbb;
               margin-top: 10px;
            }
        }
        i{
                position: absolute;
                right: 20px;
                font-size: 28px;
                display: block;
        }
    }
    .geren_content_ul{
        li{
            padding: 0px 20px;
            width: 100%;
            height: 80px;
            background: #fff;
            margin-top: 20px;
            position: relative;
            span{
                float: left;
                line-height: 80px;
            }
            div{
                position: absolute;
                right: 80px;
                line-height: 80px;
                color: #ccc;
            }
            i{
                position: absolute;
                right: 20px;
                line-height: 80px;
                font-size: 28px;
            }
        }
    }
}
</style>