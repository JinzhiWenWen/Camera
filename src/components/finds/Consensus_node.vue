<template>
    <div id="Consensus_node">
        <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    共识节点
                </div>
        </div>
        <div class="Super_player_div">
             <div class="Super_player_search">
                 <yd-icon name="search" class="search_i"></yd-icon>
                 <input type="search" placeholder="请输入节点号">
             </div>
         </div>
         <div class="Super_player_two">
              <ul>
                  <li v-for="(item,index) in arr" :key="index">
                      <span @click="player_two(index)" ref="player_two_span">{{item.name}}</span>
                      <div class="two_divs" ref="player_two_div">
                          <ul class="divs_ul">
                              <li v-for="(item2,index2) in item.content" :key="index2">
                                 <div class="li_div">
                                    <div class="li_divs_con">
                                        <span class="act">F90FHK24</span>
                                        <i class="el-icon-info"></i>
                                        <b>24</b>
                                    </div>
                                    <div class="li_divs_con">
                                        <span>f83492hru4212231545</span>
                                        <i class="el-icon-info"></i>
                                        <b>80000.00</b>
                                    </div> 
                                    <div class="li_divs_con">
                                        <span>5%</span>
                                        <i class="el-icon-info"></i>
                                        <b>8800000.00</b>
                                    </div>   
                                    <div class="jindu">
                                    </div>
                                    <em>共识中</em>      
                                 </div>            
                              </li>
                          </ul>
                      </div>
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
                            "name":"全部",
                            "content":[1,2,3,4,5
                            ]
                            
                        },
                        {
                            "name":"我创建的",
                            "content":[1,2,3,4,5]
                            
                        },
                       
                        {
                            "name":"我委托的",
                            "content":[1,2,3,4,5]     
                        }
                    ]
            }
        },
         mounted(){
            this.$refs.player_two_span[0].className="active"
            this.$refs.player_two_div[0].className="active2"
        },
        methods:{
             fn(){
                this.$router.go(-1)
            },
             player_two(i){
                for(var j=0;j<this.$refs.player_two_span.length;j++){
                    this.$refs.player_two_span[j].className="" 
                    this.$refs.player_two_div[i].className="two_divs"
                }
                    this.$refs.player_two_span[i].className="active"
                    this.$refs.player_two_div[i].className="active2"
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
        width: 100%;
        .divs_ul{
            width: 100%;
            height: 240px;
            padding: 15px;
            li{
                width: 100%;
                background: #eee;
                margin-top: 20px;
                overflow: hidden;
                position: relative;
            }
            .li_div{
                padding: 20px;
                .jindu{
                        height: 100px;
                        width: 100%;
                        background: #03ccbb;        
                    }
                 em{
                       width: 200px;
                       height: 50px;
                       background: yellow;
                       position: absolute;
                       right: -45px;
                       top:20px;
                       transform:rotate(45deg);
                       text-align: center;
                       line-height: 50px;
                   }
               .li_divs_con{
                   line-height: 46px;
                   font-size: 28px;
                   .act{
                        font-weight: bold;
                   }
                   span{
                        float: left;   
                        display: block;
                        width: 200px;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                   }
                   i{
                        margin-left: 160px;
                   }
                   b{
                        margin-left: 30px;
                        font-weight: normal;
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
    .Super_player_search{
    width: 95%;
    height: 60px;
    background: #fff;
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
}

.Super_player_two{
    &>ul{
        background: #fff;
        position: relative;
        width: 100%;
         &>li{
            width: 33.33%;
            float: left;
            display: flex;
            justify-content: center;
             &>span{
                font-size: 28px;
                line-height: 66px;
                display: block;
                text-align: center;
                width: 200px;
            }
            .two_divs{
                display: none
            }
            
        }
    }
}
</style>