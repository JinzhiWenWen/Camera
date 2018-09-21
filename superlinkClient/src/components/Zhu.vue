<template>
    <div id="zhu">
        <div class="core">
            <keep-alive> 
                <router-view class="background"></router-view>       
            </keep-alive>
        </div>
    <Bottom class="bottom"></Bottom>
    </div>
</template>

<script>
import Bottom from './Bottom'
export default {
            data(){
                return {

                }
            },
            watch:{

            },
            methods:{
                
            },
            watch:{

            },
            created(){  


            },
            mounted(){

            },
            components:{
                Bottom
            }
    }
</script>

<style lang="scss" scoped>
#zhu {
  height: 100%;
  width: 100%;
}
.core{
  height: 90%;
  width: 100%;
   overflow-y:scroll;
}
.bottom{
  height: 10%;
  width: 100%;
  background: yellow;
}
</style>