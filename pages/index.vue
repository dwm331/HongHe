<template>
  <div class="wrapper">
    <Header />

    <!-- ─── Hero Slider ────────────────────────────────────────── -->
    <section id="hero" class="hero">
      <div class="slides-container">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="slide"
          :class="{ 'is-active': activeSlide === i }"
        >
          <div class="slide-content">
            <span class="slide-badge">I believe! I honghe!</span>
            <h1 class="slide-title">{{ slide.title }}</h1>
            <p class="slide-desc">{{ slide.desc }}</p>
            <a class="hero-btn" href="#products">探索產品</a>
          </div>
        </div>
      </div>

      <div class="slide-dots">
        <button
          v-for="(_, i) in slides"
          :key="i"
          :class="{ active: activeSlide === i }"
          @click="goSlide(i)"
          :aria-label="`Slide ${i + 1}`"
        ></button>
      </div>

      <div class="scroll-hint">
        <span>SCROLL DOWN</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- ─── Features ──────────────────────────────────────────── -->
    <section class="features">
      <div class="features-inner">
        <div v-for="f in features" :key="f.title" class="feature-card">
          <img :src="`/img/icon/${f.icon}`" :alt="f.title" class="feature-icon" />
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ─── Brand Story ─────────────────────────────────────── -->
    <section id="brand" class="about">
      <div class="about-inner">
        <div class="about-image">
          <img src="~/static/img/main.jpeg" alt="浤賀有限公司" />
        </div>
        <div class="about-text">
          <span class="sec-tag">ABOUT US</span>
          <h2>關於我們</h2>
          <div class="divider"></div>
          <p>成立於2018年，位於雲林縣的浤賀有限公司，是雲林縣最大蔬菜貿易公司之一，主要從事蔬果進口與批售業務。</p>
          <p>商品涵蓋大白菜、白蘿蔔、高麗菜、青花菜、美生菜、南瓜等多種蔬果，主要銷售通路包含果菜市場及餐廳食材。</p>
          <p class="about-address">📍 雲林縣虎尾鎮文科路1342號</p>
          <a
            class="outline-btn"
            href="https://www.facebook.com/%E6%B5%A4%E8%B3%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-196766557402879/"
            target="_blank" rel="noopener"
          >FB 粉絲專頁 →</a>
        </div>
      </div>
    </section>

    <!-- ─── Products ───────────────────────────────────────── -->
    <section id="products" class="products">
      <div class="sec-header">
        <span class="sec-tag">PRODUCTS</span>
        <h2>產品介紹</h2>
        <p>來自大地的鮮蔬，嚴選品質，新鮮直送</p>
      </div>
      <div class="products-grid">
        <div v-for="p in products" :key="p.name" class="product-card">
          <div
            class="product-thumb"
            :style="{ backgroundImage: `url('/img/${p.img}')` }"
          ></div>
          <div class="product-info">
            <h3>{{ p.name }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── News / Blog ─────────────────────────────────────── -->
    <section id="news" class="news">
      <div class="sec-header">
        <span class="sec-tag">NEWS</span>
        <h2>來自大地的鮮蔬</h2>
        <p>分享蔬果健康知識，讓您更了解每一口食材</p>
      </div>
      <div class="news-grid">
        <div v-for="n in news" :key="n.title" class="news-card">
          <div
            class="news-thumb"
            :style="{ backgroundImage: `url('/img/${n.img}')` }"
          ></div>
          <div class="news-body">
            <h3>{{ n.title }}</h3>
            <p>{{ n.excerpt }}</p>
            <span class="read-more">繼續閱讀 →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Videos ──────────────────────────────────────────── -->
    <section class="videos">
      <div class="sec-header">
        <span class="sec-tag">HEALTH</span>
        <h2>與你分享健康小知識</h2>
      </div>
      <div class="video-grid">
        <div v-for="v in videos" :key="v.title" class="video-wrap">
          <div class="video-placeholder">
            <img :src="`/img/${v.img}`" :alt="v.title" class="video-poster" />
            <div class="play-circle">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p class="video-title">{{ v.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Partners ────────────────────────────────────────── -->
    <section class="partners">
      <div class="sec-header">
        <h2>合作品牌</h2>
      </div>
      <div class="partners-row">
        <div v-for="p in partners" :key="p.name" class="partner-item">
          <img :src="p.img" :alt="p.name" />
          <span>{{ p.name }}</span>
        </div>
      </div>
    </section>

    <Footer />
    <div id="fb-root"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeSlide: 0,
      timer: null,
      slides: [
        {
          title: '每一步 都是邁向健康的一步',
          desc: '嚴選優質蔬果，從產地直送到您的餐桌'
        },
        {
          title: '美好生活 從均衡飲食開始',
          desc: '浤賀蔬果，讓每一餐都充滿營養與美味'
        },
        {
          title: '自然鮮蔬 一份蔬菜，一份健康',
          desc: '蔬果批發・進口，品質保證，新鮮到府'
        }
      ],
      features: [
        {
          icon: 'icon1.png',
          title: '國際貿易',
          desc: '與多個國家優質蔬果供應商合作，提供最新鮮的進口蔬果'
        },
        {
          icon: 'icon2.png',
          title: '信用交易',
          desc: '長期建立的商業信譽，與客戶維持穩定可靠的合作關係'
        },
        {
          icon: 'icon3.png',
          title: '高品質',
          desc: '嚴格把關蔬果品質，確保每一批貨物都達到最高標準'
        }
      ],
      products: [
        { name: '新鮮青花菜', desc: '富含維生素K，有益骨骼健康', img: 'v4_1.jpeg' },
        { name: '純淨高麗菜', desc: '均衡的營養素，適合各式料理', img: 'v3_1.jpeg' },
        { name: '馬鈴薯', desc: '低脂肪，有助於控制血糖與體重', img: 'v7_1.jpeg' },
        { name: '洋蔥', desc: '富含抗氧化物質，護心抗老', img: 'v5_1.jpeg' },
        { name: '韓流大白菜', desc: '豐富維生素，促進消化健康', img: 'v1_1.jpeg' },
        { name: '蘿蔔大長腿', desc: '改善血液循環，消暑解熱', img: 'v2_1.jpeg' },
        { name: '美生菜', desc: '高纖維蔬菜，助消化促代謝', img: 'v5_1.jpeg' },
        { name: '蘿蔓心', desc: '有益心臟健康的優質蔬菜', img: 'v6_1.jpeg' },
        { name: '大蒜', desc: '天然抗菌，預防感冒強身', img: 'v7_1.jpeg' }
      ],
      news: [
        {
          title: '跨越千里的故事',
          excerpt: '創辦人周冠誠的品牌故事，從雲林出發，走向國際蔬果貿易市場...',
          img: 'v4_1.jpeg'
        },
        {
          title: '大蒜－抗菌防感冒',
          excerpt: '大蒜含有天然抗菌成分，日常食用有效提升免疫力，遠離感冒困擾...',
          img: 'v7_1.jpeg'
        },
        {
          title: '洋蔥－營養豐富、抗氧化',
          excerpt: '洋蔥富含多種抗氧化物質，研究顯示每日攝取有助於延緩老化...',
          img: 'v5_1.jpeg'
        },
        {
          title: '大白菜－豐富維生素',
          excerpt: '冬季必備的大白菜，含豐富維生素C及膳食纖維，低卡路里好選擇...',
          img: 'v1_1.jpeg'
        },
        {
          title: '韓流大白菜－營養多，消化好',
          excerpt: '韓國進口大白菜口感爽脆，富含膳食纖維，幫助腸胃蠕動消化順暢...',
          img: 'v1_1.jpeg'
        },
        {
          title: '馬鈴薯－便宜又好吃',
          excerpt: '馬鈴薯是全方位健康食材，富含鉀、B6等營養素，飽足感強熱量適中...',
          img: 'v7_1.jpeg'
        }
      ],
      videos: [
        { title: '蔬果健康小知識', img: 'v4_1.jpeg' },
        { title: '蔬果清洗小技巧', img: 'v1_1.jpeg' }
      ],
      partners: [
        { name: '廉使蔬果生產合作社', img: '/img/logo.jpeg' },
        { name: '優質蔬果供應商', img: '/img/logo.jpeg' },
        { name: '農產品貿易夥伴', img: '/img/logo.jpeg' }
      ]
    }
  },
  mounted () {
    this.startTimer()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.activeSlide = (this.activeSlide + 1) % this.slides.length
      }, 5000)
    },
    goSlide (i) {
      this.activeSlide = i
      clearInterval(this.timer)
      this.startTimer()
    }
  }
}
</script>

