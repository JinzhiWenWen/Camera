<template>
    <div id="card">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    昵称
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
             <div id="myChart" :style="{width: '380px', height: '280px'}"></div>
        </div>
         <div class="card_echarts2">
             <div id="myChart2" :style="{width: '380px', height: '280px'}"></div>
        </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
    export default {
        name: 'hello',
         data(){
            return {
                arr:[
                    {
                        "name":"财富值",
                        "numer":"789473.7643",
                        "three":"TOP1"
                    },
                    {
                        "name":"信用值",
                        "numer":"65",
                        "three":"未上榜"
                    }
                ],
            }
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
                   title: { text: '活动统计趋势图' },
                    xAxis: {
                        type: 'category',
                        data: ['有趣', '有品质', '有内容', '有性价比']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [100,100,150,200],
                        type: 'bar'
                    }]
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