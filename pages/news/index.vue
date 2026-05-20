<template>
  <div class="wrapper">
    <Header />

    <!-- Page Header (原站 entry-header 結構) -->
    <header
      class="news-header"
      :style="{ backgroundImage: `url(${$imgPath('news-bg.jpg')})` }"
    >
      <div class="news-header-overlay"></div>
      <div class="news-header-titles">
        <h1>最新消息</h1>
        <h4>「新鮮上市」 最新蔬菜品種鮮嫩登場，滿足您的味蕾。</h4>
      </div>
    </header>

    <!-- Article List (原站 wp-block-post-template 結構：只有標題 + 日期) -->
    <section class="news-list-section">
      <div class="news-container">
        <ul class="news-post-list">
          <li v-for="n in news" :key="n.slug" class="news-post-item">
            <h4>
              <nuxt-link :to="`/news/${n.slug}`">{{ n.title }}</nuxt-link>
            </h4>
            <time class="post-date">{{ n.date }}</time>
          </li>
        </ul>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import news from '~/assets/data/news.js'

export default {
  head () {
    return { title: '最新消息 | HongHe – 浤賀有限公司 x 廉使蔬果生產合作社' }
  },
  data () {
    return { news: news.filter(n => n.isNews) }
  }
}
</script>

<style>
/* ── Page Header ─────────────────────────────────────── */
.news-header {
  position: relative;
  padding-top: 120px;
  min-height: 320px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
}
.news-header-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}
.news-header-titles {
  position: relative;
  padding: 48px 5% 40px;
  color: #fff;
}
.news-header-titles h1 {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  margin: 0 0 12px;
}
.news-header-titles h4 {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.5px;
}

/* ── Article List ─────────────────────────────────────── */
.news-list-section {
  padding: 64px 0 96px;
  background: #fff;
}
.news-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 5%;
}
.news-post-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.news-post-item {
  padding: 28px 0;
  border-bottom: 1px solid #ebebeb;
}
.news-post-item:first-child {
  border-top: 1px solid #ebebeb;
}
.news-post-item h4 {
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1.6;
}
.news-post-item h4 a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}
.news-post-item h4 a:hover {
  color: #2d6a2d;
}
.post-date {
  display: block;
  font-size: 13px;
  color: #a2a2a2;
  letter-spacing: 0.5px;
}

@media (max-width: 600px) {
  .news-header-titles { padding: 40px 6% 32px; }
  .news-list-section { padding: 40px 0 64px; }
}
</style>
