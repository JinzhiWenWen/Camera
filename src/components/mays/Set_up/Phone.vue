<template>
    <div id="Phone">
           <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 手机号码
             </div>
        </div>
        <div>
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            >
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods:{
            fn(){
                 this.$router.go(-1)
            },
            handleRemove(file, fileList) {
            console.log(file, fileList);
          
            },
            handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
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