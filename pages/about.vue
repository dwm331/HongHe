<template>
  <div class="wrapper">
    <Header />

    <!-- Banner -->
    <section class="page-banner" :style="{ backgroundImage: `url(${$imgPath('main_bg.jpg')})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <span class="sec-tag">ABOUT</span>
        <h1>品牌故事</h1>
        <p>I believe! I honghe!</p>
      </div>
    </section>

    <!-- Brand Intro -->
    <section class="brand-intro">
      <div class="brand-intro-inner">
        <div class="brand-logos">
          <img src="~/static/img/logo-full.png" alt="浤賀有限公司" class="brand-logo-main" />
          <div class="brand-x">×</div>
          <img src="~/static/img/logo2_800.png" alt="廉使蔬果生產合作社" class="brand-logo-sub" />
        </div>
        <div class="brand-tagline">
          <span>I believe!</span>
          <span class="highlight">I honghe!</span>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="story-section">
      <div class="story-inner">
        <div class="story-header">
          <span class="sec-tag">OUR STORY</span>
          <h2>品牌介紹</h2>
          <div class="divider"></div>
        </div>

        <div class="story-body">
          <div class="story-image">
            <img src="~/static/img/main.jpeg" alt="浤賀有限公司品牌故事" />
          </div>
          <div class="story-text">
            <p>
              創辦人周冠誠（Guan-Cheng Chou）從小在蔬果農業的環境中成長，對這片土地有著深厚的情感與依戀。然而，在科技業打拼了整整十五年後，生活的步調讓他與農業的距離漸漸拉遠。
            </p>
            <p>
              直到一次遠赴澳洲的旅程，在農場工作的那段歲月，重新喚醒了他埋藏已久的農業魂。在那片土地上，他遇見了生命中的另一半 Emily，兩人相知相戀，攜手踏上返回台灣的旅程。
            </p>
            <p>
              2018年，帶著對土地的熱愛與對品質的堅持，周冠誠與 Emily 共同創立了「浤賀有限公司」。浤賀，不僅僅是一家蔬菜貿易公司，更是一群對土地與蔬菜充滿熱情的夥伴，致力於將最新鮮的蔬果從農場直送到每一張餐桌。
            </p>
            <p>
              從雲林的田間到消費者的餐桌，我們嚴格把關每一批貨物的品質，以誠信與熱情，守護著每一口蔬果的新鮮與美味。
            </p>
          </div>
        </div>

        <!-- Quote -->
        <blockquote class="story-quote">
          <p>「每一片蔬菜都是對愛情的見證，每一個故事都是對勇氣與堅持的讚頌。」</p>
          <cite>— 浤賀有限公司</cite>
        </blockquote>
      </div>
    </section>

    <!-- Values -->
    <section class="values-section">
      <div class="values-inner">
        <div class="sec-header">
          <span class="sec-tag">VALUES</span>
          <h2>我們的核心理念</h2>
        </div>
        <div class="values-grid">
          <div v-for="v in values" :key="v.title" class="value-card">
            <div class="value-icon">{{ v.icon }}</div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Logos -->
    <section class="partners-section">
      <div class="sec-header">
        <span class="sec-tag">PARTNERS</span>
        <h2>合作夥伴</h2>
      </div>
      <div class="partner-logos">
        <div class="partner-logo-item">
          <img src="~/static/img/logo-full.png" alt="浤賀有限公司" />
          <span>浤賀有限公司</span>
        </div>
        <div class="partner-sep">×</div>
        <div class="partner-logo-item">
          <img src="~/static/img/logo2_800.png" alt="廉使蔬果生產合作社" />
          <span>廉使蔬果生產合作社</span>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    return { title: '品牌故事 | 浤賀有限公司 HongHe' }
  },
  data () {
    return {
      values: [
        {
          icon: '🌱',
          title: '健康',
          desc: '提供最天然、最新鮮的蔬果，讓每一口食材都充滿大地的生命力'
        },
        {
          icon: '⚡',
          title: '效率',
          desc: '從產地直送，縮短供應鏈，確保蔬果在最新鮮的狀態抵達您的手中'
        },
        {
          icon: '♾️',
          title: '永續經營',
          desc: '與農民合作，推動友善農業，為土地與下一代留下更美好的環境'
        }
      ]
    }
  }
}
</script>

