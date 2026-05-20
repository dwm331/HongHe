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
            <a class="slide-sub">{{ slide.sub }}</a>
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
    <section class="cat-section">
      <div class="cat-col cat-col-left">
        <div
          v-for="item in catLeft"
          :key="item.name"
          class="konte-category-banner align-left title-bottom"
        >
          <nuxt-link :to="item.link" class="konte-category-banner__link">
            <span class="konte-category-banner__category">{{ item.label }}</span>
            <span class="konte-category-banner__image">
              <img :src="$imgPath(item.img)" :alt="item.name" />
            </span>
            <span class="konte-category-banner__content">
              <h4 class="konte-category-banner__title">{{ item.name }}</h4>
              <span class="konte-category-banner__button">{{ item.desc }}</span>
            </span>
          </nuxt-link>
        </div>
      </div>
      <div class="cat-col cat-col-right">
        <div
          v-for="item in catRight"
          :key="item.name"
          class="konte-category-banner align-right title-bottom"
        >
          <nuxt-link :to="item.link" class="konte-category-banner__link">
            <span class="konte-category-banner__category">{{ item.label }}</span>
            <span class="konte-category-banner__image">
              <img :src="$imgPath(item.img)" :alt="item.name" />
            </span>
            <span class="konte-category-banner__content">
              <h4 class="konte-category-banner__title">{{ item.name }}</h4>
              <span class="konte-category-banner__button">{{ item.desc }}</span>
            </span>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- ─── 公司資訊 ────────────────────────────────────────────── -->
    <section class="company-section">
      <div class="company-inner">
        <div class="company-text-block">
          <h2>公司資訊</h2>
          <p>歡迎蒞臨，邀您指導</p>
          <a
            href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9"
            target="_blank" rel="noopener"
            class="addr-link"
          >our address</a>
        </div>
        <div class="company-images">
          <a href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9" target="_blank" rel="noopener">
            <img :src="$imgPath('company-1.jpg')" alt="公司照片" />
          </a>
          <a href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9" target="_blank" rel="noopener">
            <img :src="$imgPath('company-map.jpg')" alt="地圖" />
          </a>
        </div>
      </div>
    </section>

    <!-- ─── 產品介紹 Post Grid ──────────────────────────────────── -->
    <section class="post-section">
      <div class="post-section-head">
        <div class="post-head-left">
          <h2>產品介紹</h2>
          <p>來自大地的鮮蔬</p>
        </div>
        <nuxt-link to="/products/domestic" class="our-blog-link">OUR BLOG</nuxt-link>
      </div>
      <div class="konte-post-grid columns-3 columns-gap-40 konte-post-grid--elementor">
        <div v-for="p in posts" :key="p.slug" class="hentry">
          <nuxt-link :to="`/news/${p.slug}`" class="post-thumbnail">
            <img :src="$imgPath(p.img)" :alt="p.title" />
          </nuxt-link>
          <div class="konte-post-grid__summary">
            <h5 class="post-title">
              <nuxt-link :to="`/news/${p.slug}`">{{ p.title }}</nuxt-link>
            </h5>
            <div class="post-summary">{{ p.excerpt }}</div>
            <nuxt-link :to="`/news/${p.slug}`" class="button alt">Continue reading</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── 影音專區 ────────────────────────────────────────────── -->
    <section class="video-section">
      <div class="video-head">
        <h2>影音專區</h2>
        <p>與你分享健康小知識</p>
      </div>
      <div class="video-grid">
        <div class="video-item">
          <div class="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/0Rl1tpOEwn4?controls=1&rel=0"
              frameborder="0" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <p>越吃越凍齡！青花菜、洋蔥、大蒜、菠菜等蔬菜，讓你年輕10歲!</p>
        </div>
        <div class="video-item">
          <div class="video-wrap">
            <iframe
              src="https://www.youtube.com/embed/HEgcOPW45ZQ?controls=1&rel=0"
              frameborder="0" allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
        { bg: 'banner-slide1.jpg', theme: 'light', title: '每一步',  sub: '都是邁向健康的一步' },
        { bg: 'banner-slide2.jpg', theme: 'dark',  title: '美好生活', sub: '從均衡飲食開始' },
        { bg: 'products-banner.jpg', theme: 'light', title: '自然鮮蔬', sub: '一份蔬菜，一份健康' }
      ],
      catLeft: [
        { img: 'cat-broccoli.jpg', name: '新鮮青花菜', desc: '富含維生素K，骨骼堅固，活力無限',            label: 'See Our News', link: '/products/domestic' },
        { img: 'cat-cabbage.jpg',  name: '純淨高麗菜', desc: '清爽健康，營養均衡，全家人喜歡吃',          label: 'Explore Now',  link: '/products/domestic' },
        { img: 'cat-potato2.jpg', name: '馬鈴薯',     desc: '減脂、防癌、穩定血糖與調整血壓好幫手',     label: 'See Our News', link: '/news/potato-healthy-cheap' },
        { img: 'cat-onion.jpg',   name: '洋蔥',       desc: '營養豐富，抗氧化，健康生活有保障',          label: 'Explore Now',  link: '/news/onion-nutrition-antioxidant' }
      ],
      catRight: [
        { img: 'cat-napa.jpg',    name: '韓流大白菜', desc: '營養多多，消化好，身心健康不煩惱',          label: 'Explore Now',  link: '/news/korean-napa-cabbage' },
        { img: 'cat-radish.jpg',  name: '蘿蔔大長腿', desc: '營養豐富，血液暢通，健康有保障',            label: 'See Our News', link: '/products/domestic' },
        { img: 'cat-lettuce.jpg', name: '萵苣',       desc: '脆爽多汁，纖維豐富，身心健康好選擇',        label: 'Explore Now',  link: '/products/domestic' },
        { img: 'cat-romaine.jpg', name: '蘿蔓心',     desc: '脆甜可口，纖維豐富，心臟健康保駕護航',      label: 'Explore Now',  link: '/products/domestic' },
        { img: 'cat-garlic.jpg',  name: '大蒜',       desc: '抗菌防感冒，健康生活無憂慮',               label: 'Explore Now',  link: '/news/garlic-antibacterial' }
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
  background: linear-gradient(135deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.08) 60%);
}
.slide.is-dark::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 60%);
}
.slide-content {
  position: relative;
  padding: 0 8%;
}
.slide.is-light .slide-content { color: #fff; }
.slide.is-dark  .slide-content { color: #161619; }
.slide-badge {
  display: block;
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-weight: 400;
}
.slide-title {
  font-size: clamp(52px, 8vw, 90px);
  font-weight: 500;
  line-height: 1.1;
  margin: 0 0 8px;
}
.slide-sub {
  display: block;
  font-size: 18px;
  letter-spacing: 10px;
  font-weight: 400;
  border-bottom: 1px solid currentColor;
  padding-bottom: 6px;
  display: inline-block;
}
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
  border: 1px solid rgba(255,255,255,0.7);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s;
  box-shadow: inset 0 0 0 0 #fff;
}
.slide-dots button.active {
  box-shadow: inset 0 0 0 8px #fff;
  border-color: #fff;
}
.scroll-hint {
  position: absolute;
  bottom: 36px;
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

/* ── Category Banners (matching konte-category-banner CSS) ── */
.cat-section {
  display: flex;
  background: #fff;
}
.cat-col {
  flex: 1;
  padding: 0 25px;
}
.cat-col-left  { padding-left: 60px; }
.cat-col-right { padding-right: 60px; }

/* Matches original: .konte-category-banner */
.konte-category-banner {
  margin-bottom: 30px;
}
.konte-category-banner__link {
  display: inline-block;
  position: relative;
  max-width: 100%;
  text-decoration: none;
  color: inherit;
}
/* Rotated label - align-left */
.konte-category-banner.align-left .konte-category-banner__category {
  transform: translateX(-100%) rotate(-90deg);
  transform-origin: top right;
  left: -55px;
}
/* Rotated label - align-right */
.konte-category-banner.align-right {
  display: flex;
  justify-content: flex-end;
}
.konte-category-banner.align-right .konte-category-banner__category {
  transform: rotate(-90deg);
  transform-origin: top right;
  right: -35px;
}
.konte-category-banner__category {
  font-size: 14px;
  line-height: 1;
  display: inline-block;
  position: absolute;
  top: 0;
  color: #888;
  white-space: nowrap;
  letter-spacing: 1px;
}
.konte-category-banner__image {
  display: block;
  position: relative;
  overflow: hidden;
}
.konte-category-banner__image img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.4s;
}
.konte-category-banner__link:hover .konte-category-banner__image img {
  transform: scale(1.04);
}
.konte-category-banner__content {
  display: block;
}
.konte-category-banner__title {
  font-size: clamp(22px, 3vw, 40px);
  font-weight: 400;
  line-height: 1.2;
  margin: 20px 0 14px 0;
  color: #222;
}
.konte-category-banner__button {
  display: inline-block;
  position: relative;
  padding-bottom: 4px;
  font-size: 14px;
  color: #555;
}
.konte-category-banner__button::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 20px;
  border-bottom: 1.5px solid #555;
  transition: width 0.4s;
}
.konte-category-banner__link:hover .konte-category-banner__button::after {
  width: 100%;
}

