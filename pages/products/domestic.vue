<template>
  <div class="wrapper">
    <Header />

    <div class="archive-wrap">
      <div class="archive-container">

        <!-- Main Content -->
        <main class="archive-main">
          <article
            v-for="p in products"
            :key="p.slug"
            class="post-article"
          >
            <nuxt-link class="post-thumbnail" :to="`/news/${p.slug}`" tabindex="-1">
              <img :src="$imgPath(p.img)" :alt="p.title" width="360" height="210" />
            </nuxt-link>

            <div class="entry">
              <header class="entry-header">
                <div class="cat-links">
                  <span
                    v-for="(cat, i) in p.categories"
                    :key="cat"
                  ><nuxt-link :to="cat === '進口蔬菜' ? '/products/import' : '/products/domestic'">{{ cat }}</nuxt-link><span v-if="i < p.categories.length - 1">, </span></span>
                </div>
                <h2 class="entry-title">
                  <nuxt-link :to="`/news/${p.slug}`">{{ p.title }}</nuxt-link>
                </h2>
              </header>

              <div class="entry-summary">
                <p>{{ p.excerpt }}</p>
              </div>

              <footer class="entry-footer">
                <div class="entry-meta">
                  <time :datetime="p.date">{{ p.date }}</time>
                </div>
              </footer>
            </div>
          </article>
        </main>

        <!-- Sidebar -->
        <aside class="archive-sidebar">
          <!-- Categories -->
          <section class="widget widget-categories">
            <h2 class="widget-title">分類</h2>
            <ul>
              <li class="current-cat">
                <nuxt-link to="/products/domestic">國產蔬菜</nuxt-link>
                <span class="posts-count">{{ domesticCount }}</span>
              </li>
              <li>
                <nuxt-link to="/news">最新消息</nuxt-link>
                <span class="posts-count">1</span>
              </li>
              <li>
                <nuxt-link to="/products/import">進口蔬菜</nuxt-link>
                <span class="posts-count">{{ importCount }}</span>
              </li>
            </ul>
          </section>

          <!-- Featured Posts -->
          <section class="widget widget-featured">
            <h2 class="widget-title">精選文章</h2>
            <ul>
              <li v-for="f in featured" :key="f.slug">
                <nuxt-link class="featured-thumb" :to="`/news/${f.slug}`">
                  <img :src="$imgPath(f.img)" :alt="f.title" />
                </nuxt-link>
                <div class="featured-info">
                  <div class="cat-links">
                    <span v-for="(cat, i) in f.categories" :key="cat">
                      {{ cat }}<span v-if="i < f.categories.length - 1">, </span>
                    </span>
                  </div>
                  <nuxt-link :to="`/news/${f.slug}`" class="featured-title">{{ f.title }}</nuxt-link>
                </div>
              </li>
            </ul>
          </section>
        </aside>

      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import allNews from '~/assets/data/news.js'

export default {
  head () {
    return { title: '國產蔬菜 | 浤賀有限公司 HongHe' }
  },
  data () {
    const products = allNews.filter(n => n.categories.includes('國產蔬菜'))
    const importArticles = allNews.filter(n => n.categories.includes('進口蔬菜'))
    return {
      products,
      featured: products.slice(0, 3),
      domesticCount: products.length,
      importCount: importArticles.length
    }
  }
}
</script>

<style>
/* ── Archive Layout ───────────────────────────────── */
.archive-wrap {
  padding-top: 70px;
  background: #fff;
  min-height: 100vh;
}
.archive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 5% 80px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 48px;
  align-items: start;
}

/* ── Article Cards ────────────────────────────────── */
.post-article {
  display: flex;
  gap: 24px;
  padding-bottom: 36px;
  margin-bottom: 36px;
  border-bottom: 1px solid #ebebeb;
}
.post-article:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.post-thumbnail {
  flex-shrink: 0;
  display: block;
  width: 240px;
  overflow: hidden;
  border-radius: 4px;
}
.post-thumbnail img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.post-thumbnail:hover img { transform: scale(1.04); }

.entry { flex: 1; min-width: 0; }
.cat-links {
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.cat-links a {
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
}
.cat-links a:hover { color: #2d6a2d; }

.entry-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
  line-height: 1.5;
}
.entry-title a {
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
}
.entry-title a:hover { color: #2d6a2d; }

.entry-summary p {
  font-size: 14px;
  color: #777;
  line-height: 1.75;
  margin: 0 0 12px;
}
.entry-meta time {
  font-size: 12px;
  color: #a2a2a2;
  letter-spacing: 0.5px;
}

/* ── Sidebar ──────────────────────────────────────── */
.archive-sidebar {
  position: sticky;
  top: 90px;
}
.widget {
  background: #f8f8f8;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 28px;
}
.widget-title {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #333;
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}
.widget-categories ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.widget-categories li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid #ebebeb;
  font-size: 14px;
}
.widget-categories li:last-child { border-bottom: none; }
.widget-categories a {
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}
.widget-categories a:hover,
.current-cat a { color: #2d6a2d; font-weight: 600; }
.posts-count {
  font-size: 12px;
  color: #aaa;
  background: #e8e8e8;
  padding: 2px 7px;
  border-radius: 10px;
}

.widget-featured ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.widget-featured li {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.widget-featured li:last-child { margin-bottom: 0; }
.featured-thumb {
  flex-shrink: 0;
  display: block;
  width: 72px;
  height: 48px;
  overflow: hidden;
  border-radius: 3px;
}
.featured-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.featured-info .cat-links {
  margin-bottom: 4px;
}
.featured-title {
  font-size: 13px;
  color: #444;
  line-height: 1.5;
  text-decoration: none;
  display: block;
  transition: color 0.2s;
}
.featured-title:hover { color: #2d6a2d; }

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 900px) {
  .archive-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .archive-sidebar { position: static; }
}
@media (max-width: 600px) {
  .post-article { flex-direction: column; }
  .post-thumbnail { width: 100%; }
  .post-thumbnail img { height: 200px; }
  .archive-container { padding: 32px 4% 60px; }
}
</style>
