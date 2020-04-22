<template>
  <div class="player" v-if="songInfo">
    <div class="left">
      <img class="disc" src="../assets/img/disc.png" alt />
      <img class="cover" :src="songInfo.al.picUrl" alt />
    </div>
    <div class="right">
      <div class="title">
        <img src="../assets/img/tag.png" alt />
        <span>{{songInfo.name}}</span>
      </div>
      <div class="singer">
        歌手:
        <span>{{songInfo.ar | filterNames}}</span>
      </div>
      <div class="album">
        所属专辑:
        <span>{{songInfo.al.name}}</span>
      </div>
      <audio class="audio" controls :src='songUrl'></audio>
      <ul class="lyric-container">
        <li class="lyric" v-for="(item, index) in lyricArr" :key="index">
          {{item.split(']')[1]}}
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            songUrl:'',
            songInfo:'',
            lyricArr:[],
        }
    },
    filters:{
      filterNames(singerArr) {
      let newArr = singerArr.map(ele => {
        return ele.name;
      });
      return newArr.join(" | ");
    },
    },

    
    created() {
        let _id=this.$route.query.id;
        // 音频
        axios({
            url:'https://autumnfish.cn/song/url',
            params:{
                id:_id
            }
        }).then(res=>{
            console.log(res);
            this.songUrl=res.data.data[0].url;
        });
        // 歌曲信息
        axios({
            url:'https://autumnfish.cn/song/detail',
            params:{
                ids:_id
            }
        }).then(res=>{
            console.log(res);
            this.songInfo=res.data.songs[0];
        });
        // 歌词
        axios({
            url:'https://autumnfish.cn/lyric',
            params:{
                id:_id
            }
        }).then(res=>{
            console.log(res);
            this.lyricArr=res.data.lrc.lyric.split('\n');
        });
    },
};
</script>

<style>
</style>