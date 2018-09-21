<template>
    <div id="sign_up">
        <div class="sing_box">
            <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    {{active_content.title}}
                </div>
                <div class="basic_head_img">
                    <img :src="img4" alt="">
                </div>
            </div>
            <div class="active_poster">
                <img :src="active_content.imgUrl" alt="活动海报">    
            </div>
            <div class="active_place">
                <div>
                    <span>活动日期：</span>
                    <p>{{active_content.startDate}}</p>
                </div>
                <div>
                    <span>活动地点：</span>
                    <p>{{active_content.address}}</p>
                </div>
            </div> 
            <div class="active_mortgage">
                <div class="mortgage_text">活动抵押：{{active_content.min_num}}w~{{active_content.max_num}}w</div>
            </div>
            <div class="active_information">
                <div class="information_head">
                    <div class="information_head_one">
                        <div class="information_head_img">
                            <img src="" alt="头像">
                        </div>
                        <div class="information_head_text">
                            <span>信用值 TOP1</span>
                            <b>96</b>
                        </div>
                    </div>
                    <div class="information_head_two">
                        <div>
                            <span>发起人:</span>
                            <i>{{active_content.activityData.creators.name}}</i>
                        </div>
                        <div>
                            <span>抵押</span>
                            <i>{{active_content.activityData.creators.pledge}}w</i>
                            <span>SLK</span>
                        </div>
                    </div>
                    
                </div>
                <div class="information_content">
                    <div class="information_content_one">
                        <ul class="one_ul">
                            <li v-for="(item,index) in active_content.activityData.participators" :key="index">
                                <img src="" alt="头像">
                                <span>{{item.name}}</span>
                                <div>抵押<b>{{item.pledge}}</b> SLK</div>
                            </li>
                        </ul>
                    </div>
                    <div class="information_content_two">
                        <ul class="one_ul">
                            <li v-for="(item,index) in active_content.activityData.organizers" :key="index">
                                <img src="" alt="头像">
                                <span>{{item.role}}：<strong>{{item.name}}</strong></span>
                                <div>抵押<b>{{item.pledge}}</b> SLK</div>
                            </li>
                        </ul>
                    </div>
                    <div class="information_content_three">
                        <ul class="one_ul">
                            <li v-for="(item,index) in active_content.activityData.supporters" :key="index">
                                <img src="" alt="头像">
                                <span>{{item.name}}</span>
                                <div>已报名参加</div>
                            </li>
                        </ul>
                        <div class="information_content_three_more" @click="more_people_fn">
                            查看更多 >>>>>>
                        </div>
                    </div>
                </div>
            </div>
            <div class="information_tail">
                      <div class="information_tail_head">
                          活动激励分配&nbsp;&nbsp;(&nbsp;总抵押数 <strong>{{active_content.activityPledge}}</strong>，总激励数&nbsp;<strong>{{active_content.stimulate}}</strong>&nbsp;)
                      </div> 
                      <div class="information_tail_proportion">
                          <ul class="proportion_ul">
                              <li>
                                  <div class="proportion_li_div">1.发起人 <strong>{{active_content.setting_allot[3]}}</strong>%</div>
                                  <div class="proportion_li_div2">
                                      <b>{{active_content.stimulateData.creator.name}}：</b>抵押<em>{{active_content.stimulateData.creator.slk}}</em>，可获得<strong>xxx</strong>SLK
                                  </div>
                              </li>
                              <li>
                                  <div class="proportion_li_div">2.支持者 <strong>{{active_content.setting_allot[3]}}</strong>%</div>
                                  <div v-for="(item,index) in active_content.stimulateData.supporter" :key="index"  class="proportion_li_div2">
                                      <b>{{item.name}}：</b>抵押<em>{{item.slk}}</em>，可获得<strong>{{item.pledge}}</strong>SLK
                                  </div>
                              </li> 
                               <li>
                                  <div class="proportion_li_div">3.组织者 <strong>{{active_content.setting_allot[2]}}</strong>%</div>
                                  <div  class="proportion_li_div2">
                                      <!-- 每人可得<strong>{{active_content.stimulateData.organizer[0].slk}}</strong> SLK -->
                                  </div>
                              </li>
                               <li>
                                  <div class="proportion_li_div">4.参与者 <strong>{{active_content.setting_allot[1]}}</strong>%</div>
                                  <div  class="proportion_li_div2">
                                      <!-- 每人可得<strong>{{active_content.stimulateData.supporter[0].slk}}</strong> SLK -->
                                  </div>
                              </li> 
                          </ul>
                      </div>     
            </div>
            <div class="activity_score">
                 <p class="activity_score_text">活动评分</p>
                 <div class="overall_score">总体评价：<b>89.76分</b>
                     <div class="overall_score_img">
                         优秀
                     </div>
                 </div>
                 <div class="overall_score_div">
                         <div class="score_divs" v-for="(item,index) in arr2" :key="index">
                            <i>{{item.number}}</i>
                            <b></b>
                            <p>{{item.text}}</p>
                         </div>
                 </div>
                 <div class="score_people">
                        <ul class="score_people_ul">
                            <li v-for="(item,index) in arr3" :key="index">
                                <div class="li_one">
                                    <img src="" alt="头像">
                                    <span>昵称</span>
                                    <div class="score_fen">
                                        总体评价<b>89</b>分
                                    </div>
                                </div>        
                                <div class="score_cont">若有详细的评价内容则显示，没有则不显示.....</div>
                            </li>
                        </ul>
                </div>
                <div class="score_people_more">
                    查看更多 >
                </div>
            </div>
            <div class="activity_number">
                 活动号：<input type="text" value="xxxxxxxxxxx" disabled>
            </div>  
            <div class="activity_action">
                <button class="sign_in" @click="sign_in_map">签到</button>
                <button class="evaluate" @click="evaluate">评价</button>
            </div> 
            <div class="sign_up_chu" @click="sign_up_alert">
                <button>
                        报名
                </button>
            </div>
        </div>
        <div class="sign_up_alert" ref="sign_up_alert">
            <i @click="close">x</i>
            <p>报名</p> 
            <span>选择您在此次活动中的角色</span>
            <ul>
                <li v-for="(item,index) in arr4" :key="index" @click="sign_up_alert_next(index)">
                    {{item.duty}}
                </li>
            </ul>
        </div>    
    </div>
