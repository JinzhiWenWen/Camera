<template>
    <div id="Super_player">
       <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 超级玩家
             </div>
         </div>
         <div class="Super_player_div">
             <div class="Super_player_search">
                 <yd-icon name="search" class="search_i"></yd-icon>
                 <input type="search" placeholder="请输入昵称">
                 <span class="text_em" @click="hide_fn">搜索</span>
             </div>
         </div>
         <div class="Super_player_two">
              <ul>
                  <li v-for="(item,index) in arr" :key="index">
                      <span @click="player_two_fn(index)" ref="player_two_span">{{item.name}}</span>
                      <div class="two_divs" ref="player_two_div">
                          <ul>
                              <li v-for="(item2,index2) in item.content" :key="index2" @click="hide_fn(item2._id,item2.name)">
                                  <div class="li_div">
                                        <div>
                                            <i>{{item2.name}}</i>
                                            <img src="" alt="形象图片">
                                        </div>
                                        <p>财富值 TOP <b>1</b> </p>
                                        <div v-if="item2.slk">{{item2.slk}}</div>
                                        <div v-if="item2.credit">{{item2.credit}}</div>     
                                  </div>
                                                 
                              </li>
                          </ul>
                      </div>
                  </li>
              </ul>
         </div>
         <div class="Super_player_bottom">
             全社区排行前20入榜
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                    arr:[
                        {
                            "name":"财富榜",
                            "content":[
                                    {
                                        "img":"",
                                        "name":"1",
                                        "numer":"2",
                                        "lck":"3"
                                    },2
                            ]
                        },
                        {
                            "name":"信用榜",
                            "content":[
                                    {
                                        "img":"",
                                        "name":"1",
                                        "numer":"2",
                                        "lck":"3"
                                    }
                            ]
                        }
                    ]
            }
        },
        created(){
            this.list_fn()
        },
        mounted(){
            this.$refs.player_two_span[0].className="active"
            this.$refs.player_two_div[0].className="active2"
        },
        methods:{
            Last_step(){
                this.$router.go(-1)
            },
            player_two_fn(i){
                for(var j=0;j<this.$refs.player_two_span.length;j++){
                    this.$refs.player_two_span[j].className="" 
                    this.$refs.player_two_div[j].className="two_divs"
                }
                    this.$refs.player_two_span[i].className="active"
                    this.$refs.player_two_div[i].className="active2"
            },
            list_fn(){
                //财富榜
                this.$http.get('http://192.168.1.109:3000/v1/users/superUser/richlist').then(res=>{
                    this.arr[0].content=res.data.data;
                    console.log(this.arr[0].content) 
                     this.$http.get('http://192.168.1.109:3000/v1/users/superUser/creditlist').then(res1=>{
                            this.arr[1].content=res1.data.data;
                            console.log(this.arr[1].content)
                    })              
                })
                //信用帮
                
            },
            hide_fn(_id,name){
            
                this.$router.push({
                    path:'/Player_details',
                    query:{
                        _id:_id,
                        name:name
                    }
                })
            }

        }
    }
</script>

<style scoped lang="scss">
.active{
    border-bottom: 3px solid yellow;
}
.active2{
        position: absolute;
        left: 0px;
        top: 76px;
        ul{
            width: 100%;
            li{
                width: 50%;
                height: 300px;
                float: left;
                .li_div{
                    margin: 15px;
                    width: 350px;
                    height: 285px;
                    border: 1px solid green;
                  
                    div{
                          height: 210px;
                        position: relative;
                        i{
                            display: block;
                            text-align: center;
                            line-height: 46px;
                            margin-top: 15px;
                        }
                        img{
                            width: 160px;
                            height: 160px;
                            display: block;
                            background: #eee;
                            position: absolute;
                            left: 50%;
                            margin-left: -80px;
                        }
                    }
                }
            }
        }
}
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
.Super_player_div{
    background: #ccc;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Super_player_search{
    width: 95%;
    height: 60px;
    background: #fff;
    position: relative;
    .text_em{
        position: absolute;
        right: 10px;
        font-size: 28px;
        line-height: 60px;
    }
    .search_i{
        display: block;
        font-size: 36px!important;
        margin-left: 10px;
        margin-top: 10px;
        float: left;
    }
    input{
        float: left;
        margin-left: 15px;
        height: 60px;
        width: 91%;
        outline: none;
        border: none;
        font-size: 30px;
    }
}
.Super_player_two{
    height: 1600px;
    &>ul{
        background: #fff;
        position: relative;
         &>li{
            width: 50%;
            float: left;
            text-align: center;
            display: flex;
            justify-content: center;
             &>span{
                font-size: 28px;
                line-height: 66px;
                display: block;
                width: 200px;
            }
            .two_divs{
                display: none
            }
            
        }
    }
}
.Super_player_bottom{
    margin-left: 15px;
    color: blue;
}
</style>