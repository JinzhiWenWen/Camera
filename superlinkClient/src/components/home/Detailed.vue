<template>
    <div id="Detailed">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 明细
             </div>
        </div>
        <div class="Detailed_div">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <span>{{item.left}}</span>
                    <i>{{item.center}}</i>
                    <em>{{item.right}}</em>
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
                      "left":"幸运牌",
                      "center":"10",
                      "right":"刚刚"
                  },
                   {
                      "left":"幸运牌",
                      "center":"50",
                      "right":"一小时前"
                  },
                   {
                      "left":"观众牌",
                      "center":"100",
                      "right":"两天前"
                  },
                   {
                      "left":"分享翻倍",
                      "center":"500",
                      "right":"三天前"
                  },
                   {
                      "left":"观众牌",
                      "center":"100",
                      "right":"一周前"
                  }
               ]
            }
        },
        created(){
           this.detailed_fn()
        },
        mounted(){
         
        },
        methods:{
             Last_step(){
                this.$router.go(-1)
             },
             //明细调取
             detailed_fn(){
               
                this.$http.get('http://192.168.1.109:3000/v1/draw/candyHistory/5b8a5ab830c9c562f96c7f9e').then(res=>{
                        // console.log(res.data.data.candyHistory)
                        res.data.data.candyHistory.map(val =>{
                            let date = new Date(val.drawTime);
                            let Y = date.getFullYear() + '-';
                            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                            let D = date.getDate() + ' ';
                            let h = date.getHours() + ':';
                            let m = date.getMinutes() + ':';
                            let s = date.getSeconds(); 
                            val.drawTime =Y+M+D+h+m+s;
                        })
                        console.log(res)
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
.Detailed_div{
    ul{
        li{
            line-height: 80px;
            height: 80px;
            border-bottom: 1px solid #ccc;/*no*/
            font-size: 30px;
            padding: 0px 15px;
            span{
                width: 33%;
                display: block;
                float: left;
                text-align: left;
            }
            i{
                width: 33%;
                display: block;
                float: left;
                text-align: center;
            }
            em{
                width: 33%;
                display: block;
                float: left;
                text-align: right;
            }
        }
    }
}
</style>