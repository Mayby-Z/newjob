// import * as ElementPlus from 'element-plus/dist/index.full'
/*import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: zhCn,
  })
})*/


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus);
});

