<template>
  <div class="hello">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      imgList:[]
    };
  },

  created() {
    axios({
      url:'https://autumnfish.cn/banner'
    }).then(res=>{
      console.log(res);
      this.imgList=res.data.banners;
    })
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

