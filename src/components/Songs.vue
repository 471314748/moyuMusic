<template>
  <div class="result-wrapper">
    <div class="song" v-for="(item, index) in songList" :key="index">
      <div class="name" @dblclick="goComments(item.id)">
        <span class="iconfont icon-play" @click="playSog(item.id)"></span>
        {{item.name}}
        <span class="iconfont icon-editmedia"
         @click="goMV(item.mvid)" 
        v-if='item.mvid>0'></span>
      </div>
      <div class="singer">{{item.artists | filterNames}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration | filterTime}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      songList: []
    };
  },
  methods: {
    playSog(playId){
      this.$router.push('/player?id='+playId);
    },
    goMV(mvid){
      console.log("跳转到 mv页面：" + "/MV?mvid=" + mvid);
      this.$router.push('/MV?mvid='+mvid);
    },
    goComments(id){
      this.$router.push('/Comments?id='+id);
    },
    requestSongs() {
      let keyword = this.$route.query.q;
      axios({
        url: "https://autumnfish.cn/search",
        method: "get",
        params: {
          keywords: keyword
        }
      }).then(res => {
        console.log(res);
        this.songList = res.data.result.songs;
      });
    },
    
  },
  filters: {
    filterTime(time) {
      let _m = "0000" + Math.floor(time / 1000 / 60);
      let _s = "0000" + Math.floor((time / 1000) % 60);
      return _m.slice(-2) + ":" + _s.slice(-2);
    },
    filterNames(singerArr) {
      let newArr = singerArr.map(ele => {
        return ele.name;
      });
      return newArr.join(" | ");
    },
    
  },
  watch: {
    '$route.query.q'() {
      this.requestSongs();
    }
  },
  created() {
    this.requestSongs();
  }
};
</script>

<style>
</style>