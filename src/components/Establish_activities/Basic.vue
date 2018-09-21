<template>
    <div id="basic">
         <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 填写活动基本信息
             </div>
         </div>
         <div class="basic_content">
             <ul>
                 <li>
                     <div class="title t1" @click="go_title">标题</div>         
                 </li>
                 <li>
                     <div class="start_timer t1" @click="startDate">
                         活动开始时间
                         <span>{{activity.startDate}}</span>
                     </div>
                     <div class="start_cha">
                        <mt-datetime-picker
                        v-model="time1"
                        type="datetime"
                        year-format="{value} 年"
                        month-format="{value} 月"
                        date-format="{value} 日"
                        ref="picker1"
                        >
                        </mt-datetime-picker>
                     </div>
                 </li>
                 <li>
                     <div class="end_timer t1" @click="endDate">
                         活动结束时间
                         <span>{{activity.endDate}}</span>
                     </div>
                     <div class="end_cha">
                        <mt-datetime-picker
                        v-model="time2"
                        type="datetime"
                        year-format="{value} 年"
                        month-format="{value} 月"
                        date-format="{value} 日"
                        ref="picker2"
                        >
                        </mt-datetime-picker>
                     </div>
                 </li>
                 <li>
                     <div class="place t1" @click="go_address">地点</div>
                 </li>
                 <li>
                     <div class="poster t1">
                         <span>宣传海报</span>
                         <i>(375 X 230)</i>
                     </div>
                     <div class="upload_poster">
                         <div class="imgs">
                            <el-upload
                            :action="importFileUrl"
                            list-type="picture-card"
                            :on-remove="handleRemove"
                            :limit="1"
                            :name="file"
                            :on-preview="handlePictureCardPreview"  
                            :onError="uploadError"
                            :onSuccess="uploadSuccess"
                            >
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible1">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                         </div>    
                     </div>
                 </li>
                 <li>
                     <div class="active_poster t1">
                         <span>活动海报</span>
                         <i>(最多6张)</i>
                     </div>
                     <div class="active_posters">
                         <div class="imgs2">
                            <el-upload
                            :action="importFileUrl"
                            list-type="picture-card"
                            :on-remove="handleRemove"
                            :name="file"
                            :limit="6"
                            :on-preview="handlePictureCardPreview1"  
                            :onError="uploadError"
                            :onSuccess="uploadSuccess2"
                            >
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                            </el-dialog>
                         </div> 
                     </div>
                 </li>
             </ul>
         </div>
         <div class="basic_footer">
             <button @click="Next_step">
                 下一步
             </button>
         </div>
    </div>
</template>

<script>

import eventBus from '@/assets/js/eventBus.js'
    export default {
        data(){
            return {
                    importFileUrl: 'https://easy-mock.com/mock/5b95d4bd8190510e014e3f45/123/img',
                    imgUrl: '',
                    dialogImageUrl: '',
                    dialogVisible: false,
                    dialogVisible1: false,
                    img:require('../../assets/img/46574339c2da383.jpg'),
                    time1:'',
                    time2:'',
                    file:'file',
                    activity:{
                            "uid":"5b8a5ab830c9c562f96c7f9e",
                            "title":this.$route.query.title,
                            "location":this.$route.query.location,
                            "address":this.$route.query.address,
                            "imgUrl":"",
                            "activityImgs":[],
                            "startDate":"",
                            "endDate":"",
                            "creator":{
                                "_id":"5b8a5ab830c9c562f96c7f9e",
                                "name":"小明",
                                "pledge":200
                            },
                            "setting_organizer":[{
                                "uid":"5b8a5ab830c9c562f96c7f9e",
                                "role":"1",
                                "des":"1"
                            }],
                            "setting_supporter":{
                                "minPledge":'100',
                                "maxPledge":'200'
                            },
                            "setting_participator":{
                                "maxPeople":'1',
                                "condition":"1",
                                "needPledge":false
                            },
                            "setting_allot":[]
                        }
            }
        },
        created(){
           eventBus.$on('title',val => {
                this.activity.title=val;
            })
            eventBus.$on('location',val => {
                this.activity.location=val;
            }) 
             eventBus.$on('address',val => {
                this.activity.address=val;
            })    

        },
        mounted(){
              
        },
        computed:{
           
        },
        methods:{
            Last_step(){//上一步
                this.$router.go(-1)
            },
            go_title(){
                this.$router.push({
                    path:'/title',
                    query:{
                    }
                })
            },
            go_address(){
                 this.$router.push({
                    path:'/address',
                    query:{
                    }
                })
            },
            Next_step(){  //下一步  

                
                 console.log(this.activity)
                 this.$router.push({
                    path:'/next_step',
                    query:{
                       activity:this.activity 
                    }
                })
               
            },
            uploadSuccess (response, file, fileList) {      //上传成功
                 this.activity.imgUrl=file.url;
            },
            uploadSuccess2 (response, file, fileList) {
                this.activity.activityImgs.push(file.url);
            },
            uploadError (response, file, fileList) {        // 上传错误
                 console.log('上传失败，请重试！')
            },
            startDate() { //开始时间
                this.$refs.picker1.open();
                 let that=this;
                 setTimeout(function(){
                    that.activity.startDate = new Date(that.time1).getTime();
                    // console.log(that.activity.startDate)
                },4000)
            },
            endDate() {//结束时间
                this.$refs.picker2.open();
                let that=this;
                setTimeout(function(){
                    that.activity.endDate = new Date(that.time2).getTime();
                    // console.log( that.activity.endDate)
                },4000)
               
            },
            
            handleRemove(file, fileList) {        //文件列表移除文件时的钩子
                // console.log(file, fileList);
            },
            handlePictureCardPreview(file) {     //点击文件列表中已上传的文件时的钩子	
                this.activityImgs = file.url;
                this.dialogVisible = true;
            },
            handlePictureCardPreview1(file) {
                this.activityImgs1 = file.url;
                this.dialogVisible1 = true;
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
.basic_content{
    ul{
        
        li{
            width: 100%;
            display: block;
              //////// 有问题  li有间隙
            border-bottom: 1px solid #ccc;/*no*/
            overflow: hidden;  
            .t1{
                height: 70px;
                line-height: 70px;
                font-size: 34px;
                padding-left: 15px;
                span{
                    margin-left: 50px;
                }
            }
            .imgs{
                height: 200px;
                padding-bottom: 20px;
                margin-left: 50px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .imgs2{
                float: left;
                height: 200px;
                padding-bottom: 20px;
                margin-left: 50px;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
.basic_footer{
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
.el-upload-list{
    li{
        float: left!important;
    }
}
.el-upload{
    float: left;
}
</style>