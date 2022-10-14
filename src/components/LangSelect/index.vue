<!--
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2022-10-14 13:22:49
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-14 15:06:18
 * @FilePath: /vue-admin-template-master/src/components/LangSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div style="font-size: 12px;">
      <!-- <svg-icon class-name="international-icon" icon-class="language" /> -->
      切换语言  <i class="el-icon-arrow-down el-icon--right"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">
        中文
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">
        English
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">
        Español
      </el-dropdown-item>
      <el-dropdown-item :disabled="language==='ja'" command="ja">
        日本語
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      console.log(this.$i18n.locale, 'lang', lang)
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
