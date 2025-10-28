import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "عسل ناب ایرانی",
  description: "بهترین عسل‌های طبیعی و ارگانیک ایران",
  lang: 'fa-IR',
  themeConfig: {
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'محصولات', link: '/products' },
      { text: 'تماس با ما', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'فروشگاه عسل',
        items: [
          { text: 'خانه', link: '/' },
          { text: 'محصولات', link: '/products' },
          { text: 'درباره ما', link: '/about' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/YourHoneyChannel' },
      { icon: 'instagram', link: 'https://instagram.com/YourHoneyPage' }
    ],

    search: {
      provider: 'local'
    },

    dir: 'rtl'
  }
})
