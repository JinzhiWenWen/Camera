<template>
    <div id="next_step4">
        <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 设置激励分配比例
             </div>
        </div>
        <div class="requirement_text">
            <span>
            请填写一下四种角色激励的分配比例。总和为100%
            </span>   
        </div>
        <div class="proportion_requirement">
             <div class="div_span_ipt">
                <span>发起人占比</span>
                <input type="text" v-model="setting_allot_x[0]">
             </div>
             <div class="div_span_ipt">
                <span>组织者占比</span>
                <input type="text" v-model="setting_allot_x[1]">
             </div>
             <div class="div_span_ipt">
                <span>支持者占比</span>
                <input type="text" v-model="setting_allot_x[2]">
             </div>
             <div class="div_span_ipt">
                <span>参与者占比</span>
                <input type="text" v-model="setting_allot_x[3]">
             </div>
        </div>
        <div class="rule">
            <div class="rule_cont">
                 此活动总人数<span>{{total_number}}</span>,期限<b>{{term}}</b>天,需抵押SLK数量
                 <b>{{Scope_of_mortgage_min}}</b>w~<b>{{Scope_of_mortgage_max}}</b>w
                 共可获得
                 <b>{{Scope_of_acquisition_min}}</b>w~<b>{{Scope_of_acquisition_max}}</b>w
                 的激励 (根据抵押数得日1%的激励)
            </div>
            <ul class="rule_floor">
                <li>发起人：所有发起人评分该占比的激励</li>
                <li>组织者：所有组织者评分该占比的激励</li>
                <li>支持者：根据抵押数量按比例分配该占比的激励</li>
                <li>参与者：所有参与者平分该占比的激励</li>
            </ul>
        </div>
         <div class="next_step_footer">
             <button @click="Next_step">
                 确认提交审核
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               activity:'',
            //    total_number:"",//总人数
            //    term:"",//期限
            //    Scope_of_mortgage:{
            //        max:"",
            //        min:''
            //    },//抵押范围
            //    Scope_of_acquisition:{
            //        max:'',
            //        min:''
            //    },//获得范围
               setting_allot_x:[],//比例
               setting_allot_x_x:[]
            }
               
        },
        created(){
            this.activity=this.$route.query.activity;
            console.log(this.activity)
        },
        computed:{
             term(){
                let endDate=this.activity.endDate;
                let startDate=this.activity.startDate;
                let allTime=endDate-startDate;
                let term=allTime/24/60/60/1000;
                return term;
             },
             total_number(){//人数
                return this.activity.setting_organizer.length/1+this.activity.setting_participator.maxPeople/1;
             },
             Scope_of_mortgage_max(){//最多抵押
                 return this.activity.setting_supporter.maxPledge;
             },
             Scope_of_mortgage_min(){//最少抵押
                 return this.activity.setting_supporter.minPledge;
             },
             Scope_of_acquisition_max(){//最多获得
                 return this.activity.setting_supporter.maxPledge*0.01*this.term;
             },
             Scope_of_acquisition_min(){//最少获得
                 return this.activity.setting_supporter.minPledge*0.01*this.term;
             }
        },
        methods:{
            fn(){
                this.$router.go(-1)
            },
            Next_step(){
                
                this.setting_allot_x_x = this.setting_allot_x.map((value)=>{
                   return  parseInt(value);
                })
                console.log()
                this.activity.setting_allot=this.setting_allot_x_x;
                console.log(this.activity)
                this.$http.post('http://192.168.1.109:3000/v1/activity/create',{
                    activity:this.activity
                })
                .then(res => {
                    console.log(res)
                }).catch(
                    fail =>{
                        console.log(fail)
                    }
                )
                console.log(this.activity)
                  this.$router.push({
                    path:'/activity',
                    query:{
                        id:1
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
.requirement_text{
    line-height: 60px;
    height: 60px;
    font-size: 30px;
    color: #ccc;
    margin-left: 15px;
    border-bottom: 1px solid #eee;/*no*/
}
.proportion_requirement{
    .div_span_ipt{
        border-bottom: 1px solid #eee;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        overflow: hidden;
         span{
                margin-left: 15px;
            }
            input{
                float: right;
                outline: none;
                border: none;
                height: 80px;
            }
    }
}
.rule{
    margin: 0px 15px;
    margin-top: 15px;
    .rule_cont{
        font-size: 28px;
        line-height: 46px;
    }
    .rule_floor{
        margin-top: 10px;
        line-height: 46px;
        font-size: 28px;
        color: #03ccbb;
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