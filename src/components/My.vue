<template>
    <div id="my">
          <div class="my_head">
               <div class="my_head_left">
                    <img src="" alt="头像">
               </div>
               <div class="my_head_center">
                    <span>xx此处显示昵称</span>
                    <div>
                        信用值
                        TOP <b>1</b>
                    </div>
               </div>
               <div class="my_head_right" @click="fn1">
                      >
               </div>
          </div>
          <div class="my_content">
              <ul>
                  <li v-for="(item,index) in arr" :key="index">
                      <img src="" alt="">
                      <span>{{item.name}}</span>
                      <i @click="fn2(index)">></i>
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
                       "name":"钱包",
                       "router":"/Wallet"
                   },{
                       "name":"我的活动",
                       "router":"/My_activities"
                   },{
                       "name":"设置",
                       "router":"/Set_up"
                   }]
            }
        },
        methods:{
            fn1(){
                this.$router.push({
                    path:'/Personal_information',
                    query:{
                        id:1
                    }
                })
            },
            fn2(i){
                this.$router.push({
                    path:this.arr[i].router,
                    query:{
                        id:1
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss">
.my_head{
        height: 200px;
        width: 100%;
        background: pink;
        margin-top: 20px;
  .my_head_left{
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        img{
            width: 120px;
            height: 120px;
            display: block;
            border: 1px solid #ccc;
        }
   }  
   .my_head_center{
       width: 300px;
       height: 100%;
       float: left;
       font-size: 28px;
       span{
           line-height: 100px;
           margin-top: 10px;
           display: block;
           height:100px;
       }
       div{
           line-height:60px;
           height: 100px;
       }
   }
   .my_head_right{
       line-height: 200px;
       height: 200px;
       float: right;
       margin-right: 30px;
       font-size: 30px;
       color: yellow;
   }
}
.my_content{
    ul{
        li{
            height: 80px;
            width: 100%;
            margin-top: 15px;
            background: #fff;
            display: flex;
            align-items: center;
            position: relative;
            img{
                display: block;
                width: 60px;
                height: 60px;
                float: left;
                border: 1px solid #ccc;
                margin-left: 25px;
            }
            span{
                margin-left: 20px;
                font-size: 26px;
                float: left;
            }
            i{
                position: absolute;
                display: block;
                right: 30px;
                font-size: 28px;
            }
        }
    }
}
</style>