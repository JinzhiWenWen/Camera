<template>
    <div id="preparation">
          <div class="preparation_numer" v-for="(item,index) in preparation_list" :key="index">
              <div class="numer_img" @click="fn(index)">
                  <img :src="item.imgUrl" alt="">
              </div>
              <div class="numer_information"> 
               <div class="numer_left">
                        <div class="portrait">
                            <img :src="img2" alt="">
                        </div>
                        <div class="name">
                            <span>{{item.creator.name}}</span>
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
                        <img :src="item.love_img" alt="" @click="follow_fn(index)">
                        <span>{{item.followCount}}</span>
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
                img2:require('../../assets/img/1453256805_YKPMuGIt.jpg'),
                img4:require('../../assets/img/70574429433ad85.jpg'),
                love_img_true:require('../../assets/img/love_true.png'),
                love_img_false:require('../../assets/img/love_false.png'),
                preparation_list:[],
            }
        },
        created(){
            this.$http.get('http://192.168.1.109:3000/v1/activity/list/1/1/5b8a5ab830c9c562f96c7f9e').then(res=>{
                this.preparation_list=res.data.data;
                // console.log(this.preparation_list)
                this.preparation_list.map(val=>{
                     if(val.follow == true ){
                       val.love_img=this.love_img_true
                    }else if(val.follow == false){
                       val.love_img=this.love_img_false 
                    }
                })
            }).catch(fail=>{
                console.log(fail)
            })
        },
        watch:{
            
        },
        methods:{
            fn(index){
                this.$router.push({
                    path:'/sign_up',
                    query:{
                        _id:this.preparation_list[index]._id
                    }
                })
            },
            follow_fn(index){ //关注
                this.$http.get('http://192.168.1.109:3000/v1/activity/follow/5b8a5ab830c9c562f96c7f9e/5b9608690bc5664738ea8c6e').then(res=>{
                    if(res.data.data && res.data.data.follow == true){
                           this.preparation_list[index].follow=res.data.data.follow
                           this.preparation_list[index].followCount=res.data.data.followCount
                           this.preparation_list[index].love_img=this.love_img_true
                    }else if(res.data.msg == '已经关注了'){
                        console.log('您已经关注过了')
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