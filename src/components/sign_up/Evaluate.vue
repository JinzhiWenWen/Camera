<template>
    <div id="evaluate">
         <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    评价
                </div>
        </div>
        <div class="evaluate_zong">
            <p class="evaluate_zong_head">总体评价</p>
            <div class="evaluate_cont">
                <ul>
                    <li v-for="(item,index) in arr" :key="index" @click="evaluate_cont(index)">
                        <div class="score_divs" ref="score_divs"> 
                            <p ref="score_divs_p" class="score_divs_p">{{item}}</p>
                             <b>
                                 <img src="" alt="">
                             </b>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="evaluate_zong2">
            <p class="evaluate_zong_head2">特色</p>
            <div class="evaluate_cont2">
                <ul>
                    <li v-for="(item,index) in arr2" :key="index" @click="evaluate_cont2(index)">
                        <div class="score_divs2" ref="score_divs2">
                            <p class="score_divs_p2" ref="score_divs_p2">{{item}}</p>
                            <b>
                                <img src="" alt="">
                            </b>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="detailed_description">
            <p>详细描述</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="如：我非常喜欢这次的活动，非常的有意......" class="text">

            </textarea>
        </div>
        <div class="next_step_footer">
             <button @click="fn">
                 评价
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                 a:true,
                 arr:["不合格","合格","优秀"],
                 arr2:["有趣","有品质","有内容","有性价比"]
            }
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
            evaluate_cont(i){
                  for(var j=0;j<this.$refs.score_divs.length;j++){
                    this.$refs.score_divs[j].className="score_divs"   
                    this.$refs.score_divs_p[j].className="score_divs_p"
                   }
                  this.$refs.score_divs_p[i].className="active"
                  this.$refs.score_divs[i].className="active2"
            },
            evaluate_cont2(i){
                  if( this.$refs.score_divs_p2[i].className == "score_divs_p2"){
                    this.$refs.score_divs_p2[i].className="active"
                    this.$refs.score_divs2[i].className="active2"
                    this.a=false
                  }else{
                    this.$refs.score_divs_p2[i].className="score_divs_p2"
                    this.$refs.score_divs2[i].className="score_divs2"
                    this.a=true;
                  }
                 
            },
        },
    }
</script>

<style lang="scss" scoped>
.active{
    color: green;
    font-size: 28px;
    line-height: 60px;
}
.active2{
    width: 150px;
    height: 60px;
    border: 1px solid green;
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    b{
        display: block;
        position: absolute;
        right: 0px;
        top: 20px;
        width: 50px;
        height: 50px;
        background: #ccc;
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
.evaluate_zong{
    margin: 0px 15px;
    overflow: hidden;
    .evaluate_zong_head{
        line-height: 80px;
        font-size: 28px;
    }
    ul{
        margin-left: -15px;
        li{
            margin: 0px 15px;
            float: left;
            .score_divs{
                width: 150px;
                height: 60px;
                border: 1px solid #ccc;
                border-radius: 10px;
                text-align: center;
                position: relative;
                overflow: hidden;
                .score_divs_p{
                    line-height: 60px;
                    color: #000;
                    line-height: 60px;
                    font-size: 28px;
                }
                b{
                    display: none;
                    position: absolute;
                    right: 0px;
                    top: 20px;
                    width: 50px;
                    height: 50px;
                    background: #ccc;
                }
         }
        }
    }
}
.evaluate_zong2{
    margin: 0px 15px;
    overflow: hidden;
    .evaluate_zong_head2{
        line-height: 80px;
        font-size: 28px;
    }
    ul{
        margin-left: -15px;
        li{
            margin: 0px 15px;
            float: left;
            .score_divs2{
                width: 150px;
                height: 60px;
                border: 1px solid #ccc;
                border-radius: 10px;
                text-align: center;
                position: relative;
                overflow: hidden;
                .score_divs_p2{
                    line-height: 60px;
                    font-size: 28px;
                }
                b{
                    display: none;
                    position: absolute;
                    right: 0px;
                    top: 20px;
                    width: 50px;
                    height: 50px;
                    background: #ccc;
                }
         }
        }
    }
}
.detailed_description{
    margin: 0px 15px;
    overflow: hidden;
    p{
         line-height: 80px;
        font-size: 28px;
    }
    .text{
        outline: none;
        border: none;
        height: 300px;
        width: 100%;
        font-size: 28px;
        padding: 5px;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    red;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color:    red;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color:    red;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
            color:   red;
    }
}
.next_step_footer{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 80%;
        height: 100px;
        border: none;
        outline: none;
        border: 1px solid #ccc;/*no*/
        border-radius: 15px;
    }
}

</style>