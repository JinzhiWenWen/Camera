<template>
    <div id="implement">
         <div class="preparation_numer" v-for="(item,index) in 5" :key="index">
              <div class="numer_img" @click="fn">
                  <img :src="img" alt="">
              </div>
              <div class="numer_information"> 
               <div class="numer_left">
                        <div class="portrait">
                            <img :src="img2" alt="">
                        </div>
                        <div class="name">
                            <span>小明</span>
                        </div>
                        <div class="xinyong">
                            <p>信用值</p>
                            <i>98</i>
                        </div>
                        <div class="top">
                            <b>TOP1</b>
                        </div>
                </div>
                <div class="numer_right">
                    <div class="heart">
                        <img :src="img3" alt="">
                        <span>342</span>
                    </div>
                    <div class="forward">
                        <img :src="img4" alt="">
                    </div>
                </div>
              </div>
          </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                img:require('../../assets/img/yhu5y.jpg'),
                img2:require('../../assets/img/1453256805_YKPMuGIt.jpg'),
                img3:require('../../assets/img/asas.png'),
                img4:require('../../assets/img/70574429433ad85.jpg')
            }
        },
        methods:{
            fn(){
                this.$router.push({
                    path:'/sign_up',
                    query:{
                        id:1
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.preparation_numer{
    margin-bottom: 20px;
    .numer_img{
        img{
           display: block;
           width: 100%;
           height: 300px;
        }
    }
    .numer_information{
        height: 100px;
        align-items: center;
        background: pink;
        .numer_left{
            margin-top: 20px;
            div{
                float: left;
                line-height: 100px;
            }
            .portrait{
                margin-left: 20px;
                img{
                    display: block;
                    width: 60px;
                    height: 60px;
                    margin-top: 20px;
                }
            }
            .name{
                margin-left: 20px;
                line-height: 100px;
                span{
                    float: left;
                    font-size: 36px;
                }
            }
            .xinyong{
                p{
                    float: left;
                    font-size: 36px;
                    margin-left: 5px;
                }
                i{
                    float: left;
                    font-size: 32px;
                    margin-left: 5px;
                }
            }
            .top{
                b{
                    float: left;
                    font-size: 32px;
                    margin-left: 10px;
                }
            }     
        }
        .numer_right{  
            float: right;
             width: 250px;
            .heart{
                float: left;
               
                margin-left: 20px;
                img{
                    display: block;
                    float: left;
                    width: 60px;
                    height: 60px;
                    margin-top: 10px;
                }
                span{
                    font-size: 32px;
                    line-height: 80px;
                    margin-left: 15px;
                }
            }
            .forward{
                float: left;
                margin-top: 10px;
                margin-left: 10px;
                img{
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }
}
</style>