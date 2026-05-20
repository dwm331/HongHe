<template>
  <div class="wrapper">
    <Header />

    <!-- ─── Hero Slider ────────────────────────────────────────── -->
    <section class="hero">
      <div class="slides-container">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="slide"
          :class="['is-' + slide.theme, { 'is-active': activeSlide === i }]"
          :style="{ backgroundImage: `url(${$imgPath(slide.bg)})` }"
        >
          <div class="slide-content">
            <span class="slide-badge">I believe! I honghe!</span>
            <h1 class="slide-title">{{ slide.title }}</h1>
            <p class="slide-sub">{{ slide.sub }}</p>
          </div>
        </div>
      </div>
      <div class="slide-dots">
        <button
          v-for="(_, i) in slides"
          :key="i"
          :class="{ active: activeSlide === i }"
          @click="goSlide(i)"
        ></button>
      </div>
      <div class="scroll-hint">
        <span>SCROLL DOWN</span>
        <div class="scroll-arrow">↓</div>
      </div>
    </section>

    <!-- ─── Category Banners ───────────────────────────────────── -->
    <section class="cat-banners">
      <div class="cat-col cat-col-left">
        <nuxt-link
          v-for="item in catLeft"
          :key="item.name"
          :to="item.link"
          class="cat-item"
        >
          <div class="cat-img-wrap">
            <img :src="$imgPath(item.img)" :alt="item.name" />
          </div>
          <div class="cat-info">
            <span class="cat-label">{{ item.label }}</span>
            <h4 class="cat-title">{{ item.name }}</h4>
            <p class="cat-desc">{{ item.desc }}</p>
          </div>
        </nuxt-link>
      </div>
      <div class="cat-col cat-col-right">
        <nuxt-link
          v-for="item in catRight"
          :key="item.name"
          :to="item.link"
          class="cat-item"
        >
          <div class="cat-img-wrap">
            <img :src="$imgPath(item.img)" :alt="item.name" />
          </div>
          <div class="cat-info">
            <span class="cat-label">{{ item.label }}</span>
            <h4 class="cat-title">{{ item.name }}</h4>
            <p class="cat-desc">{{ item.desc }}</p>
          </div>
        </nuxt-link>
      </div>
    </section>

    <!-- ─── 公司資訊 ────────────────────────────────────────────── -->
    <section class="company-section">
      <div class="company-inner">
        <div class="company-text">
          <h2>公司資訊</h2>
          <p>歡迎蒞臨，邀您指導</p>
          <a
            class="company-addr"
            href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9"
            target="_blank" rel="noopener"
          >our address</a>
        </div>
        <div class="company-images">
          <a href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9" target="_blank" rel="noopener" class="company-img-link">
            <img :src="$imgPath('company-1.jpg')" alt="公司位置" />
          </a>
          <a href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9" target="_blank" rel="noopener" class="company-img-link">
            <img :src="$imgPath('company-map.jpg')" alt="地圖" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 產品介紹 post grid ──────────────────────────────────── -->
    <section class="post-section">
      <div class="post-section-header">
        <div>
          <h2>產品介紹</h2>
          <p>來自大地的鮮蔬</p>
        </div>
        <nuxt-link to="/products/domestic" class="our-blog-link">OUR BLOG</nuxt-link>
      </div>
      <div class="post-grid">
        <div v-for="p in posts" :key="p.slug" class="post-card">
          <nuxt-link :to="`/news/${p.slug}`" class="post-thumb">
            <img :src="$imgPath(p.img)" :alt="p.title" />
          </nuxt-link>
          <div class="post-summary">
            <h5 class="post-title">
              <nuxt-link :to="`/news/${p.slug}`">{{ p.title }}</nuxt-link>
            </h5>
            <p class="post-excerpt">{{ p.excerpt }}</p>
            <nuxt-link :to="`/news/${p.slug}`" class="continue-reading">Continue reading</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 影音專區 ────────────────────────────────────────────── -->
    <section class="video-section">
      <div class="video-section-header">
        <h2>影音專區</h2>
        <p>與你分享健康小知識</p>
      </div>
      <div class="video-grid">
        <div class="video-item">
          <div class="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/0Rl1tpOEwn4?controls=1&rel=0"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="越吃越凍齡"
            ></iframe>
          </div>
          <p>越吃越凍齡！青花菜、洋蔥、大蒜、菠菜等蔬菜，讓你年輕10歲!</p>
        </div>
        <div class="video-item">
          <div class="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/HEgcOPW45ZQ?controls=1&rel=0"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="蔬果如何洗"
            ></iframe>
          </div>
          <p>蔬果如何洗? 教你洗出不殘留農藥的健康好蔬果</p>
        </div>
      </div>
    </section>

    <!-- ─── 合作品牌 ─────────────────────────────────────────────── -->
    <section class="partner-section">
      <div class="partner-inner">
        <div class="partner-text">
          <h2>合作品牌</h2>
          <p>歡迎與我們合作</p>
        </div>
        <div class="partner-imgs">
          <img :src="$imgPath('partner1.jpg')" alt="合作品牌1" />
          <img :src="$imgPath('partner2.jpeg')" alt="合作品牌2" />
          <img :src="$imgPath('partner3.jpg')" alt="合作品牌3" />
        </div>
      </div>
    </section>

    <Footer />
    <div id="fb-root"></div>
  </div>
