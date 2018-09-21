<template>
    <div id="find">
        <div class="find_div">
            <ul class="find_ul">
                <li v-for="(item,index) in arr" :key="index" @click="finds(index)">
                    <img src="" alt="">
                    <span>{{item.name}}</span>
                    <i>></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                arr:[
                    {   
                        "img":"",
                        "name":"超级玩家",
                        "router":"/find/super_player"
                    },
                    {   
                        "img":"",
                        "name":"日程安排",
                        "router":"/find/schedule"
                    },{   
                        "img":"",
                        "name":"公识节点",
                        "router":"/find/consensus_node"
                    }
                ]
            }
        },
        methods:{
            finds(i){
                   this.$router.push({
                    path:this.arr[i].router,
                    query:{
                        id:1
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.find_div{
    .find_ul{
        li{
            background: #fff;
            display: flex;
            align-items: center;
            height: 80px;
            margin-top: 20px;
            overflow: hidden;
            position: relative;
            img{
                display: block;
                width: 40px;
                height: 40px;
                float: left;
                line-height: 80px;
                background: #ccc;
                margin-left: 20px;
            }
            span{
                float: left;
                margin-left: 20px;
                font-size: 28px;
            }
            i{
                position: absolute;
                right: 20px;
            }
        }
    }
}
</style>