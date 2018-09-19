<template>
    <div id="ID">
           <div class="basic_head">
             <div class="arrow" @click="fn">&laquo;</div>
             <div class="head_cont">
                 ID
             </div>
        </div>
        <div class="map">
            <!-- <ginkgo-map ref="map" class="gingo-map" :gmapObj.sync="gmap" :options="mapOptions" :zoom.sync="zoom" :center.sync="center"
            :markers="markers" :polylines="polylines" :polygons="polygons" :circles="circles" :rectangles="rectangles" :texts="texts"
            :trackData="trackData" :trackOptions="trackOptions" :tracker.sync="tracker"
            :editData.sync="editData" :editer.sync="editer" :imageLayers="imageLayers">
            </ginkgo-map> -->
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