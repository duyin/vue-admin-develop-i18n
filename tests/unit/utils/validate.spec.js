/*
 * @Author: 杜印 m18612326243@163.com
 * @Date: 2021-11-19 15:21:54
 * @LastEditors: 杜印 m18612326243@163.com
 * @LastEditTime: 2022-10-19 19:10:49
 * @FilePath: /vue-admin-develop-i18n/tests/unit/utils/validate.spec.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { validUsername, isExternal } from '@/utils/validate.js'

describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin')).toBe(true)
    expect(validUsername('editor')).toBe(true)
    expect(validUsername('xxxx')).toBe(false)
  })
  it('isExternal', () => {
    expect(isExternal('https://github.com/duyin/vue-element-admin')).toBe(true)
    expect(isExternal('http://github.com/duyin/vue-element-admin')).toBe(true)
    expect(isExternal('github.com/duyin/vue-element-admin')).toBe(false)
    expect(isExternal('/home')).toBe(false)
    expect(isExternal('./home')).toBe(false)
    expect(isExternal('home')).toBe(false)
  })
})