</template>

<script>
import allNews from '~/assets/data/news.js'

export default {
  data () {
    return {
      activeSlide: 0,
      timer: null,
      slides: [
        { bg: 'banner-slide1.jpg', theme: 'light', title: '每一步', sub: '都是邁向健康的一步' },
        { bg: 'banner-slide2.jpg', theme: 'dark',  title: '美好生活', sub: '從均衡飲食開始' },
        { bg: 'products-banner.jpg', theme: 'light', title: '自然鮮蔬', sub: '一份蔬菜，一份健康' }
      ],
      catLeft: [
        { img: 'cat-broccoli.jpg', name: '新鮮青花菜', desc: '富含維生素K，骨骼堅固，活力無限', label: 'See Our News', link: '/news/brand-story' },
        { img: 'cat-cabbage.jpg',  name: '純淨高麗菜', desc: '清爽健康，營養均衡，全家人喜歡吃', label: 'Explore Now', link: '/products/domestic' },
        { img: 'cat-potato2.jpg', name: '馬鈴薯', desc: '減脂、防癌、穩定血糖與調整血壓好幫手', label: 'See Our News', link: '/news/potato-healthy-cheap' },
        { img: 'cat-onion.jpg',   name: '洋蔥', desc: '營養豐富，抗氧化，健康生活有保障', label: 'Explore Now', link: '/news/onion-nutrition-antioxidant' }
      ],
      catRight: [
        { img: 'cat-napa.jpg',    name: '韓流大白菜', desc: '營養多多，消化好，身心健康不煩惱', label: 'Explore Now', link: '/news/korean-napa-cabbage' },
        { img: 'cat-radish.jpg',  name: '蘿蔔大長腿', desc: '營養豐富，血液暢通，健康有保障', label: 'See Our News', link: '/products/domestic' },
        { img: 'cat-lettuce.jpg', name: '萵苣', desc: '脆爽多汁，纖維豐富，身心健康好選擇', label: 'Explore Now', link: '/products/domestic' },
        { img: 'cat-romaine.jpg', name: '蘿蔓心', desc: '脆甜可口，纖維豐富，心臟健康保駕護航', label: 'Explore Now', link: '/products/domestic' },
        { img: 'cat-garlic.jpg',  name: '大蒜', desc: '抗菌防感冒，健康生活無憂慮', label: 'Explore Now', link: '/news/garlic-antibacterial' }
      ],
      posts: allNews.filter(n => n.categories.includes('國產蔬菜'))
    }
  },
  mounted () { this.startTimer() },
  beforeDestroy () { clearInterval(this.timer) },
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
/* ── Hero ─────────────────────────────────────────────── */
.hero {
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
}
.slides-container { position: absolute; inset: 0; }
.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.9s ease;
  display: flex;
  align-items: center;
}
.slide.is-active { opacity: 1; }
.slide.is-light::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 60%);
}
.slide.is-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 60%);
}
.slide-content {
  position: relative;
  padding: 0 8%;
}
.slide.is-light .slide-content { color: #fff; }
.slide.is-dark  .slide-content { color: #161619; }
.slide-badge {
  display: block;
  font-size: 14px;
  letter-spacing: 2px;
  margin-bottom: 16px;
  font-weight: 400;
}
.slide.is-light .slide-badge { color: rgba(255,255,255,0.85); }
.slide.is-dark  .slide-badge { color: #161619; }
.slide-title {
  font-size: clamp(48px, 8vw, 90px);
  font-weight: 500;
  line-height: 1.1;
  margin: 0 0 8px;
}
.slide-sub {
  font-size: 18px;
  letter-spacing: 10px;
  margin: 0;
  font-weight: 400;
}
.slide.is-dark .slide-sub { letter-spacing: 5px; }
.slide-dots {
  position: absolute;
  bottom: 40px;
  left: 8%;
  display: flex;
  gap: 25px;
  z-index: 10;
}
.slide-dots button {
  width: 8px; height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
}
.slide-dots button.active { background: #fff; }
.scroll-hint {
  position: absolute;
  bottom: 24px;
  right: 40px;
  color: #161619;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  z-index: 10;
}
.scroll-arrow {
  font-size: 18px;
  margin-top: 4px;
  animation: bounce 1.6s ease-in-out infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

/* ── Category Banners ─────────────────────────────────── */
.cat-banners {
  display: flex;
  background: #fff;
}
.cat-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.cat-item {
  display: block;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #f0f0f0;
}
.cat-item:last-child { border-bottom: none; }
.cat-img-wrap {
  overflow: hidden;
}
.cat-img-wrap img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.cat-item:hover .cat-img-wrap img { transform: scale(1.04); }
.cat-info {
  padding: 16px 20px 20px;
}
.cat-label {
  font-size: 11px;
  letter-spacing: 2px;
  color: #aaa;
  text-transform: uppercase;
  display: block;
  margin-bottom: 6px;
}
.cat-title {
  font-size: 17px;
  font-weight: 600;
  color: #222;
  margin: 0 0 6px;
}
.cat-desc {
  font-size: 13px;
  color: #777;
  margin: 0;
  line-height: 1.6;
}

/* ── Company ──────────────────────────────────────────── */
.company-section {
  background: #f8f8f6;
  padding: 56px 5%;
}
.company-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: center;
}
.company-text h2 {
  font-size: 26px;
  font-weight: 600;
  color: #222;
  margin: 0 0 10px;
}
.company-text p {
  font-size: 15px;
  color: #777;
  margin: 0 0 14px;
}
.company-addr {
  font-size: 12px;
  letter-spacing: 3px;
  color: #555;
  text-transform: lowercase;
  text-decoration: underline;
}
.company-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.company-img-link { display: block; overflow: hidden; }
.company-img-link img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.company-img-link:hover img { transform: scale(1.03); }

/* ── Post Grid ────────────────────────────────────────── */
.post-section {
  padding: 56px 5% 64px;
  background: #fff;
}
.post-section-header {
  max-width: 1200px;
  margin: 0 auto 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 20px;
}
.post-section-header h2 {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin: 0 0 4px;
}
.post-section-header p {
  font-size: 14px;
  color: #888;
  margin: 0;
}
.our-blog-link {
  font-size: 12px;
  letter-spacing: 3px;
  color: #555;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}
.post-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.post-card { display: flex; flex-direction: column; }
.post-thumb {
  display: block;
  overflow: hidden;
  margin-bottom: 16px;
}
.post-thumb img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.post-card:hover .post-thumb img { transform: scale(1.04); }
.post-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px;
  line-height: 1.5;
}
.post-title a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
}
.post-title a:hover { color: #555; }
.post-excerpt {
  font-size: 13px;
  color: #888;
  line-height: 1.75;
  margin: 0 0 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.continue-reading {
  font-size: 13px;
  color: #222;
  border: 1px solid #222;
  padding: 8px 18px;
  display: inline-block;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  align-self: flex-start;
  margin-top: auto;
}
.continue-reading:hover { background: #222; color: #fff; }

/* ── Video ────────────────────────────────────────────── */
.video-section {
  padding: 56px 5% 64px;
  background: #f8f8f6;
}
.video-section-header {
  max-width: 1200px;
  margin: 0 auto 32px;
}
.video-section-header h2 {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin: 0 0 4px;
}
.video-section-header p {
  font-size: 14px;
  color: #888;
  margin: 0;
}
.video-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.video-item p {
  font-size: 13px;
  color: #666;
  margin: 12px 0 0;
  line-height: 1.6;
}
.video-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
}
.video-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* ── Partner ──────────────────────────────────────────── */
.partner-section {
  padding: 56px 5%;
  background: #fff;
}
.partner-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: center;
}
.partner-text h2 {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin: 0 0 8px;
}
.partner-text p {
  font-size: 14px;
  color: #888;
  margin: 0;
}
.partner-imgs {
  display: flex;
  gap: 16px;
  align-items: center;
}
.partner-imgs img {
  flex: 1;
  width: 0;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .post-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .cat-banners { flex-direction: column; }
  .cat-img-wrap img { height: 180px; }
  .company-inner { grid-template-columns: 1fr; }
  .company-images { grid-template-columns: 1fr; }
  .post-grid { grid-template-columns: 1fr; }
  .video-grid { grid-template-columns: 1fr; }
  .partner-inner { grid-template-columns: 1fr; }
  .partner-imgs { flex-wrap: wrap; }
  .partner-imgs img { width: 30%; flex: none; }
  .slide-sub { letter-spacing: 3px; }
}
</style>
