<template>
    <div id="More_people">
         <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 更多人员
             </div>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in Look_at_more" :key="index">
                    <span>{{item.name}}</span><i>{{item.applyInfo}}</i><b>{{item.pledge}}</b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                  Look_at_more:[]
            }
        },
        created(){
           this.Look_more()
        },
        methods:{
             Last_step(){
                 this.$router.go(-1)
            },
            Look_more(){
                
                 this.$http.get('http://192.168.1.109:3000/v1/activity/more/1/5b8a5ab830c9c562f96c7f9e/5b9608690bc5664738ea8c6e').then(res=>{
                    console.log(res)
                    this.Look_at_more=res.data.data;
                    console.log(this.Look_at_more)
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
}
</style>