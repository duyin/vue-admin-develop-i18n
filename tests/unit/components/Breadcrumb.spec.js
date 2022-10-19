/*
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2021-11-19 15:21:54
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-19 16:58:53
 * @FilePath: /vue-admin-develop-i18n/tests/unit/components/Breadcrumb.spec.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'home',
    children: [{
      path: 'home',
      name: 'Home'
    }]
  },
  {
    path: '/menu',
    name: 'menu',
    children: [{
      path: 'menu1',
      name: 'menu1',
      meta: { title: 'menu1' },
      children: [{
        path: 'menu1-1',
        name: 'menu1-1',
        meta: { title: 'menu1-1' }
      },
      {
        path: 'menu1-2',
        name: 'menu1-2',
        redirect: 'noredirect',
        meta: { title: 'menu1-2' },
        children: [{
          path: 'menu1-2-1',
          name: 'menu1-2-1',
          meta: { title: 'menu1-2-1' }
        },
        {
          path: 'menu1-2-2',
          name: 'menu1-2-2'
        }]
      }]
    }]
  }]

const router = new VueRouter({
  routes
})

describe('Breadcrumb.vue', () => {
  const wrapper = mount(Breadcrumb, {
    localVue,
    router
  })
  it('home', () => {
    router.push('/home')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(1)
  })
  it('normal route', () => {
    router.push('/menu/menu1')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(2)
  })
  it('nested route', () => {
    router.push('/menu/menu1/menu1-2/menu1-2-1')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(4)
  })
  it('no meta.title', () => {
    router.push('/menu/menu1/menu1-2/menu1-2-2')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(3)
  })
  // it('click link', () => {
  //   router.push('/menu/menu1/menu1-2/menu1-2-2')
  //   const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
  //   const second = breadcrumbArray.at(1)
  //   console.log(breadcrumbArray)
  //   const href = second.find('a').attributes().href
  //   expect(href).toBe('#/menu/menu1')
  // })
  // it('noRedirect', () => {
  //   router.push('/menu/menu1/menu1-2/menu1-2-1')
  //   const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
  //   const redirectBreadcrumb = breadcrumbArray.at(2)
  //   expect(redirectBreadcrumb.contains('a')).toBe(false)
  // })
  it('last breadcrumb', () => {
    router.push('/menu/menu1/menu1-2/menu1-2-1')
    const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
    const redirectBreadcrumb = breadcrumbArray.at(3)
    expect(redirectBreadcrumb.contains('a')).toBe(false)
  })
})
