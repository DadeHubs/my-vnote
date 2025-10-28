// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import HoneycombBackground from './HoneycombBackground.vue'
import './style.css' // بارگذاری استایل‌های سفارشی

export default {
  ...DefaultTheme,
  Layout: {
    template: `
      <DefaultTheme.Layout />
      <HoneycombBackground />
    `,
    components: {
      DefaultTheme,
      HoneycombBackground
    }
  }
}
