<template>
    <div id="bottom">
      
            <div v-for="(item,index) in router" :key="index" @click="huan(index)" ref="bottom_s">
                <span class="el-icon-picture shoye"></span>
                <p class="home">{{item.name}}</p>
            </div>
       

        <!-- <div>
            <router-link to="activity">
                <span class="el-icon-picture shoye"></span>
                <p class="activity">活动</p>
            </router-link>  
        </div> 

        <div>
            <router-link to="find">
                <span class="el-icon-picture shoye"></span>
                <p class="find">发现</p>
            </router-link>
        </div>

        <div>
            <router-link to="my">
                <span class="el-icon-picture shoye"></span>
                <p class="my">我的</p>
            </router-link>
        </div> -->
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
                   router:[
                         {
                            "router":"/home",
                            "name":"首页",
                            "class":"el-icon-picture"
                         },
                        {
                            "router":"/activity",
                            "name":"活动",
                            "class":"el-icon-picture"
                        },
                        {
                            "router":"/find",
                            "name":"发现",
                            "class":"el-icon-picture"
                        },
                        {
                            "router":"/my",
                            "name":"我的",
                            "class":"el-icon-picture"
                        }
                   ]
            }
        },
        created(){
                   
        },
        mounted(){
              this.$refs.bottom_s[0].className="active"
        },
        watch:{

        },
        methods:{
            huan(i){
                        for(var j=0;j<this.$refs.bottom_s.length;j++){
                                this.$refs.bottom_s[j].className=" "       
                        }
                        this.$refs.bottom_s[i].className="active"
                        this.$router.push({
                            path:this.router[i].router,
                            query:{
                                id:1,
                            }
                        })
                }
        },
        filters:{//过滤器  用法 {{>{{ num | discount}}}}
            discount : function(value){
                            if(value==0){
                            return a
                            }else if(value==1){
                            return b
                            }else if(value==2){
                            return c
                            }else if(value==3){
                            return d
                            }
                        }
        }
    }
</script>

<style lang="scss" scoped>
.active{
        color: red;
    }
#bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        width: 25%;
        span{
            font-size: 32px;
            margin: 10px;
            display: block;
        }
        p{
            font-size: 32px;
        }
    }
    
}

</style>