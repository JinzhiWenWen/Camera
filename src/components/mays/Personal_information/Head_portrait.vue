<template>
    <div id="Head_portrait">
        <div class="basic_head">
                <div class="arrow" @click="Last_step">&laquo;</div>
                <div class="head_cont">
                    个人头像
                </div>
                <div class="preservation" @click="preservation_fn">
                    保存
                </div>
        </div>
        <div>
            <div class="item_bock head_p">
                <div class="head_img">
                    <img :src="this.avatar"/>
                </div>
                <div class="setting_right" @click.stop="uploadHeadImg">
                       <div class="caption">更改头像</div>
                </div>
                <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
         data(){
            return {
                  avatar: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=62d46c39067b020818c437b303b099b6/d4628535e5dde7119c3d076aabefce1b9c1661ba.jpg'
            } 
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            preservation_fn(){
                // this.$http.get('').then(res=>{
                //     console.log(res)
                // })
                // this.$router.go(-1)
            },
            // 打开图片上传
            uploadHeadImg: function () {
                this.$el.querySelector('.hiddenInput').click()
            },
            // 将头像显示
            handleFile: function (e) {
                let $target = e.target || e.srcElement
                let file = $target.files[0]
                let reader = new FileReader()
                reader.onload = (data2) => {
                    let res = data2.target || data2.srcElement
                    this.avatar = res.result;
                        console.log('第一步')
                    this.$http.post('https://easy-mock.com/mock/5b95d4bd8190510e014e3f45/123/img',{
                        img2:this.avatar
                    }).then(res => {
                        console.log(res.config.data)
                    })
                }               
                reader.readAsDataURL(file)
            },
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
    .preservation{
        position: absolute;
        line-height: 80px;
        right: 15px;
        top: 0px;
        font-size: 28px;
    }
}
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:94px;
  width: 300px;
  padding:0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  height: 90px;
}
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput{
  display: none;
}
.caption {
  color: #8F8F8F;
  font-size: 26px;
  height: 37px;
}
</style>