</template>

<script>
    export default {
        data(){
            return {
                active_content:{
                    activityData:{
                        creators:'',
                        organizers:'',
                        participators:'',
                        supporters:''
                    },
                    activityPledge:'',
                    address:'',
                    imgUrl:'',
                    max_num:'',
                    min_num:'',
                    startDate:'',
                    stimulate:'',
                    title:'',
                    setting_allot:[],
                    stimulateData:{
                        creator:{},
                        organizer:{},
                        participator:[
                            {
                                name:'',
                                pledge:'',
                                slk:''
                            }
                        ],
                        supporter:[
                             {
                                name:'',
                                pledge:'',
                                slk:''
                            }
                        ]
                    }
                },
                img4:require('../../assets/img/70574429433ad85.jpg'),
                arr:[1,1],
                arr2:[
                    {"number":17,"text":"有趣"},
                    {"number":17,"text":"有趣"},
                    {"number":17,"text":"有趣"},
                    {"number":17,"text":"有趣"}
                ],
                arr3:[
                    1,2
                ],
                arr4:[
                    {"alert_router":"/organizer","duty":"组织者"},
                    {"alert_router":"/supporter","duty":"支持者"},
                    {"alert_router":"/participant","duty":"参与者"},
                    {"alert_router":"/Initiator","duty":"发起者"},
                ],
                router_query:''
            }
        },
        created(){
                this.created_fn();
               
        },
        mounted(){
                
        },
        watch:{
        },
        methods:{
            Last_step(){
              
                  this.$router.go(-1)
            },
            more_people_fn(){
                console.log(123)
                this.$router.push({
                    path:'/more_people',
                    query:{
                        aid:this.$route.query._id
                    }
                })
            },
            sign_in_map(){
                this.$router.push({
                    path:'/map',
                    query:{
                        id:1
                    }
                })
            },
            evaluate(){
                this.$router.push({
                    path:'/evaluate',
                    query:{
                        id:1
                    }
                })
            },
            sign_up_alert(){
                 this.$refs.sign_up_alert.className='active_alert'
            },
            sign_up_alert_next(i){
                  this.$router.push({
                    path:this.arr4[i].alert_router,
                    query:{
                        aid:this.$route.query._id,
                        setting_supporter:this.active_content.setting_supporter
                    }
                })
                 this.$refs.sign_up_alert.className='sign_up_alert'
            },
            close(){
                 this.$refs.sign_up_alert.className='sign_up_alert'
            },
            created_fn(){
                 this.router_query=this.$route.query._id;
                this.$http.get('http://192.168.1.109:3000/v1/activity/detail/5b8a5ab830c9c562f96c7f9e/'+this.router_query).then(res=>{
                  
                    let date = new Date(res.data.data.startDate);
                    let Y = date.getFullYear() + '-';
                    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    let D = date.getDate() + ' ';
                    let h = date.getHours() + ':';
                    let m = date.getMinutes() + ':';
                    let s = date.getSeconds(); 
                    res.data.data.startDate=Y+M+D+h+m+s
                      this.active_content=res.data.data;
                      console.log(this.active_content.startDate)
                    var arr=[];
                    res.data.data.setting_allot.map(val=>{
                        let vala=val+'0';
                        let valb=vala.slice(2,4)
                        arr.push(valb)
                        this.active_content.setting_allot=arr;
                       
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
#sign_up{
    overflow-y:scroll;
}
.sing_box{
    background: blue;
}
.active_alert{
    display: block;
    position: fixed;
    width: 600px;
    border-radius: 15px;
    left: 50%;
    top: 20%;
    margin-left: -300px;
    background: #eee;
    text-align: center;
    i{
        position: absolute;
        right: 10px;
        top: 10px;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        line-height: 50px;
        text-align: center;
        border: 1px solid red;
        font-size: 26px;
    }
    p{
        line-height: 60px;
        font-size: 32px;
        margin-top: 20px;
    }
    span{
        font-size: 26px;
        line-height: 50px;
    }
    ul{
        margin-top: 20px;
        li{
            line-height: 80px;
             border-top: 1px solid #000;/*no*/
        }
    }
}
.sign_up_alert{
    display: none;
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
    .basic_head_img{
        position: absolute;
        right: 15px;
        top: 15px;
        img{
            width: 50px;
            height: 50px;
        }
    }
}
.active_poster{
    height: 300px;
    overflow: hidden;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
}
.active_place{
    height: 140px;
    padding: 0px 15px;
    margin-top: 20px;
    background: #fff;
    div{
        line-height: 70px;
        font-size: 30px;
        line-height: 70px;
        overflow: hidden;
        span{
            float: left;
        }
        p{
            float: left;
        }
    }
}
.active_mortgage{
    margin-top: 20px;
    height: 140px;
    padding: 0px 15px;
    background: #fff;
    .mortgage_text{
        font-size: 30px;
        line-height: 70px;
    }
}
.active_information{
    margin-top: 20px;
    padding: 0px 15px;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .information_head{
        width: 100%; 
        overflow: hidden; 
        padding-bottom: 20px; 
        border-bottom: 1px solid #ccc;/*no*/
        .information_head_one{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center; 
              .information_head_img{
                  width: 100px;
                  height: 100px;
                  background: #ccc;
                  margin: 15px;
                  margin-left: 200px;
                  float: left;
              }
              .information_head_text{
                 float: left;
                 left: 120px;
                 top: 10px;
                 span{
                     display: block;
                     width: 200px;
                     font-size: 28px;
                     margin-top: 15px;
                 }
                 b{
                     margin-top: 20px;
                     margin-left: 60px;
                     line-height: 50px;
                     font-size: 34px;
                 }
              }
        }
        .information_head_two{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center; 
            div{
                font-size: 26px;
                span{
                    margin-left: 10px;
                }
            }
        }
    }
    .information_content{
        
        .information_content_one{
            .one_ul{
                width: 100%;
                margin-left: 10px;
                border-bottom: 1px solid #ccc;/*no*/
                li{
                    overflow: hidden;
                    height: 120px;
                    padding: 10px 0px;
                    img{
                        display: block;
                        width: 100px;
                        height: 100px;  
                        background: #ccc;
                        float: left;
                    }
                    span{
                        float: left;
                        margin-left: 20px;
                        line-height: 110px;
                        height: 110px;
                        font-size: 28px;
                    }
                    div{
                        float: right;
                        height: 100px;
                        line-height: 100px;
                        font-size: 28px;
                        margin-right: 15px;
                        b{
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
        .information_content_two{
            .one_ul{
                width: 100%;
                margin-left: 10px;
                border-bottom: 1px solid #ccc;/*no*/
                li{
                    overflow: hidden;
                    height: 120px;
                    padding: 10px 0px;
                    img{
                        display: block;
                        width: 100px;
                        height: 100px;  
                        background: #ccc;
                        float: left;
                    }
                    span{
                        float: left;
                        margin-left: 20px;
                        line-height: 110px;
                        height: 110px;
                        font-size: 28px;
                    }
                    div{
                        float: right;
                        height: 100px;
                        line-height: 100px;
                        font-size: 28px;
                        margin-right: 15px;
                        b{
                            margin-left: 10px;
                        }
                    }
                }
            }   
        }
        .information_content_three{
                .one_ul{
                    width: 100%;
                    margin-left: 10px;
                    li{
                        overflow: hidden;
                        height: 120px;
                        padding: 10px 0px;
                        img{
                            display: block;
                            width: 100px;
                            height: 100px;  
                            background: #ccc;
                            float: left;
                        }
                        span{
                            float: left;
                            margin-left: 20px;
                            line-height: 110px;
                            height: 110px;
                            font-size: 28px;
                        }
                        div{
                            float: right;
                            height: 100px;
                            line-height: 100px;
                            font-size: 28px;
                            margin-right: 15px;
                            b{
                                margin-left: 10px;
                            }
                        }
                    }
                
                
                }
                .information_content_three_more{
                        text-align: center;
                        color: #ccc;
                        font-size: 28px;
                        padding-bottom: 20px;
                }    
        }
       
    }
}
.information_tail{
        padding: 15px;
        width: 100%;
        margin-top: 20px;
        background: #fff;
        .information_tail_head{
            font-size: 28px;
            color: #ccc;
        }
        .proportion_ul{
            li{
                .proportion_li_div{
                    line-height: 40px;
                    font-size: 26px;
                }
                .proportion_li_div2{
                    line-height: 40px;
                    font-size: 24px;
                    color: #ccc;
                }
            }
        }
} 
.activity_score{
    margin-top: 20px;
    background: #fff;
    width: 100%;
    padding: 10px 15px;
    overflow: hidden;
    p{
        line-height: 44px;
    }
    .activity_score_text{
        font-size: 28px;
        color: #ccc;
    }
    .overall_score{
        font-size: 28px;
        position: relative;
        .overall_score_img{
            position: absolute;
            right: 10px;
            top: -40px;
            height: 80px;
            width: 80px;
            border: 1px solid red;
            border-radius: 50%;
            text-align: center;
            line-height: 80px;
            font-weight: bold;
            -webkit-transform: rotateZ(40deg);
            -moz-transform: rotateZ(40deg);
            -o-transform: rotateZ(40deg);
            -ms-transform: rotateZ(40deg);
            transform: rotateZ(40deg);
        }
    }
    .overall_score_div{
         display: flex;
         justify-content:space-around;
         margin-top: 20px;
         .score_divs{
            width: 150px;
            height: 60px;
            border: 1px solid #ccc;
            border-radius: 10px;
            text-align: center;
            position: relative;
            p{
                line-height: 60px;
                font-size: 28px;
            }
            i{
                position: absolute;
                left: 5px;
                top: 5px;
                font-size: 26px;
                color: red;
                font-weight: bold;
            }
            b{
                position: absolute;
                left: 0px;
                width: 0;
                height: 0;
                border-top: 60px solid #ccc;
                border-right: 90px solid transparent;
                opacity: .3;
            }
         }
    }
    .score_people{
        margin-top: 20px;
         .score_people_ul{
                width: 100%;
                li{
                    overflow: hidden;
                    border-top: 1px solid #ccc;/*no*/
                    padding: 10px 0px;
                    .li_one{
                        overflow: hidden;
                           img{
                                display: block;
                                width: 100px;
                                height: 100px;  
                                background: #ccc;
                                float: left;
                            }
                            span{
                                float: left;
                                margin-left: 20px;
                                line-height: 110px;
                                height: 110px;
                                font-size: 28px;
                            }
                            .score_fen{
                                float: right;
                                height: 100px;
                                line-height: 100px;
                                font-size: 28px;
                                margin-right: 15px;
                                b{
                                    margin-left: 10px;
                                }
                            }  
                    }
                    .score_cont{
                        font-size: 26px;
                    }
                }
            }
    }
    .score_people_more{
        text-align: center;
        font-size: 28px;
        color: #ccc;
        line-height: 60px;
    }
    
}
.activity_number{
    line-height: 60px;
    padding: 0px 15px;
    font-size: 26px;
    input{
        outline: none;
        border: none;
    }
}
.activity_action{
    padding-bottom: 100px;
    button{
        width: 100%;
        height: 80px;
        color: #03ccbb;
        outline: none;
        border: none;
        background: #eee;
        margin-top: 20px;
        font-size: 30px;
    }
}
.sign_up_chu{
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 1;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 100%;
        height: 80px;
        color: #03ccbb;
        outline: none;
        border: none;
        background: #eee;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
    }

}


</style>