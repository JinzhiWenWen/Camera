<template>
    <div id="Player_details">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    {{name}}
                </div>
                <div class="preservation" @click="preservation">
                    分享
                </div>
        </div>
        <div class="card_top">
            <div v-for="(item,index) in arr" :key="index">
                <span>{{item.name}}</span>
                <b>{{item.numer}}</b>
                <i>{{item.three}}</i>
            </div>
        </div>
        <div class="card_center">
            此处部分显示个人简介
        </div>
        <div class="card_echarts">
             <div id="myChart" :style="{width: '380px', height: '280px',padding:'3px'}"></div>
        </div>
         <div class="card_echarts2">
             <div id="myChart2" :style="{width: '380px', height: '280px',padding:'3px'}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        _id:'',
         data(){
            return {
                arr:[
                    {
                        "name":"财富值",
                        "numer":"",
                        "three":"TOP1"
                    },
                    {
                        "name":"信用值",
                        "numer":"",
                        "three":"未上榜"
                    }
                ],
            }
        },
        created(){
            this.name=this.$route.query.name;
            this._id=this.$route.query._id;
            this.information_fn();
        },
        mounted(){
            this.drawLine();
            this.drawLine2();
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            preservation(){
                this.$router.go(-1)
            },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '活动统计趋势图' },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['发起的','参与的'],
                        x:"200px"
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal', 
                        feature: {
                            dataZoom: {
                            yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        },
                        x:"100px",
                        y:"24px"
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data:["18/09/02","18/09/14","18/09/19","18/10/16"]
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                        formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name:'发起的',
                            type:'line',
                            data:[10, 33, 15, 66, 86, 43, 10],
                        },
                        {
                            name:'参与的',
                            type:'line',
                            data:[30, 46, 77, 55, 39, 12, 10],
                        }
                    ]
                });
            },
            drawLine2(){
                let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
                myChart2.setOption({
                   title: { text: '发起活动特色图' },
                    xAxis: {
                        type: 'category',
                        data: ['有趣', '有品质', '有内容', '有性价比']
                    },
                    yAxis: {
                        type: 'value',
                        max:100,
                        axisLabel: {  
                            show: true,  
                            interval: 'auto',  
                            formatter: '{value} %'  
                        },  
                        show: true,
                    },
                    textStyle:"blue",
                    series: [{
                        data: [20,40,75,80],
                        type: 'bar',
                        itemStyle: {  
                            normal: {  
                                label: {  
                                    show: true,  
                                    position: 'top',  
                                    formatter: '{b}\n{c}%'  
                                },
                               color: function(params) {
                            // build a color map as your need.
                                var colorList = [
                                    '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    ];
                                    return colorList[params.dataIndex]
                                },  
                            }  
                        }, 
                    }]
                })
            },
            information_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/users/superUser/detail/'+this._id).then(res=>{
                      console.log(res)
                      this.arr[0].numer=res.data.data.slk;
                      this.arr[1].numer=res.data.data.credit;
                      console.log(this.arr[0].numer,this.arr[1].numer)
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
    .preservation{
        position: absolute;
        line-height: 80px;
        right: 15px;
        top: 0px;
        font-size: 28px;
    }
}
.card_top{
    background: #fff;
    div{
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding: 0px 15px;
        font-size: 26px;
        position: relative;
        span{
            display: block;
            float: left; 
        }
        b{
            font-weight: normal;
            display: block;
             float: left;
             margin-left: 50px;
        }
        i{
            font-style: normal;
            position: absolute;
            right: 15px;
        }
    }
}
.card_center{
    height: 300px;
    width: 100%;
    background: #fff;
    margin-top: 20px;
    text-align: center;
    line-height: 300px;
}
.card_echarts{
    margin-top: 30px;
    background: #fff;
}
.card_echarts2{
    margin-top: 30px;
    background: #fff;
}
</style>