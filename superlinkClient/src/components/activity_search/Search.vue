<template>
    <div id="search">
         <div class="search_box">
            <div class="search_border">
                <div class="search_whole">
                    <div class="whole_head" @click="whole_san">
                        <span ref="whole_span">全部</span>
                        <b class="el-icon-caret-bottom" ref="whole_b"></b>
                    </div>
                    <ul ref="whole_ul" class="whole_ul">
                        <li v-for="(item,index) in arr" :key="index" @click="whole_click(index)" ref="whole_li">
                            {{item}}
                        </li>
                    </ul>
                </div>
                <div class="search_ipt">
                    <input type="search" placeholder="请输入活动关键字" v-model="key">
                    <div class="search_i" @click="search_fn">
                        <i>搜索</i>
                    </div>
                </div>
            </div>
            <div class="search_cancel" @click="cancel">
                取消
            </div>
         </div>
         <div class="search_record">
             <p>历史搜索</p>
             <ul>
                 <li v-for="(items,index) in arr2" :key="index" class="record_li">
                     {{items}}
                 </li>
             </ul>
         </div>
         <div class="_ul">
               <ul>
                   <li v-for="(item,index) in list" :key="index">
                       <span>{{item.title}}</span><img :src="item.imgUrl" alt="">
                   </li>
               </ul>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               arr:["全部","筹备中","执行中","评价中","已完成"],
               arr2:["北京","山西","太原"],
               a:true,
               pageNo:'1',
               filterType:'1',
               uid:'5b8a5ab830c9c562f96c7f9e',
               key:'',
               list:[],
            }
        },
        mounted(){
          
        },
        methods:{
            whole_san(){
                 if(this.a == true){
                    this.$refs.whole_b.className='el-icon-caret-bottom active4'
                    this.$refs.whole_ul.className='active6'
                     this.$refs.whole_li[0].className='active3'
                    this.a=false;  
                 }else if(this.a== false){
                    this.$refs.whole_b.className='el-icon-caret-bottom'
                    this.$refs.whole_ul.className='whole_ul'
                    this.a=true;
                }  
            },
            whole_click(i){ 
                    for(var j=0;j<this.$refs.whole_li.length;j++){
                        this.$refs.whole_span.innerHTML=''; 
                    }      
                    this.$refs.whole_span.innerHTML=this.arr[i]
                    this.$refs.whole_ul.className='active5'
                    this.$refs.whole_b.className='el-icon-caret-bottom'
                    this.a=true;
            },
            cancel(){
                this.$router.push({
                    path:'/activity',
                    query:{
                        id:1
                    }
                })
            },
            search_fn(){
                this.$http.get('http://192.168.1.109:3000/v1/activity/list/'+this.pageNo+'/'+this.filterType+'/'+this.uid+'/'+this.key).then(res=>{
                    console.log(res)
                    this.list=res.data.data;
                    console.log(this.list)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.active3{
    color: yellow;
}
.active4{
      transform: rotate(180deg);/*旋转180度*/
}
.active5{
    display: none;
}
.active6{
    width: 140px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    box-shadow: 5px 5px 2px #ccc;
    display: block;
    z-index: 999;
    background: #ccc;
    li{
        padding-left: 10px;
        font-size: 28px;
        line-height: 50px; 
    }
}
.search_box{
    
    width: 100%;
    margin: 15px auto;
    .search_border{
        width: 85%;
        height: 70px;
        border: 1px solid #ccc;/*no*/
        margin: 20px auto;
        border-radius: 15px;
        float: left;
        margin-left: 15px;
        .search_whole{
            width: 140px;
            height: 70px;
            border-right: 1px solid #ccc;/*no*/
            float: left;
            .whole_head{
                height: 70px;
                width: 100%;
                line-height: 70px;
                span{
                    margin-left: 15px;
                    font-size: 26px;
                }
                b{
                    font-size: 26px;
                    margin-left: 5px;
                    transition: all 1s ease 0s;
                }
            }
            .whole_ul{
                display: none;
            }
        }
        .search_ipt{
            position: relative;
            input{
                padding-left: 10px;
                width: 400px;
                display: block;
                height: 70px;
                outline: none;
                border:none;
                box-sizing: border-box;
                border-radius: 15px;
                font-size: 28px;
                float: left;
            }
            .search_i{
                float: right;
                width: 80px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                i{
                    font-size: 28px;
                    margin-top: 10px;
                }
            }
                
        }
    }
    .search_cancel{
        float: left;
        margin: 20px auto;
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        margin-left: 20px;
    }
}
.search_record{
    width: 100%;
    margin: 15px;
    overflow: hidden;
    position: relative;
    z-index: -1;
    p{
        font-size: 26px;
        color: #03ccbb;
        line-height: 44px;
        margin-left: 5px;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        .record_li{
            margin: 10px auto;
            float: left;
            background: #ccc;
            padding: 10px 30px;
            border-radius: 20px;
        }
    }
}
._ul{
    li{
        img{
            display: block;
            width: 200px;
            height: 100px;
        }
    }
}
</style>