<template>
  <div class="wrapper">
    <Header />

    <!-- Article Banner -->
    <section
      class="article-banner"
      :style="{ backgroundImage: `url(${$imgPath(article.img)})` }"
    >
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <span class="sec-tag">NEWS</span>
        <h1>{{ article.title }}</h1>
        <span class="article-date">{{ article.date }}</span>
      </div>
    </section>

    <!-- Article Body -->
    <section class="article-section">
      <div class="article-inner">

        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <nuxt-link to="/">首頁</nuxt-link>
          <span class="sep">›</span>
          <nuxt-link to="/news">最新消息</nuxt-link>
          <span class="sep">›</span>
          <span>{{ article.title }}</span>
        </nav>

        <!-- Content -->
        <div class="article-body">
          <p v-for="(para, i) in article.content" :key="i">{{ para }}</p>
        </div>

        <!-- Back -->
        <div class="article-footer">
          <nuxt-link to="/news" class="back-btn">← 回到最新消息</nuxt-link>
        </div>

        <!-- Other Articles -->
        <div class="other-articles">
          <h3>其他文章</h3>
          <div class="other-grid">
            <nuxt-link
              v-for="n in others"
              :key="n.slug"
              :to="`/news/${n.slug}`"
              class="other-card"
            >
              <div
                class="other-thumb"
                :style="{ backgroundImage: `url(${$imgPath(n.img)})` }"
              ></div>
              <div class="other-info">
                <span class="news-date">{{ n.date }}</span>
                <h4>{{ n.title }}</h4>
              </div>
            </nuxt-link>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import allNews from '~/assets/data/news.js'

export default {
  asyncData ({ params, error }) {
    const article = allNews.find(n => n.slug === params.slug)
    if (!article) return error({ statusCode: 404, message: '文章不存在' })
    const others = allNews.filter(n => n.slug !== params.slug).slice(0, 3)
    return { article, others }
  },
  head () {
    return {
      title: `${this.article.title} | 浤賀有限公司 HongHe`
    }
  }
}
</script>

<style>
/* ── Article Banner ─────────────────────────────────────── */
.article-banner {
  position: relative;
  min-height: 320px;
  padding-top: 70px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.article-banner .banner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%);
}
.article-banner .banner-content {
  position: relative;
  padding: 40px 8%;
  color: #fff;
  max-width: 800px;
}
.article-banner .sec-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #7fc97a;
  margin-bottom: 10px;
}
.article-banner h1 {
  font-size: clamp(20px, 4vw, 32px);
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 10px;
}
.article-banner .article-date {
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  letter-spacing: 1px;
}

/* ── Article Section ────────────────────────────────────── */
.article-section {
  background: #f8faf8;
  padding: 56px 5% 80px;
}
.article-inner {
  max-width: 860px;
  margin: 0 auto;
}

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.breadcrumb a { color: #2d6a2d; transition: opacity 0.2s; }
.breadcrumb a:hover { opacity: 0.75; }
.breadcrumb span.sep { color: #ccc; }
.breadcrumb > span:last-child {
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 280px;
}

/* Body */
.article-body {
  background: #fff;
  border-radius: 16px;
  padding: 48px 52px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  margin-bottom: 40px;
}
.article-body p {
  font-size: 16px;
  line-height: 2;
  color: #444;
  margin-bottom: 20px;
}
.article-body p:last-child { margin-bottom: 0; }

/* Back button */
.article-footer { margin-bottom: 56px; }
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: 1.5px solid #2d6a2d;
  color: #2d6a2d;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}
.back-btn:hover { background: #2d6a2d; color: #fff; }

/* Other articles */
.other-articles h3 {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #e8f5e8;
}
.other-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.other-card {
  display: block;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 14px rgba(0,0,0,0.06);
  transition: transform 0.2s;
  color: inherit;
  text-decoration: none;
}
.other-card:hover { transform: translateY(-3px); }
.other-thumb {
  height: 130px;
  background-size: cover;
  background-position: center;
}
.other-info { padding: 14px 16px; }
.other-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  line-height: 1.5;
  margin: 4px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive */
@media (max-width: 768px) {
  .article-body { padding: 28px 24px; }
  .other-grid { grid-template-columns: 1fr; }
  .breadcrumb > span:last-child { max-width: 160px; }
}
@media (max-width: 480px) {
  .article-section { padding: 36px 4% 60px; }
}
</style>
