<template>
    <div id="Detailed">
         <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    明细
                </div>
        </div>
        <div class="Detailed_list">
            <ul>
                <li v-for="(item,index) in Detailed_arr" :key="index">
                    <div>
                        <i>{{item.options.type | discount}}</i>&nbsp;&nbsp;(类型)
                    </div>
                    <div>
                        <p>
                            收款方地址<span></span>
                        </p>
                        <b>
                            +<em>{{item.options.num}}</em>&nbsp;slk
                        </b>
                    </div>
                    <div>
                       {{item.options.date}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                  uid:'',
                  pageNo:1,
                  Detailed_arr:''
            }
        },
        created(){
            this.uid=this.$route.query.uid;
            this.Detailed_fn()
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            Detailed_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/users/wallet/history/'+this.pageNo+'/'+this.uid).then(res=>{
                    res.data.data.map(val=>{
                        let date = new Date(val.options.date);
                        let Y = date.getFullYear() + '-';
                        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                        let D = date.getDate() + ' ';
                        let h = date.getHours() + ':';
                        let m = date.getMinutes() + ':';
                        let s = date.getSeconds(); 
                        val.options.date=Y+M+D+h+m+s
                        
                    })
                   
                    this.Detailed_arr=res.data.data;
                    console.log(this.Detailed_arr)
                })
            },
            
        },
        filters: {
              discount : function(value){
                        if(value==1){
                            return '提币'
                        }else if(value==2){
                            return '创建节点'
                        }else if(value==3){
                            return '注销节点'
                        }else if(value==4){
                            return '加入共识'
                        }else if(value==5){
                            return '退出共识'
                        }else if(value==6){
                            return '共识奖励'
                        }else if(value==7){
                            return '活动抵押'
                        }else if(value==8){
                            return '活动奖励'
                        }else if(value==9){
                            return '充值'
                        }else if(value==10){
                            return '兑换'
                        }
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
.Detailed_list{
    ul{
        li{
            background: #fff;
            margin-bottom: 20px;
            padding: 15px;
            div{
                height: 60px;
                line-height: 60px;
                position: relative;
                font-size: 28px;
                    p{
                        float: left;
                    }
                    b{
                        display: block;
                        position: absolute;
                        right: 100px;
                    }
            }
        }
    }
    
}
</style>