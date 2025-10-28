import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "عسل ناب ایرانی",
  description: "بهترین عسل‌های طبیعی و ارگانیک ایران",
  lang: 'fa-IR',
  themeConfig: {
    // مسیردهی به استایل سفارشی
    // این خط را اضافه کنید
    custom: {
      css: '/theme/style.css'
    },
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'خانه', link: '/' },
      { text: 'محصولات', link: '/products' }, // صفحه محصولات جدید
      { text: 'تماس با ما', link: '/contact' } // صفحه تماس
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
