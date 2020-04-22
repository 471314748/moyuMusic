<template>
  <div class="video" v-if="mvInfo!=''">
    <div class="title-wrapper">
      <span class="tag">MV</span>
      <span class="title">{{mvInfo.name}}</span>
      <span class="artist">{{mvInfo.artists | filterNames}}</span>
    </div>
    <video :src='mvInfo.brs | findMax' controls></video>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mvInfo: ""
    };
  },
  filters:{
    findMax(val){
      let _max = 0;
      for (let key in val) {
        if (Number(key)> _max) {
         _max = Number(key);
        }
       }
       return val[_max];
    },
    filterNames(singerArr) {
      let newArr = singerArr.map(ele => {
        return ele.name;
      });
      return newArr.join(" | ");
    },
  },
  created() {
    //从 url 中 获取 mvid
    let _id = this.$route.query.mvid;
    // https://autumnfish.cn/mv/detail?mvid=  mvid
    axios({
      url: "https://autumnfish.cn/mv/detail",
      params: {
        mvid: _id
      }
    }).then(res => {
      this.mvInfo = res.data.data;
        // console.log(res);
    });
  }
};
</script>

<style>
</style>