<template>
  <div class="wrapper">
    <Header />

    <!-- Page Banner -->
    <section class="page-banner" :style="{ backgroundImage: `url(${$imgPath('main_bg.jpg')})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <span class="sec-tag">NEWS</span>
        <h1>最新消息</h1>
        <p>Announcing freshly listed vegetable varieties to satisfy your palate</p>
      </div>
    </section>

    <!-- News Grid -->
    <section class="news-list-section">
      <div class="news-grid">
        <nuxt-link
          v-for="n in news"
          :key="n.slug"
          :to="`/news/${n.slug}`"
          class="news-card"
        >
          <div
            class="news-thumb"
            :style="{ backgroundImage: `url(${$imgPath(n.img)})` }"
          ></div>
          <div class="news-body">
            <span class="news-date">{{ n.date }}</span>
            <h2>{{ n.title }}</h2>
            <p>{{ n.excerpt }}</p>
            <span class="read-more">繼續閱讀 →</span>
          </div>
        </nuxt-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import news from '~/assets/data/news.js'

export default {
  head () {
    return { title: '最新消息 | 浤賀有限公司 HongHe' }
  },
  data () {
    return { news }
  }
}
</script>

<style>
.page-banner {
  position: relative;
  min-height: 300px;
  padding-top: 70px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
}
.banner-content {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 40px 24px;
}
.banner-content .sec-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 5px;
  color: #7fc97a;
  margin-bottom: 12px;
}
.banner-content h1 {
  font-size: clamp(28px, 5vw, 44px);
  font-weight: 700;
  margin-bottom: 12px;
}
.banner-content p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

.news-list-section {
  padding: 64px 5% 80px;
  background: #f8faf8;
}
.news-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.news-card {
  display: block;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
}
.news-thumb {
  height: 190px;
  background-size: cover;
  background-position: center;
}
.news-body {
  padding: 20px 24px 24px;
}
.news-date {
  font-size: 12px;
  color: #aaa;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
}
.news-body h2 {
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
  line-height: 1.5;
}
.news-body p {
  font-size: 13px;
  color: #888;
  line-height: 1.8;
  margin-bottom: 14px;
}
.read-more {
  font-size: 13px;
  color: #2d6a2d;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .news-grid { grid-template-columns: 1fr; }
  .news-list-section { padding: 40px 4% 60px; }
}
</style>
