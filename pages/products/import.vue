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
    return { title: '進口蔬菜 | HongHe – 浤賀有限公司 x 廉使蔬果生產合作社' }
  },
  data () {
    return {
      products: allNews.filter(n => n.categories.includes('進口蔬菜'))
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
/* Styles defined in domestic.vue (global scope) */
</style>
