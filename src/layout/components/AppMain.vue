<!--
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2021-11-19 15:21:54
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-18 13:08:51
 * @FilePath: /vue-admin-develop-i18n/src/layout/components/AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
    <el-tooltip placement="top" content="backTop" v-if="gotop">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade" />
    </el-tooltip>
  </section>
</template>

<script>
import BackToTop from '@/components/BackToTop'
export default {
  name: 'AppMain',
  components: { BackToTop },
  data() {
    return {
      gotop: false,
      myBackToTopStyle: {
        right: '16px',
        bottom: '16px',
        width: '40px',
        height: '40px',
        'border-radius': '50%',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      }
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      const scrolltop = document.documentElement.scrollTop || document.body.scrollTop
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false)
    }
  }
}
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
