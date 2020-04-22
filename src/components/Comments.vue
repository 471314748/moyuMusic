<template>
    <div class="comment-wrapper">
    <div class="items" v-for="(item, index) in list" :key="index">
        <div class="item">
        <div class="left">
          <img :src="item.user.avatarUrl" alt="">
        </div>
        <div class="right">
          <div class="top">
            <span class='user'>{{item.user.nickname}}:</span>
            <span class='content'>{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | filterTime}}</div>
            <div class="like-wrapper">
                <span>👍</span>{{item.likedCount}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        let _id=this.$route.query.id;
        console.log(_id);
        axios({
            url:'https://autumnfish.cn/comment/music',
            params:{
                id:_id
            }
        }).then(res=>{
            // console.log(res);
            this.list=res.data.comments;
        })
    },
    filters:{
      filterTime(time){
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
      }
    }
}
</script>

<style>

</style>