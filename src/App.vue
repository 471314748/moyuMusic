<template>
  <div id="player">
    <h2 class="title" @click="backHome">摸鱼音乐</h2>
    <div class="search">
      <input type="text" v-model="keywrod" @keyup.enter="SearchSong" />
      <button @click="SearchSong">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      keywrod: ""
    };
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    SearchSong() {
      if (this.keywrod.length == 0) {
        alert("请不要攻击我们弱小可怜又无助的服务器！！！");
      } else {
        this.$router.push("/Songs?q=" + this.keywrod);
      }
    }
  }
};
</script>

<style>
@import url(./assets/css/index.css);
@import url(./assets/css/iconfont.css);
</style>
