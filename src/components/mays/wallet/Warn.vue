<template>
    <div id="Warn">
        <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    转账
                </div>
        </div>
        <div class="Warn_content">
            <ul>
                <li>
                    <span>收钱人钱包地址</span>
                </li>
                <li>
                    <span>数量</span>
                    <input type="text" placeholder="可用余额0.0000SLK">
                </li>
                <li>
                    <span>备注</span>
                    <input type="text">
                </li>
                <li>
                    <span>手续费</span>
                </li>
            </ul>
        </div>
        <div class="next_step_footer">
             <button>
                 确认转账
             </button>
         </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
             fn(){
                 this.$router.go(-1)
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
}
.Warn_content{
    ul{
        li{
            height: 80px;
            line-height: 80px;
            padding: 0px 15px;
            span{
                float: left;
            }
            input{
                float: left;
                overflow: hidden;
                border: none;
                width: 300px;
                height: 80px;
                margin-left: 300px;
            }
        }
    }
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