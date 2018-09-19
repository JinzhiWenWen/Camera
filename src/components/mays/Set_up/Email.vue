<template>
    <div id="Email">
           <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 邮箱
             </div>
           </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
     
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
        }  
           
    }
</script>

<style scoped lang="scss">

</style>