/* ── Company ──────────────────────────────────────────── */
.company-section {
  background: #f7f7f7;
  padding: 60px 5%;
}
.company-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 48px;
  align-items: center;
}
.company-text-block h2 {
  font-size: 22px;
  font-weight: 500;
  color: #222;
  margin: 0 0 8px;
}
.company-text-block p {
  font-size: 15px;
  color: #888;
  margin: 0 0 14px;
}
.addr-link {
  font-size: 12px;
  letter-spacing: 3px;
  color: #555;
  text-decoration: underline;
}
.company-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.company-images a { display: block; overflow: hidden; }
.company-images img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.company-images a:hover img { transform: scale(1.03); }

/* ── Post Grid (matches konte-post-grid columns-3 columns-gap-40) ── */
.post-section {
  padding: 60px 25px;
  background: #fff;
}
.post-section-head {
  max-width: 1400px;
  margin: 0 auto 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 16px;
}
.post-head-left h2 {
  font-size: 22px;
  font-weight: 500;
  color: #222;
  margin: 0 0 4px;
}
.post-head-left p {
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
/* Matches .konte-post-grid.columns-3.columns-gap-40 */
.konte-post-grid {
  max-width: 1400px;
  margin: 0 auto;
}
.konte-post-grid--elementor {
  display: flex;
  flex-wrap: wrap;
  margin-left: -40px;
  margin-right: -40px;
}
.konte-post-grid--elementor .hentry {
  width: calc(100% / 3);
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 40px;
}
.post-thumbnail {
  display: block;
  overflow: hidden;
  margin-bottom: 24px;
}
.post-thumbnail img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s;
}
.post-thumbnail:hover img { transform: scale(1.04); }
.post-title {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 5px;
  line-height: 1.4;
}
.post-title a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
}
.post-title a:hover { color: #888; }
.post-summary {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
/* Matches .button.alt */
.button.alt {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 38px;
  padding: 0 25px;
  border: 1px solid #222;
  color: #222;
  text-decoration: none;
  background: transparent;
  transition: background 0.2s, color 0.2s;
}
.button.alt:hover { background: #222; color: #fff; }

/* ── Video ────────────────────────────────────────────── */
.video-section {
  padding: 60px 25px;
  background: #f7f7f7;
  max-width: 1400px;
  margin: 0 auto;
}
.video-head { margin-bottom: 28px; }
.video-head h2 { font-size: 22px; font-weight: 500; color: #444; margin: 0 0 4px; }
.video-head p { font-size: 15px; color: #888; letter-spacing: 3px; margin: 0; }
.video-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
.video-wrap { position: relative; aspect-ratio: 16 / 9; }
.video-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.video-item p {
  font-size: 14px;
  color: #666;
  margin: 12px 0 0;
  line-height: 1.6;
}

/* ── Partner ──────────────────────────────────────────── */
.partner-section {
  padding: 60px 5%;
  background: #fff;
}
.partner-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: center;
}
.partner-text h2 { font-size: 22px; font-weight: 500; color: #222; margin: 0 0 8px; }
.partner-text p  { font-size: 14px; color: #888; margin: 0; }
.partner-imgs {
  display: flex;
  gap: 16px;
  align-items: center;
}
.partner-imgs img {
  flex: 1;
  min-width: 0;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .konte-post-grid--elementor .hentry { width: 50%; }
}
@media (max-width: 768px) {
  .cat-section { flex-direction: column; }
  .cat-col { padding: 0 20px; }
  .company-inner { grid-template-columns: 1fr; }
  .company-images { grid-template-columns: 1fr; }
  .konte-post-grid--elementor .hentry { width: 100%; }
  .video-grid { grid-template-columns: 1fr; }
  .partner-inner { grid-template-columns: 1fr; }
  .partner-imgs { flex-wrap: wrap; }
}
</style>
