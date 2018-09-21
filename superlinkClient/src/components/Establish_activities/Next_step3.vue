<template>
    <div id="Next_step3">
         <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 设置参与者条件
             </div>
        </div>
        <div class="participant">
            <div class="participant_numer">
                <span>可参与人数</span>
                <input type="text" v-model="setting_participator_x.maxPeople">
            </div>
            <div class="participant_condition">
                <span>参与者需满足条件</span>
                <textarea name="" id="" cols="30" rows="10" class="text" placeholder="如：需为尚时公司CEO"
                 v-model="setting_participator_x.condition"
                >
                </textarea>
            </div>
        </div>
        <div class="least">
            <input type="radio" v-model="numer" value="0">
            <span>需要抵押SLK</span>
        </div>
        <div class="requirement" v-if="numer == 0">
                <span>最少抵押数</span>
                <input type="text" v-model="setting_participator_x.needPledge">
        </div>
        <div class="next_step_footer">
             <button @click="Next_step">
                 下一步
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                numer:1,
                activity:'',
                setting_participator_x:{
                    condition:'',//条件
                    maxPeople:'',//可参与人数
                    needPledge:''//抵押物
                }
            }
        },
        created(){
               this.activity=this.$route.query.activity;
                console.log(this.activity)
        },
        methods:{
             Last_step(){
                this.$router.go(-1)
            },
             Next_step(){
                this.activity.setting_participator=this.setting_participator_x;
                this.$router.push({
                    path:'/next_step4',
                    query:{
                        activity:this.activity
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
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
.participant_numer{
            border-bottom: 1px solid #eee;
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            overflow: hidden;
            span{
                margin-left: 15px;
                float: left;
            }
            input{
                float: right;
                outline: none;
                border: none;
                height: 60px;
            }
        }
.participant{
            span{
                margin-left: 15px;
                display: block;
                font-size: 30px;
                line-height: 60px;
            }
            .text{
                width: 100%;
                height: 350px;
                font-size: 28px;
                text-indent: 1em;
                border: none;
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
.least{
    line-height: 80px;
    height: 80px;    
    overflow: hidden;
      input{
          display: block;
          float: left;
          margin-left: 15px;
          width: 35px;
          height: 35px;
          margin-top: 22px;
          line-height: 80px;
      }
      span{
          float: left;
          font-size: 32px;
          margin-left: 20px;
          line-height: 80px;
      }   
}
.requirement{
            border-bottom: 1px solid #eee;/*no*/
            height: 60px;
            line-height: 60px;
            font-size: 30px;
            overflow: hidden;
            span{
                margin-left: 15px;
            }
            input{
                float: right;
                outline: none;
                border: none;
                height: 60px;
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