<style>
/* ── Shared section header ─────────────────────────────── */
.sec-header {
  text-align: center;
  padding: 64px 24px 48px;
}
.sec-header .sec-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #2d6a2d;
  margin-bottom: 12px;
}
.sec-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
}
.sec-header p {
  font-size: 16px;
  color: #777;
  margin: 0;
}

/* ── Hero ─────────────────────────────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  background: #111;
}
.slides-container {
  position: absolute;
  inset: 0;
}
.slide {
  position: absolute;
  inset: 0;
  background-image: url('/img/main_bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.9s ease;
}
.slide.is-active { opacity: 1; }
.slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.15) 65%);
}
.slide-content {
  position: relative;
  padding: 0 10%;
  max-width: 700px;
  color: #fff;
}
.slide-badge {
  display: block;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 4px;
  color: #7fc97a;
  margin-bottom: 20px;
}
.slide-title {
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
.slide-desc {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 36px;
  line-height: 1.7;
}
.hero-btn {
  display: inline-block;
  padding: 14px 36px;
  background: #2d6a2d;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 1px;
  transition: background 0.2s, transform 0.2s;
}
.hero-btn:hover {
  background: #235523;
  transform: translateY(-2px);
}

/* Dots */
.slide-dots {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}
.slide-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}
.slide-dots button.active {
  background: #fff;
  transform: scale(1.35);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.65);
  font-size: 10px;
  letter-spacing: 3px;
  text-align: center;
  z-index: 10;
  pointer-events: none;
}
.scroll-arrow {
  font-size: 18px;
  margin-top: 4px;
  animation: bounce 1.6s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(7px); }
}