<style>
/* ── Page Banner ─────────────────────────────────── */
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
  font-style: italic;
  letter-spacing: 2px;
}

/* ── Brand Intro ─────────────────────────────────── */
.brand-intro {
  background: #fff;
  padding: 64px 5%;
  text-align: center;
}
.brand-intro-inner {
  max-width: 700px;
  margin: 0 auto;
}
.brand-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}
.brand-logo-main {
  height: 60px;
  width: auto;
  object-fit: contain;
}
.brand-logo-sub {
  height: 56px;
  width: auto;
  object-fit: contain;
}
.brand-x {
  font-size: 28px;
  color: #bbb;
  font-weight: 300;
}
.brand-tagline {
  font-size: 22px;
  letter-spacing: 3px;
  color: #555;
}
.brand-tagline .highlight {
  color: #2d6a2d;
  font-weight: 700;
  margin-left: 8px;
}

/* ── Story ───────────────────────────────────────── */
.story-section {
  background: #f8faf8;
  padding: 72px 5% 80px;
}
.story-inner { max-width: 1100px; margin: 0 auto; }

.story-header { text-align: center; margin-bottom: 56px; }
.story-header .sec-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 5px;
  color: #2d6a2d;
  margin-bottom: 12px;
}
.story-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
}
.divider {
  width: 48px;
  height: 3px;
  background: #2d6a2d;
  border-radius: 2px;
  margin: 0 auto;
}

.story-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
  margin-bottom: 56px;
}
.story-image {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
}
.story-image img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.story-text p {
  font-size: 16px;
  line-height: 2;
  color: #444;
  margin-bottom: 20px;
}
.story-text p:last-child { margin-bottom: 0; }

/* Quote */
.story-quote {
  background: #2d6a2d;
  border-radius: 14px;
  padding: 40px 48px;
  margin: 0;
  text-align: center;
}
.story-quote p {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  line-height: 1.7;
  margin: 0 0 16px;
}
.story-quote cite {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  letter-spacing: 2px;
}

/* ── Values ──────────────────────────────────────── */
.values-section { background: #fff; padding: 72px 5% 80px; }
.values-inner { max-width: 1100px; margin: 0 auto; }
.sec-header { text-align: center; margin-bottom: 48px; }
.sec-header .sec-tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 5px;
  color: #2d6a2d;
  margin-bottom: 12px;
}
.sec-header h2 { font-size: 30px; font-weight: 700; color: #222; }
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.value-card {
  text-align: center;
  padding: 40px 28px;
  border-radius: 14px;
  background: #f8faf8;
  border: 1px solid #e8f5e8;
  transition: transform 0.2s, box-shadow 0.2s;
}
.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(45, 106, 45, 0.1);
}
.value-icon { font-size: 40px; margin-bottom: 16px; }
.value-card h3 { font-size: 18px; font-weight: 700; color: #2d6a2d; margin-bottom: 12px; }
.value-card p { font-size: 14px; color: #777; line-height: 1.75; margin: 0; }

/* ── Partners ────────────────────────────────────── */
.partners-section { background: #f8faf8; padding: 56px 5% 72px; }
.partner-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.partner-logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #555;
  font-size: 13px;
  font-weight: 500;
}
.partner-logo-item img {
  height: 64px;
  width: auto;
  object-fit: contain;
}
.partner-sep { font-size: 32px; color: #ccc; font-weight: 300; }

/* ── Responsive ──────────────────────────────────── */
@media (max-width: 900px) {
  .story-body { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 640px) {
  .values-grid { grid-template-columns: 1fr; }
  .story-quote { padding: 28px 24px; }
  .story-quote p { font-size: 17px; }
  .brand-logos { gap: 16px; }
}
</style>
