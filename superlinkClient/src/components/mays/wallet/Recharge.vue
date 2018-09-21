<template>
    <div id="Recharge">
         <div class="basic_head">
                <div class="arrow" @click="fn">&laquo;</div>
                <div class="head_cont">
                    充值
                </div>
        </div>
        <div class="Recharge_content">
            <span>钱包地址</span>
            <input type="text" placeholder="|输入地址" />
        </div>
         <div class="Recharge_amount">
            <span>输入金额</span>
            <input type="text" placeholder="0.00SLK"  />
            <p class="amount_title">
            	<span>可用余额：<span>8988989</span>.00SLK&nbsp;&nbsp;&nbsp;
            		手续费：<span>0</span>.00SLK
            	</span>
            </p>
        </div>
        <p class="Recharge_instr">
            禁止向SLK地址充值除SLK之外的资产，任何充值SLK地址的非SLK资产将不可找回。
        </p>
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
.Recharge_content{
	width: 94%;
	margin:0 auto;
	margin-top:24px!important;
	background: white;
    height: 110px;
    line-height: 110px;
    padding-left:32px;
    border-radius:12px;
    box-shadow: 0px 0px 30px rgba(0,0,0,.2);
    font-size: 32px;
    color:black;
    input{
    	outline: none;
    	border:0;
    	margin-left:18px;
    	font-size:30px ;
    }
}
.Recharge_amount{
	width:94%;
	margin:0 auto;
	background: white;
	height:220px;
	margin-top:24px!important;
	border-radius:12px;
	box-shadow: 0px 0px 30px rgba(0,0,0,.2s);
	position: relative;
	padding-left:32px;
	padding-top:36px;
	span{
		font-size:32px ;
		color:black;
	}
	input{
		width:400px;
		position: absolute;
		left:50%;
		margin-left: -200px;
		top:38%;
		height:80px;
		border:0;
		border-bottom:1px solid #f4f4f4;
		text-align: center;
	}
	input::-webkit-input-placeholder{
		color:#fe3263;
		font-size: 48px;
	}
	.amount_title{
		width:100%;
		text-align: center;
		margin-top:100px;
		span{
			font-size:24px;
			color:#999;
		}
	}
}
.Recharge_instr{
	width:94%;
	margin: 0 auto;
    font-size: 24px;
    color: #333;
    padding: 0px 15px;
    line-height: 40px;
    margin-top: 20px;
}
</style>