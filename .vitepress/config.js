import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DadeHub",
  description: "انبار شخصی بنده",
  lang: 'fa-IR', // تنظیم زبان به فارسی
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'لینک‌ها و لیست‌ها', link: 'posts/links' }
    ],

    sidebar: [
      {
        text: 'محتوای سایت',
        items: [
          { text: 'خانه', link: '/' },
          { text: 'لینک‌ها و لیست‌ها', link: 'posts/links' }
        ]
      }
    ],

    socialLinks: [
      // می‌توانید لینک گیت‌هاب خود را اینجا قرار دهید
      { icon: 'telegram', link: 'https://t.me/DadeHub' }
    ],

    // تنظیمات برای جستجو
    search: {
      provider: 'local'
    },

    // تنظیمات برای راست به چپ (RTL)
    dir: 'rtl'
  }
})
