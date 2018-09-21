<template>
    <div id="place">
        <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 地点
             </div>
        </div>
            <input type="text" name="" id="" placeholder="地点" class="ipt">
         <div class="place">
             <button @click="Next_step">保存</button>
        </div>
    </div>
</template>

<script>
import eventBus from '@/assets/js/eventBus.js'
    export default {
        data(){
            return {
                location:{
                    lo:39.9055342,
                    la:116.5137907
                },
                address:'北京'
            }
        },
        methods:{
            Last_step(){
                this.$router.go(-1)
            },
             Next_step(){
                eventBus.$emit('location',this.location)
                eventBus.$emit('address',this.address)
                this.$router.push({
                    path:'/basic',
                    query:{
                       location:this.location,
                       address:this.address
                    }
                })
                // if(navigator.geolocation) {
                //     navigator.geolocation.getCurrentPosition(
                //         function (position) {  
                //             var longitude = position.coords.longitude;  
                //             var latitude = position.coords.latitude;  
                //             console.log(longitude)
                //             console.log(latitude)
                //         },
                //         function (e) {
                //             var msg = e.code;
                //             var dd = e.message;
                //             console.log(msg)
                //             console.log(dd)
                //         }
                //     ) 
                // }
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
.ipt{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 15px;
}
.place{
    text-align: center;
    margin-top: 50px;
    button{
        width: 500px;
        height: 80px;
        line-height: 80px;
        outline: none;
        border: none;
        border: 1px solid #ccc;
    }
}

</style>