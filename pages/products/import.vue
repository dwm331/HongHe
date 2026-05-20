<template>
  <div class="wrapper">
    <Header />

    <section class="page-banner" :style="{ backgroundImage: `url(${$imgPath('main_bg.jpg')})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <span class="sec-tag">PRODUCTS</span>
        <h1>進口蔬菜</h1>
        <p>嚴選海外優質蔬菜，跨越千里送達您的餐桌</p>
      </div>
    </section>

    <section class="products-list">
      <div class="products-grid">
        <nuxt-link
          v-for="p in products"
          :key="p.slug"
          :to="`/news/${p.slug}`"
          class="product-card"
        >
          <div class="product-thumb">
            <img :src="$imgPath(p.img)" :alt="p.name" />
          </div>
          <div class="product-body">
            <div class="product-tags">
              <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <h2>{{ p.name }}</h2>
            <p>{{ p.desc }}</p>
            <span class="read-more">了解更多 →</span>
          </div>
        </nuxt-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    return { title: '進口蔬菜 | 浤賀有限公司 HongHe' }
  },
  data () {
    return {
      products: [
        {
          slug: 'korean-napa-cabbage',
          name: '韓流大白菜－營養多，消化好',
          img: 'prod-korean.jpg',
          tags: ['韓國進口'],
          desc: '直接從韓國進口，口感爽脆，富含膳食纖維，製作韓式泡菜的最佳選擇，幫助腸胃消化健康。'
        },
        {
          slug: 'garlic-antibacterial',
          name: '大蒜－抗菌防感冒',
          img: 'prod-garlic.jpg',
          tags: ['進口'],
          desc: '嚴選進口大蒜，蒜素含量豐富，天然抗菌成分強，是料理佐味的要角，也是健康的守護食材。'
        },
        {
          slug: 'napa-cabbage-vitamins',
          name: '大白菜－豐富維生素',
          img: 'prod-napa.jpg',
          tags: ['進口'],
          desc: '進口大白菜，葉片紮實，富含維生素C與膳食纖維，適合火鍋、炒菜等各式料理。'
        },
        {
          slug: 'onion-nutrition-antioxidant',
          name: '洋蔥－營養豐富、抗氧化',
          img: 'prod-onion.jpg',
          tags: ['進口'],
          desc: '進口洋蔥品質穩定，富含槲皮素等抗氧化物質，是家庭廚房和餐廳料理不可缺少的食材。'
        },
        {
          slug: 'potato-healthy-cheap',
          name: '馬鈴薯－便宜又好吃',
          img: 'prod-potato.jpg',
          tags: ['進口'],
          desc: '進口馬鈴薯質地細緻，富含鉀與維生素B6，蒸、煮、炒、炸皆宜，廚房百搭食材。'
        }
      ]
    }
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
.products-list {
  background: #f8faf8;
  padding: 64px 5% 88px;
}
.products-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.product-card {
  display: block;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  transition: transform 0.25s, box-shadow 0.25s;
  color: inherit;
  text-decoration: none;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
}
.product-thumb {
  aspect-ratio: 360 / 210;
  overflow: hidden;
  background: #eee;
}
.product-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s;
}
.product-card:hover .product-thumb img { transform: scale(1.04); }
.product-body { padding: 20px 24px 24px; }
.product-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 20px;
  background: #e8f5e8;
  color: #2d6a2d;
}
.product-body h2 {
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  line-height: 1.5;
}
.product-body p {
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
@media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
  .products-list { padding: 40px 4% 64px; }
}
</style>
