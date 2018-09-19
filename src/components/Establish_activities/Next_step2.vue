<template>
    <div id="Next_step2">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 设置支持者限制
             </div>
        </div>
        <div class="mortgage">
            <div class="mortgage_max">
                <span>每个支持者最少抵押数</span>
                <input type="text" v-model="setting_supporter_x.minPledge">
            </div>
            <div class="mortgage_min">
                <span>每个支持者最多抵押数</span>
                <input type="text" v-model="setting_supporter_x.maxPledge">
            </div>
        </div> 
        <div class="notes">
            可不填写即没有限制
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
                   activity:'',
                   setting_supporter_x:{
                        maxPledge:'',
                        minPledge:''
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
                this.activity.setting_supporter=this.setting_supporter_x;
                this.$router.push({
                    path:'/next_step3',
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
.mortgage{
    div{
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
.notes{
    margin-left: 15px;
    font-size: 28px;
    line-height: 70px;
    color: #ccc;
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