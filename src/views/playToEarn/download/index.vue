<!--
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2022-10-19 17:01:05
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-19 17:15:24
 * @FilePath: /vue-admin-develop-i18n/src/views/events/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="download-container">
    <div class="download-text">{{ $t("Download") }}</div>
  </div>
</template>

<script>
export default {
  name: 'Download'
}
</script>
<style lang="scss" scoped>
.download {
  &-container {
    margin: 30px;
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
