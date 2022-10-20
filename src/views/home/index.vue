<!--
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2021-11-19 15:21:54
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-20 10:40:56
 * @FilePath: /vue-admin-template-master/src/views/dashboard/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">{{ $t('login.title') }}</div> -->
    <div id="msg" class="dashboard-video" />
    <video
      :src="videoUrl"
      controls
      :autoPlay="video"
      style="width: 300px; height: 200px"
    />
    <i class="iconfont iconrocket" />
    <svg-icon icon-class="rocket" />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconshanchu2" />
    </svg>
    <svg-icon icon-class="iconhuojian" />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#iconhuojian" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Player from 'xgplayer'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default {
  name: 'Home',
  data() {
    return {
      videoUrl: 'https://static.abeats.com/website/video/game_battle.mp4',
      video: true
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    const player = new Player({
      id: 'msg',
      autoplay: true,
      url: 'https://static.abeats.com/website/video/game_battle.mp4',
      poster: 'https://www.abeats.com/static/hero/video_battle.webp',
      playsinline: true,
      loop: true,
      playbackRate: [0.5, 0.75, 1, 1.5, 2],
      videoInit: true,
      download: true,
      fluid: true,
      pip: false,
      miniplayer: true,
      thumbnail: {
        pic_num: 44,
        width: 160,
        height: 90,
        col: 10,
        row: 10,
        urls: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
        ],
        isShowCoverPreview: false
      },
      miniplayerConfig: {
        bottom: 200,
        right: 0,
        width: 320,
        height: 180
      }
    })
    console.log(player)
    // player.play()
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
.dashboard {

  &-container {
    margin: 30px;
    height: 1000px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  &-video {
    width: 600px !important;
    height: 200px !important;
  }

}
</style>
<style>
  .wenzi{
    width:30px;
    height: 30px;;
  }
</style>
