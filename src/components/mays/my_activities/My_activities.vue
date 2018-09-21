<template>
    <div id="My_activities">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    我的活动
                </div>
        </div>
        <div class="My_activities_center">
             <ul>
                 <li v-for="(item,index) in arr" :key="index">
                    <span ref="li_spans" @click="tab_fn(index)">
                        {{item.name}}
                    </span>
                    <div class="li_div" ref="li_divs">
                        <div class="li_div_cont" v-for="(item2,index2) in item.content" :key="index2">
                            <div class="li_div_top">
                                <b>{{item2.title}}</b>
                                <b>{{item2.cont_ji}}</b>
                                
                            </div>
                            <div class="em">{{item2.activityNo}}</div>
                            <div class="li_div_center">
                                
                            </div>
                            <div class="li_div_bottom">
                                <div v-if="item2.status ==0">
                                       查看详情
                                </div>
                                <div v-if="item2.status ==1">
                                    编辑
                                </div>
                                <div v-if="item2.status ==2">
                                    <span @click="mortgage_fn(item2._id)">
                                        抵押
                                    </span>
                                    <span @click="Toexamine_fn(item2._id)">
                                        审核报名信息
                                    </span>
                                </div>
                                <div v-if="item2.status ==3">
                                    执行中
                                </div>
                                <div v-if="item2.status ==4">
                                    评价中
                                </div>
                                <div v-if="item2.status ==5">
                                    已完成
                                </div>
                            </div>
                            <i>{{item2.status | discount}}</i>
                            <i v-if="item2.cont_zhuangtai">{{item2.cont_zhuangtai}}</i>
                        </div>
                    </div>
                 </li>
             </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                uid:'5b8a5ab830c9c562f96c7f9e',
                arr:[
                    {
                        "name":"我发起的",
                        "router":"",
                        "content":[
                            // {
                            //     "title":"照亮慈姑堂",
                            //     "cont_ji":"A级",
                            //     "cont_du":"300",
                            //     "activityNo":"2018/08/23/00:01",
                            //     "cont_zhuangtai":"筹备中",
                            //     "cont_chakan":"查看详情"
                            // },
                            // {
                            //     "title":"照亮慈姑堂",
                            //     "cont_ji":"B级",
                            //     "cont_du":"400",
                            //     "activityNo":"2018/08/23/00:01",
                            //     "cont_zhuangtai":"评价中",
                            //     "cont_bianji":"编辑"
                            // },
                            // {
                            //     "aid":"5b9608690bc5664738ea8c6e",
                            //     "title":"照亮慈姑堂",
                            //     "cont_ji":"A级",
                            //     "cont_du":"400",
                            //     "activityNo":"2018/08/23/00:01",
                            //     "cont_zhuangtai":"执行中",
                            //     "diya":{
                            //         "cont_diya":"抵押",
                            //         "cont_shenhe":"审核报名信息"
                            //     }
                            // },
                        ]
                    },
                    {
                        "name":"我参与的",
                        "router":"",
                         "content":[
                            // {   
                            //     "aid":"",
                            //     "title":"哈哈哈",
                            //     "cont_ji":"B级",
                            //     "cont_du":"300",
                            //     "activityNo":"2018/08/23/00:01",
                            //     "cont_zhuangtai":"评价中",
                            //     "cont_chakan":"查看详情"
                            // },
                            // {
                            //     "title":"哈哈哈2",
                            //     "cont_ji":"B级",
                            //     "cont_du":"400",
                            //     "activityNo":"2018/08/23/00:01",
                            //     "cont_zhuangtai":"筹备中",
                            //     "cont_diya":"抵押"
                            // },
                        ]
                    }
                ],
                pageNo:'1'
            }
        },
        created(){
            this.activity_class_fn();
        },
        mounted(){
            this.$refs.li_spans[0].className="active"
            this.$refs.li_divs[0].className="active2"
        },
        methods:{
           Last_step(){
                 this.$router.go(-1)
            },
            tab_fn(i){
                for(var j=0;j<this.$refs.li_spans.length;j++){
                    this.$refs.li_spans[j].className="" 
                    this.$refs.li_divs[j].className="li_div"
                }
                this.$refs.li_spans[i].className="active"
                this.$refs.li_divs[i].className="active2"
            },
            activity_class_fn(){
                //我发起的
                this.$http.get('http://192.168.1.109:3000/v1/users/list/started/'+this.pageNo+'/'+this.uid).then(res=>{
                    this.arr[0].content=[...this.arr[0].content,...res.data.data];
                    console.log("我发起的=》",res.data.data)
                })
                //我参与的
                this.$http.get('http://192.168.1.109:3000/v1/users/list/participant/'+this.pageNo+'/'+this.uid).then(res=>{
                   this.arr[1].content=[...this.arr[1].content,...res.data.data]
                   console.log("我参与的=》",res.data.data)
                })
            },//抵押
            mortgage_fn(aid){
                this.$router.push({
                    path:'/Mortgage',
                    query:{
                        aid:aid
                    }
                })
            },//审核
            Toexamine_fn(aid){
                this.$router.push({
                    path:'/Registration_information',
                    query:{
                        aid:aid,
                        uid:this.uid
                    }
                })
            },
            
        },
        filters: {
            //(0 审核中 1 审核失败 2 筹备中 3 执行中 4 评价中 5 已完成)
              discount : function(value){
                        if(value==0){
                            return '审核中'
                        }else if(value==1){
                            return '审核失败'
                        }else if(value==2){
                            return '筹备中'
                        }else if(value==3){
                            return '执行中'
                        }else if(value==4){
                            return '评价中'
                        }else if(value==5){
                            return '已完成'
                        }
              }
        }
    }
</script>

<style scoped lang="scss">
.active{
        border-bottom: 2px solid yellow;/*no*/
}
.active2{
        display: block;
        position: absolute;
        left: 3%;
        top: 80px;
        height: 1300px;
        width: 94%;
        position: absolute;
        .li_div_cont{
            margin-bottom: 20px;
            background: #fff;
            padding: 20px;
            padding-bottom: 0px;
            overflow: hidden;
            position: relative;
            .li_div_top{
                overflow: hidden;
                b{
                    display: block;
                    width: 50%;
                    float: left;
                    line-height: 60px;
                    font-size: 32px;
                } 
            }
            .em{
                    font-size: 28px;
                    line-height: 50px;
                }
            .li_div_center{
            height: 100px;
            border-bottom: 1px solid #ccc;/*no*/
            }
            .li_div_bottom{
                line-height: 80px;
                font-size: 34px;
                text-align: center;
                span{
                    float: left;
                    width: 50%;
                    line-height: 80px;
                    &:first-child{
                        border-right: 1px solid #ccc;
                    }
                }
               
            }
            i{
                position: absolute;
                right: -50px;
                top: 21px;
                height: 60px;
                display: block;
                width: 200px;
                background: green;
                transform:rotate(45deg);
                text-align: center;
                line-height: 60px;
                font-size: 30px;
                color: #fff;
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
.My_activities_center{
    ul{
        position: relative;
        li{
            float: left;
            width: 50%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            span{
                text-align: center;
                width: 200px;
                display: block;
                line-height: 60px;
              
            }
            .li_div{
                display: none;
            }
        }
    }
}
</style>