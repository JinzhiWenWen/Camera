<template>
    <div id="next_step">
       <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 添加组织结构
             </div>
        </div>   
       <div class="next_step_content">
            <div class="Organizers_div" v-for="(item,index) in Organizer_list_x" :key="index">
                 <div class="Organizers_head">组织者 <b>{{number}}</b></div>
                 <div class="Organizers_name">
                         <span>名称</span>
                         <input type="text" placeholder="如：队长/班长/校长" v-model="item.role">
                 </div>
                 <div class="Organizers_duty">
                     <span>团队职责</span>
                     <textarea name="" id="" cols="30" rows="10" placeholder="活动中负责组织参与者签到，集合按时跟进行程..." class="text"
                     v-model="item.des"
                     >
                     </textarea>
                 </div>
            </div>
        </div>
        <div class="append" ref="append" @click="append_div">
            +添加组织者
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
                 number:1,//组织者数量
                 Organizer_list_x:[ //组织者
                     {
                        "uid":"5b8a5ab830c9c562f96c7f9e",
                        "role":"",
                        "des":""
                     }
                     
                 ],
                 activity:''   
            }
        },
        created(){
          this.activity=this.$route.query.activity;
          console.log(this.activity)
        },
        mounted(){
             
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            Next_step(){
                this.activity.setting_organizer=this.Organizer_list_x
                this.$router.push({
                    path:'/next_step2',
                    query:{
                        activity: this.activity
                    }
                })
            },
            append_div(){
                this.number++;
                this.Organizer_list_x.push({
                    "uid":"5b8a5ab830c9c562f96c7f9e",
                    "role":"",
                    "des":""
                });
               
            },
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
.next_step_content{
    .Organizers_div{
        .Organizers_head{
            width: 100%;
            height: 60px;
            background: #ccc;
            line-height: 60px;
            font-size: 30px;
            padding-left: 15px;
        }
        .Organizers_name{
            border-bottom: 1px solid #eee;
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
        .Organizers_duty{
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
    }
}
.append{
    color: blue;
    font-size: 30px;
    margin-left: 15px;
    line-height: 60px;
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