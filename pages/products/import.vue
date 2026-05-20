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
                  <span v-for="(cat, i) in p.categories" :key="cat">
                    <nuxt-link :to="cat === '進口蔬菜' ? '/products/import' : '/products/domestic'">{{ cat }}</nuxt-link><span v-if="i < p.categories.length - 1">, </span>
                  </span>
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
          <section class="widget widget-categories">
            <h2 class="widget-title">分類</h2>
            <ul>
              <li>
                <nuxt-link to="/products/domestic">國產蔬菜</nuxt-link>
                <span class="posts-count">{{ domesticCount }}</span>
              </li>
              <li>
                <nuxt-link to="/news">最新消息</nuxt-link>
                <span class="posts-count">1</span>
              </li>
              <li class="current-cat">
                <nuxt-link to="/products/import">進口蔬菜</nuxt-link>
                <span class="posts-count">{{ importCount }}</span>
              </li>
            </ul>
          </section>

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
    return { title: '進口蔬菜 | 浤賀有限公司 HongHe' }
  },
  data () {
    const products = allNews.filter(n => n.categories.includes('進口蔬菜'))
    const domesticArticles = allNews.filter(n => n.categories.includes('國產蔬菜'))
    return {
      products,
      featured: domesticArticles.slice(0, 3),
      domesticCount: domesticArticles.length,
      importCount: products.length
    }
  }
}
</script>

<style>
/* Styles shared via domestic.vue global scope */
</style>
