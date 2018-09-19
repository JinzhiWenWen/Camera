<template>
    <div id="attribute">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    属性
                </div>
        </div>
        <div class="attribute_ul1">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <div class="li_left">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="li_right">
                        <span>{{item.fraction}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="attribute_ul2">
            <ul>
                <li v-for="(item,index) in arr2" :key="index">
                    <div class="li_left">
                        活动<b>{{item.content}}</b>总体评分<i>{{item.Fraction}}</i>分，信用值<em>{{item.de}}</em>
                    </div>
                    <div class="li_right">
                        <span>{{item.timer}}</span>
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
                Personal_inf:'',
                arr:[
                    {
                        "name":"信用值",
                        "fraction":"87"
                    },
                     {
                        "name":"执行力",
                        "fraction":"43"
                    },
                     {
                        "name":"宣传力",
                        "fraction":"66"
                    },
                     {
                        "name":"亲和力",
                        "fraction":"67"
                    },
                     {
                        "name":"影响力（按SLK数量和持有天数计算）",
                        "fraction":"7836279.7832"
                    }
                ],
                arr2:[
                    {
                        "content":"xxxx1",
                        "Fraction":"98",
                        "de":"+2",
                        "timer":"2018/08/15 23:32:31"
                    },
                    {
                        "content":"xxxx2",
                        "Fraction":"98",
                        "de":"+2",
                        "timer":"2018/08/15 23:32:31"
                    },
                    {
                        "content":"xxxx3",
                        "Fraction":"98",
                        "de":"+2",
                        "timer":"2018/08/15 23:32:31"
                    },
                    {
                        "content":"xxx4",
                        "Fraction":"98",
                        "de":"+2",
                        "timer":"2018/08/15 23:32:31"
                    }
                ]
            }
        },
        created(){
            this.Personal_inf=this.$route.query.Personal_inf;
            console.log(this.Personal_inf)
            this.arr[0].fraction=this.Personal_inf.credit;
            this.arr[1].fraction=this.Personal_inf.execute;
            this.arr[2].fraction=this.Personal_inf.publicity;
            this.arr[3].fraction=this.Personal_inf.affinity;
            this.arr[4].fraction=this.Personal_inf.influence;
            console.log(this.arr)
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
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
}
.attribute_ul1{
    ul{
        background: #fff;
        li{
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #ccc;
            font-size: 28px;
            .li_left{
                width: 70%;
                text-align: left;
                float: left;
                padding-left: 15px;
            }
            .li_right{
                width: 30%;
                float: left;
                text-align: right;
                padding-right: 25px;
            }
        }
    }
}
.attribute_ul2{
    margin-top: 30px;
     ul{
        background: #fff;
        li{
            height: 100px;
            line-height: 50px;
            border-bottom: 1px solid #ccc;
            font-size: 28px;
            b{
                font-weight: normal;
            }
            .li_left{
                text-align: left;
                padding-left: 15px;
                height: 50px;
            }
            .li_right{
                height: 50px;
                text-align: right;
                padding-right: 25px;
            }
        }
    }
}
</style>