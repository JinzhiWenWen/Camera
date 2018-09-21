<template>
    <div id="home">
        <div class="home_head">翻牌抽糖果，您还有15次翻牌机会，快试试运气吧~</div>
        <div class="home_content">
            <ul>
                <li v-for="(item,index) in cardList" :key="index" @click="drawReversal(index)">
                    <div class="mask">
                        <!-- <img src="" alt="这里是遮罩层"> -->
                    </div>
                    <div class="cont">
                        <span></span>
                        <img :src="item.imgUrl" alt="糖果">
                    </div>
                </li>
            </ul>
        </div>
        <div class="home_flooter">
            <div class="exchange" @click="exchange">兑换</div>
            <div class="candy">
                <b class="candy_numer">{{store_candy_numer}}</b>
                <div class="candy_img">
                    <img src="" alt="" class="candy_img1">
                    <img src="" alt="" class="candy_img2">
                </div>
            </div>
            <div class="strategy" @click="strategy">攻略</div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        
        data(){
            return {
               cardList:[],
               candyNum:'糖果',
               candyNum2:''
            }
        },
        created(){
            // 首页列表
            this.drawList()
        },
        computed:{
             ...mapState(['store_candy_numer'])
        },
        methods:{
            // 首页列表
            ...mapMutations(['candy_fn']),
            drawList(){ //活动列表
                this.$http.get('http://192.168.1.109:3000/v1/draw/cardList/5b8a5ab830c9c562f96c7f9e').then(res=>{
                    this.cardList=res.data.data.lastCardList;//首页列表
                    this.candyNum=res.data.data.candyNum;//糖果总数
                    this.candy_fn(this.candyNum)
                })
                
            },
            // 兑换
            exchange(){
                this.$router.push({
                    path:'/Exchange',
                    query:{
                      
                    }
                })
            },
            // 攻略
            strategy(){
                this.$router.push({
                    path:'/Strategy',
                    query:{
                        id:1
                    }
                })
            },
            // 翻牌
            drawReversal(index){
                this.$http.get('http://192.168.1.109:3000/v1/draw/cardReversal/5b8a5ab830c9c562f96c7f9e/'+this.cardList[index].cid).then(res=>{
                    if(res.data.data){
                        this.candyNum=res.data.data.user.candyNum;
                        this.candy_fn(this.candyNum)
                    }else{
                        console.log('已经翻过了哟')
                    }
                })
               
            }   
        }
    }
</script>

<style lang="scss" scoped>

.home_head{
    width: 100%;
    height: 70px;
    background: yellow;
    font-size: 32px;
    line-height: 70px;
    padding-left: 20px;
}
.home_content{
    width: 600px;
    height: 700px;
    margin: 20px auto;
    ul{
        li{
            float: left;
            width: 190px;
            height: 100px;
            margin: 5px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            position: relative;
            .mask{
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                display: none;
            }
            .cont{
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 100%;
                overflow: hidden;
                span{
                    float: left;
                    margin-top: 30px;
                    margin-left: 20px;
                }
                img{
                    float: left;
                    margin-top: 30px;
                    margin-left: 20px;
                }
            }
        }
    }
}
.home_flooter{
    margin-top: 80px;
    width: 100%;
    height: 60px;
    background: pink;
   
    div{
        float: left;
        width: 33.33%;
        text-align: center;
        line-height: 60px;
        color:blue;
    }
    .candy{
        font-size: 26px;
        color: black;
         position: relative;
         .candy_img{
             width: 100%;
             .candy_img1{
                width: 100%;
                height: 50px;
                position: absolute;
                left: 0px;
                top: -30px;
                background: red;
            }
            .candy_img2{
                width: 30%;
                height: 50px;
                position: absolute;
                left: 50%;
                top: -50px;
                margin-left: -15%;
                background: blue;
            }
         }
        
    }
}
</style>