/* ── Features ─────────────────────────────────────────── */
.features {
  padding: 0 5%;
  background: #fff;
}
.features-inner {
  display: flex;
  gap: 32px;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 0;
}
.feature-card {
  flex: 1;
  max-width: 320px;
  text-align: center;
  padding: 40px 32px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s, box-shadow 0.25s;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.11);
}
.feature-icon {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 18px;
}
.feature-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #2d6a2d;
  margin-bottom: 12px;
}
.feature-card p {
  font-size: 14px;
  color: #777;
  line-height: 1.75;
  margin: 0;
}

/* ── About ────────────────────────────────────────────── */
.about { background: #f8faf8; }
.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 5%;
  display: flex;
  align-items: center;
  gap: 64px;
}
.about-image {
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}
.about-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.about-text { flex: 1; }
.about-text .sec-tag {
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #2d6a2d;
  margin-bottom: 12px;
}
.about-text h2 {
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
}
.divider {
  width: 48px;
  height: 3px;
  background: #2d6a2d;
  margin-bottom: 24px;
  border-radius: 2px;
}
.about-text p {
  font-size: 16px;
  color: #555;
  line-height: 1.85;
  margin-bottom: 12px;
}
.about-address {
  color: #2d6a2d !important;
  font-weight: 500 !important;
}
.outline-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 12px 28px;
  border: 2px solid #2d6a2d;
  color: #2d6a2d;
  font-size: 15px;
  font-weight: 600;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.outline-btn:hover {
  background: #2d6a2d;
  color: #fff;
}

/* ── Products ─────────────────────────────────────────── */
.products { padding-bottom: 80px; background: #fff; }
.products-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.product-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.13);
}
.product-thumb {
  height: 200px;
  background-size: cover;
  background-position: center;
}
.product-info { padding: 20px 24px; }
.product-info h3 {
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
}
.product-info p {
  font-size: 13px;
  color: #888;
  margin: 0;
  line-height: 1.65;
}

/* ── News ─────────────────────────────────────────────── */
.news { background: #f8faf8; padding-bottom: 80px; }
.news-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.news-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s;
  cursor: pointer;
}
.news-card:hover { transform: translateY(-5px); }
.news-thumb {
  height: 180px;
  background-size: cover;
  background-position: center;
}
.news-body { padding: 20px 24px; }
.news-body h3 {
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
}
.news-body p {
  font-size: 13px;
  color: #888;
  line-height: 1.75;
  margin-bottom: 12px;
}
.read-more {
  font-size: 13px;
  color: #2d6a2d;
  font-weight: 600;
}

/* ── Videos ───────────────────────────────────────────── */
.videos { background: #fff; padding-bottom: 80px; }
.video-grid {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.video-wrap { border-radius: 12px; overflow: hidden; }
.video-placeholder {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  cursor: pointer;
  background: #111;
}
.video-poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  transition: opacity 0.25s;
  display: block;
}
.video-placeholder:hover .video-poster { opacity: 0.35; }
.play-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(45, 106, 45, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.video-placeholder:hover .play-circle {
  transform: translate(-50%, -50%) scale(1.1);
  background: #2d6a2d;
}
.video-title {
  position: absolute;
  bottom: 16px;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

/* ── Partners ─────────────────────────────────────────── */
.partners { background: #f8faf8; padding-bottom: 64px; }
.partners-row {
  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5% 20px;
}
.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #666;
  font-size: 14px;
}
.partner-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  filter: grayscale(30%);
  transition: filter 0.2s, transform 0.2s;
}
.partner-item:hover img {
  filter: none;
  transform: scale(1.05);
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .sec-header { padding: 48px 16px 32px; }
  .sec-header h2 { font-size: 24px; }

  .slide-content { padding: 0 6%; }
  .slide-desc { font-size: 15px; }

  .features-inner {
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
  }
  .feature-card { width: 100%; max-width: 100%; }

  .about-inner {
    flex-direction: column;
    gap: 32px;
    padding: 48px 5%;
  }

  .products-grid { grid-template-columns: 1fr; }
  .news-grid { grid-template-columns: 1fr; }
  .video-grid { grid-template-columns: 1fr; }

  .partners-row { gap: 32px; }
}

@media (max-width: 480px) {
  .slide-title { font-size: 26px; }
  .hero-btn { padding: 12px 28px; }
  .about-text h2 { font-size: 24px; }
}
</style>
