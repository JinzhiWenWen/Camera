<template>
    <div id="Living_thing">
           <div class="basic_head">
             <div class="arrow" @click="Last_step">&laquo;</div>
             <div class="head_cont">
                 活体认证
             </div>
            <div>
            <div id="all">
              <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style">
              <div id="allmap"></div>
            </div>
            <button type="button" name="button" @click="fn2()">我正在看着你</button>
            </div>
        </div>
    </div>
</template>

<script>
 import {MP} from '@/assets/js/map.js'
    export default {
        data(){
            return {
                address_detail: null, //详细地址
                userlocation: {lng: "", lat: ""},
                "location":{
                    "lo":"",
                    "la":""
                }
            }
        },
        mounted(){
          this.$nextTick(() => {
            this.fn2()
          	})
        },
        methods:{
            Last_step(){
                 this.$router.go(-1)
            },
            fn2(){
                let _this=this;
                    var th = _this
                    var map = new BMap.Map("allmap");            // 创建Map实例
                    var point = new BMap.Point(116.404, 39.915); // 创建点坐标
                    map.centerAndZoom(point,15);
                    map.enableScrollWheelZoom();
                    var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
                      {
                        "input" : "suggestId",
                        "location" : map
                      })
                    var myValue
                    ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
                      var _value = e.item.value;
                      myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
                      this.address_detail = myValue
                      setPlace();
                    });
                    function setPlace(){
                    map.clearOverlays();    //清除地图上所有覆盖物
                    function myFun(){
                      th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                      _this.location=th.userlocation;
                      console.log("经纬度",_this.location)
                      map.centerAndZoom(th.userlocation, 18);
                      map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
                    }
                      var local = new BMap.LocalSearch(map, { //智能搜索
                      onSearchComplete: myFun
                    });
                    local.search(myValue);
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
#allmap{
        width: 400px;
        height: 400px;
        font-family: "微软雅黑";
        border:1px solid green;
    }
</style>
