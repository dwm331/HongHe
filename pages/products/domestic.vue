<template>
  <div class="wrapper">
    <Header />

    <!-- Banner -->
    <div
      class="products-banner"
      :style="{ backgroundImage: `url(${$imgPath('products-banner.jpg')})` }"
    >
      <div class="products-banner-overlay"></div>
      <div class="products-banner-content">
        <h1>產品介紹</h1>
        <p>來自大地的恩賜，讓生活更美好</p>
      </div>
    </div>

    <!-- Article Grid -->
    <div class="products-section">
      <div class="products-grid">
        <nuxt-link
          v-for="p in products"
          :key="p.slug"
          :to="`/news/${p.slug}`"
          class="product-card"
        >
          <div class="product-thumb">
            <img :src="$imgPath(p.img)" :alt="p.title" width="360" height="210" />
          </div>
          <div class="product-body">
            <time class="product-date">{{ formatDate(p.date) }}</time>
            <h2 class="product-title">{{ p.title }}</h2>
            <p class="product-excerpt">{{ p.excerpt }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import allNews from '~/assets/data/news.js'

export default {
  head () {
    return { title: '國產蔬菜 | HongHe – 浤賀有限公司 x 廉使蔬果生產合作社' }
  },
  data () {
    return {
      products: allNews.filter(n => n.categories.includes('國產蔬菜'))
    }
  },
  methods: {
    formatDate (d) {
      const [y, m, day] = d.split('-')
      return `${y} 年 ${parseInt(m)} 月 ${parseInt(day)} 日`
    }
  }
}
</script>

<style>
/* ── Banner ─────────────────────────────────────────── */
.products-banner {
  position: relative;
  height: 380px;
  margin-top: 120px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.products-banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}
.products-banner-content {
  position: relative;
  text-align: center;
  color: #fff;
}
.products-banner-content h1 {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  margin: 0 0 14px;
  letter-spacing: 2px;
}
.products-banner-content p {
  font-size: 18px;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
}

/* ── Article Grid ────────────────────────────────────── */
.products-section {
  padding: 56px 5% 80px;
  background: #fff;
}
.products-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}
.product-card {
  display: block;
  text-decoration: none;
  color: inherit;
}
.product-thumb {
  overflow: hidden;
  margin-bottom: 16px;
  background: #eee;
}
.product-thumb img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.product-card:hover .product-thumb img { transform: scale(1.04); }
.product-date {
  display: block;
  font-size: 13px;
  color: #a2a2a2;
  margin-bottom: 10px;
  letter-spacing: 0.3px;
}
.product-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin: 0 0 12px;
  line-height: 1.5;
}
.product-excerpt {
  font-size: 13px;
  color: #777;
  line-height: 1.85;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ── Responsive ─────────────────────────────────────── */
@media (max-width: 900px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .products-grid { grid-template-columns: 1fr; }
  .products-banner { height: 280px; }
  .products-section { padding: 40px 4% 60px; }
}
</style>
