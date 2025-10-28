import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DadeHub",
  description: "انبار شخصی بنده",
  lang: 'fa-IR', // تنظیم زبان به فارسی
  
  // ==========================================================
  // ===== این خط جدید و بسیار مهم را اضافه کنید =====
  // ==========================================================
  exclude: ['**/admin/**'],

  themeConfig: {
    // ... بقیه themeConfig شما بدون هیچ تغییری در اینجا قرار می‌گیرد ...
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
      { icon: 'telegram', link: 'https://t.me/DadeHub' }
    ],
    search: {
      provider: 'local'
    },
    dir: 'rtl'
  }
})
