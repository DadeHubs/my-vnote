   ---
layout: home
hero:
  name: "عسل ناب ایرانی"
  text: "طعم اصیل طبیعت در خانه شما"
  tagline: "مستقیم از کندو، با ضمانت کیفیت و خلوص"
  image:
    src: /images/bee_minimal.svg 
    alt: زنبور مینیمال
  actions:
    - theme: brand
      text: مشاهده محصولات 🍯
      link: #products
    - theme: alt
      text: درباره ما
      link: /about
---

<a id="products"></a>
## محصولات ویژه عسل

<div class="product-grid">
  <!-- محصول ۱: عسل گون -->
  <div class="product-card">
    <img src="/images/honig_gavan.jpg" alt="عسل گون" class="product-image">
    <div class="product-info">
      <h3>عسل گون</h3>
      <p>عسلی با طعم ملایم و خواص درمانی بی‌نظیر برای تقویت سیستم ایمنی.</p>
      <div class="product-price">
        <span class="price">۲۵۰,۰۰۰ تومان</span>
        <button class="buy-button">سفارش</button>
      </div>
    </div>
  </div>

  <!-- محصول ۲: عسل چهل گیاه -->
  <div class="product-card">
    <img src="/images/honig_40.jpg" alt="عسل چهل گیاه" class="product-image">
    <div class="product-info">
      <h3>عسل چهل گیاه</h3>
      <p>ترکیبی از شهد گل‌های کوهستان، یک بمب انرژی و سلامتی.</p>
      <div class="product-price">
        <span class="price">۳۰۰,۰۰۰ تومان</span>
        <button class="buy-button">سفارش</button>
      </div>
    </div>
  </div>

  <!-- محصول ۳: ژل رویال -->
  <div class="product-card">
    <img src="/images/royal_jelly.jpg" alt="ژل رویال" class="product-image">
    <div class="product-info">
      <h3>ژل رویال</h3>
      <p>غذای ملکه، ماده‌ای کمیاب با خواص فوق‌العاده برای جوانی و شادابی.</p>
      <div class="product-price">
        <span class="price">۱,۵۰۰,۰۰۰ تومان</span>
        <button class="buy-button">سفارش</button>
      </div>
    </div>
  </div>
</div>

<style scoped>
/* استایل‌های اختصاصی برای شبکه‌بندی محصولات */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; 
  margin-top: 40px;
  padding: 20px 0;
}

.product-card {
  background-color: #ffffff;
  border: 1px solid var(--vp-c-border); 
  border-radius: 12px;
  overflow: hidden; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px); 
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px; 
  object-fit: cover;
  border-bottom: 1px solid var(--vp-c-border);
}

.product-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h3 {
  color: var(--vp-c-brand-1);
  margin-top: 0;
  margin-bottom: 10px;
}

.product-info p {
  color: var(--vp-c-text-2);
  margin-bottom: 15px;
  font-size: 0.95em;
}

.product-price {
  margin-top: auto; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px dashed #eee;
}

.price {
  font-size: 1.5em;
  font-weight: 900; 
  color: #d97706; 
}

.buy-button {
  background-color: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px; 
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  font-weight: bold;
}

.buy-button:hover {
  background-color: var(--vp-c-brand-2);
  transform: scale(1.05);
}
</style>
 <h3>عسل گون</h3>
    <p>عسلی با طعم ملایم و خواص درمانی بی‌نظیر برای تقویت سیستم ایمنی.</p>
    <div class="product-price">
      <span class="price">۲۵۰,۰۰۰ تومان</span>
      <button class="buy-button">سفارش</button>
    </div>
  </div>

  <!-- محصول ۲: عسل چهل گیاه -->
  <div class="product-card">
    <img src="/images/honig_40.jpg" alt="عسل چهل گیاه" class="product-image">
    <h3>عسل چهل گیاه</h3>
    <p>ترکیبی از شهد گل‌های کوهستان، یک بمب انرژی و سلامتی.</p>
    <div class="product-price">
      <span class="price">۳۰۰,۰۰۰ تومان</span>
      <button class="buy-button">سفارش</button>
    </div>
  </div>

  <!-- محصول ۳: ژل رویال -->
  <div class="product-card">
    <img src="/images/royal_jelly.jpg" alt="ژل رویال" class="product-image">
    <h3>ژل رویال</h3>
    <p>غذای ملکه، ماده‌ای کمیاب با خواص فوق‌العاده برای جوانی و شادابی.</p>
    <div class="product-price">
      <span class="price">۱,۵۰۰,۰۰۰ تومان</span>
      <button class="buy-button">سفارش</button>
    </div>
  </div>
</div>

<style>
/* استایل‌های اختصاصی برای شبکه‌بندی محصولات */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.product-card {
  background-color: #ffffff;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-price {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-size: 1.4em;
  font-weight: bold;
  color: var(--vp-c-brand-1);
}

.buy-button {
  background-color: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-button:hover {
  background-color: var(--vp-c-brand-2);
}
</style>
