<template>
    <div id="activeity">
        <div class="activeity_search1">
            <div class="launch">
                <button @click="fn">发起活动</button>
            </div>
            <div class="search">
                <input type="text" placeholder="请输入活动关键字" @click="activity_search">
                <yd-icon name="search search2"></yd-icon>
            </div>
        </div>
        <div class="activity_steps">
            <div  v-for="(item,index) in classify" :key="index" @click="tab_fn(index)">
                <router-link :to="item.router">
                    <p class="preparation" ref="teps_p">{{item.name}}</p>
                </router-link> 
            </div>
        </div>
        <div class="steps_content">
　　　　　　  <keep-alive>
                    <transition :name="transitionName"> 
                            <router-view class="background"></router-view>
                    </transition>  
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
       data() {
            return {
                transitionName: 'slide-right',  // 默认动态路由变化为slide-right
                classify: [
                    {
                        "router":"/activity/preparation",
                        "name":"筹备中"
                    },
                    {
                        "router":"/activity/implement",
                        "name":"执行中"
                    },
                    {
                        "router":"/activity/follow",
                        "name":"我关注的"
                    },
                    {
                        "router":"/activity/activitys",
                        "name":"所有活动"
                    }
                ]
            }
        },
        watch:{
            
        },
        mounted(){
             this.$refs.teps_p[0].className="active2";
            //  this.$http.get('http://192.168.1.102:3000/v1/activity/list/:pageNo/:key?').then(res=>{
            //      console.log(res)
            //  })
        },
        methods: {
             tab_fn(i){
                for(var j=0;j<this.$refs.teps_p.length;j++){
                      this.$refs.teps_p[j].className=" "       
                }
                this.$refs.teps_p[i].className="active2"
                this.$router.push({
                    path:this.classify[i].router,
                    query:{
                        id:1,
                    }
                })
            },
            fn(){
                  this.$router.push({
                    path:'/basic',
                    query:{
                        id:1
                    }
                })
            },
            activity_search(){
                 this.$router.push({
                    path:'/search',
                    query:{
                        id:1
                    }
                })
            }
        } 
    }
</script>

<style lang="scss" scoped>
.active2{
    color: blue;
}
.activeity_search1{
    margin-top: 20px;
    overflow: hidden;
    .launch{
        float: left;
        margin-left: 30px;
        button{       
            height: 70px;
            font-size: 32px;
            width: 200px;
            background: yellow;
            outline: none;
            border: none;
            border-radius: 15px;
            line-height: 70px;
            text-align: center;
        }
    }
    .search{
        float: left;
        margin-left: 20px;
        position: relative;
        input{
            width: 450px;
            display: block;
            height: 70px;
            outline: none;
            border: 1px solid #ccc;
            box-sizing: border-box;
            border-radius: 15px;
            font-size: 32px;
            text-indent: 2em;
        }
        .search2{
            position:absolute;
            left: 8px;
            top: 8px;
            font-size: 32px;
        }
        
    }
}
.activity_steps{
    div{
        float: left;
        width: 25%;
        text-align: center;
        line-height: 80px;
        font-size: 32px;
    }
}

</style>