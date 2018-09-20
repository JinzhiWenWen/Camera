<template>
    <div id="Registration_information">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    报名信息
                </div>
        </div>
        <div class="Toexamine_ul">
            <ul class="ul">
                <li v-for="(item,index) in Toexamine_arr" :key="index">
                    <span ref="spans" @click="tab_fn(index)">{{item.identity}}</span>
                    <div class="div_out" ref="divs">
                        <div class="div_cont" v-for="(item2,index2) in item.personnel" :key="index2">
                            <img :src="item2.img" alt="">
                            <b>{{item2.name}}</b>
                            <em>抵押&nbsp;{{item2.pledge}}&nbsp;SLK</em>
                            <i @click="state_fn(item2.status,item.identity,item2.pledge)" ref="is">{{item2.status | discount}}</i>
                        </div>
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
                uid:'',
                aid:'',
                Toexamine_arr:[
                    {
                        "identity":"发起者",
                        "personnel":[
                            {
                                "img":"",
                                "name":"名字1",
                                "slk":"20,000",
                                "state":"待审核"
                            },
                            {
                                "img":"",
                                "name":"名字2",
                                "slk":"20,000",
                                "state":"已通过"
                            },
                            {
                                "img":"",
                                "name":"名字2",
                                "slk":"20,000",
                                "state":"已拒绝"
                            }
                        ]
                    },
                    {
                        "identity":"组织者",
                        "personnel":[
                            {
                                "img":"",
                                "name":"昵称1",
                                "slk":"20,000",
                                "state":"待审核"
                            },
                            {
                                "img":"",
                                "name":"昵称2",
                                "slk":"20,000",
                                "state":"已通过"
                            },
                            {
                                "img":"",
                                "name":"昵称3",
                                "slk":"20,000",
                                "state":"已拒绝"
                            }
                        ]
                    },
                    {
                        "identity":"参与者",
                        "personnel":[
                            {
                                "img":"",
                                "name":"小名1",
                                "slk":"20,000",
                                "state":"待审核"
                            },
                            {
                                "img":"",
                                "name":"小名2",
                                "slk":"20,000",
                                "state":"已通过"
                            },
                            {
                                "img":"",
                                "name":"小名3",
                                "slk":"20,000",
                                "state":"已拒绝"
                            }
                        ]
                    }
                ]
            }
        },
        created(){
            this.uid=this.$route.query.uid;
            this.aid=this.$route.query.aid;
            this.Toexamine_fn();
        },
        mounted(){
            this.$refs.spans[0].className='active';
            this.$refs.divs[0].className='active2';

        },
        methods:{
            Last_step(){
                this.$router.go(-1)
            },
            tab_fn(i){
                for(var j=0;j<this.$refs.spans.length;j++){
                    this.$refs.spans[j].className='';
                    this.$refs.divs[j].className='div_out';
                }
                this.$refs.spans[i].className='active';
                this.$refs.divs[i].className='active2';
            },
            Toexamine_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/activity/info/list/'+this.uid+'/'+this.aid).then(res=>{
                
                    this.Toexamine_arr[0].personnel=res.data.data.enrollCreators;
                    this.Toexamine_arr[1].personnel=res.data.data.organizers;
                    this.Toexamine_arr[2].personnel=res.data.data.participators;
                    console.log(this.Toexamine_arr[0].personnel)
                    console.log(res)
                })
            },
            state_fn(state,identity,pledge){
                if(state == 0){
                    this.$router.push({
                        path:'/Toexamine',
                        query:{
                            uid:this.uid,
                            aid:this.aid,
                            pledge:pledge,
                            identity:identity
                        }
                    })
                }
            }
        },
        filters: {
              discount : function(value){
                        if(value==0){
                            return '待审核'
                        }else if(value==1){
                            return '已通过'
                        }else if(value==-1){
                            return '已拒绝'
                        }
              }
        }
    }
</script>

<style scoped lang="scss">
.active{
    border-bottom: 1px solid yellow;
}
.active2{
    display: block;
    width: 100%;
    height: 500px;
    background: #eee;
    position: absolute;
    left: 0px;
    top: 60px;
        .div_cont{
            height: 80px;  
            line-height: 80px;
            font-size: 30px;
            border-bottom: 1px solid yellow;
            img{
                width: 60px;
                height: 60px;
                display: block;
                background: #03ccbb;
                float: left;
                margin: 10px;
            }
            b{
                width: 120px;
                float: left;
                display: block;
                text-align: center;
                margin-left: 15px;
            }
            em{
                margin-left: 80px;
            }
            i{
                margin-left: 110px;
            }
    }
}
.active{
    color: blue;
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
.Toexamine_ul{
    ul{
        position: relative;
        li{
            float: left;
            width: 33.33%;
            span{
                text-align: center;
                display: block;
                line-height: 60px;
                font-size: 32px;
            }
            .div_out{
               display: none;
                
            }
        }
    }
}
</style>