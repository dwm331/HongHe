<template>
  <div class="wrapper">
    <Header />

    <!-- Hero Banner -->
    <section class="about-hero" :style="{ backgroundImage: `url(${$imgPath('main_bg.jpg')})` }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-en">I believe! I honghe!</p>
        <h1>品牌故事</h1>
      </div>
    </section>

    <!-- Brand Header: 雙 Logo -->
    <section class="brand-header">
      <div class="brand-header-inner">
        <img src="~/static/img/logo-dark.png" alt="浤賀有限公司" class="bh-logo" />
        <span class="bh-sep">×</span>
        <img src="~/static/img/logo2_800.png" alt="廉使蔬果生產合作社" class="bh-logo" />
      </div>
      <div class="brand-sub">浤賀有限公司 × 廉使蔬果生產合作社</div>
    </section>

    <!-- 品牌介紹 -->
    <section class="brand-section">
      <div class="brand-inner">
        <div class="brand-title-block">
          <h2>品牌介紹</h2>
          <p class="brand-subtitle">「浤賀 — 實踐家族傳承，從土地到餐桌的承諾」</p>
          <div class="divider"></div>
        </div>

        <div class="brand-layout">
          <div class="brand-photo">
            <img src="~/static/img/main.jpeg" alt="浤賀品牌故事" />
          </div>
          <div class="brand-text">
            <p>
              創辦人周冠誠（Guan-Cheng Chou）自幼便在蔬果農業的環境中成長，對這片土地懷有深厚而真摯的情感。農田的氣息、蔬菜的生長，都成了他記憶中最溫暖的底色。
            </p>
            <p>
              成年後，他踏入科技業，在繁忙的職場打拼了整整十五年。然而，那份對土地的思念從未真正消散。
            </p>
            <p>
              直到他決定遠赴澳洲，在農場工作的日子裡，久違的泥土氣味重新喚醒了他內心深處的農業魂。也正是在那片異鄉的土地上，他與 Emily 相遇、相知，攜手訂下了共同的心願。
            </p>
            <p>
              2018年，兩人帶著滿腔的熱情與承諾，回到台灣，共同創立了「浤賀有限公司」。
            </p>
            <p>
              浤賀，不僅僅是一家蔬菜貿易公司，更是一群對土地與蔬菜充滿熱情的夥伴。我們的使命，是將最新鮮、最優質的蔬果，從土地直送到每一張餐桌。
            </p>
          </div>
        </div>

        <!-- Quote -->
        <blockquote class="brand-quote">
          <div class="quote-mark">"</div>
          <p>每一片蔬菜都是對愛情的見證，<br>每一個故事都是對勇氣與堅持的讚頌。</p>
          <cite>— 浤賀有限公司</cite>
        </blockquote>

        <!-- Mission -->
        <div class="brand-mission">
          <div class="mission-item" v-for="m in mission" :key="m.title">
            <div class="mission-icon">{{ m.icon }}</div>
            <h3>{{ m.title }}</h3>
            <p>{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Section -->
    <section class="about-partners">
      <div class="about-partners-inner">
        <h2>攜手同行</h2>
        <div class="divider center"></div>
        <p class="partner-desc">浤賀有限公司與廉使蔬果生產合作社共同為台灣的蔬果產業注入新的活力，堅持從產地直送到餐桌的品質承諾。</p>
        <div class="partner-logos">
          <div class="partner-logo-item">
            <img src="~/static/img/logo-full.png" alt="浤賀有限公司" />
            <span>浤賀有限公司</span>
          </div>
          <div class="partner-x">×</div>
          <div class="partner-logo-item">
            <img src="~/static/img/logo2_800.png" alt="廉使蔬果生產合作社" />
            <span>廉使蔬果生產合作社</span>
          </div>
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
      mission: [
        {
          icon: '🌱',
          title: '健康',
          desc: '提供最天然、最新鮮的蔬果，讓每一口食材都充滿大地的生命力與純淨的風味。'
        },
        {
          icon: '⚡',
          title: '效率',
          desc: '從產地直送，縮短供應鏈，確保蔬果在最新鮮的狀態迅速抵達您的手中。'
        },
        {
          icon: '♾️',
          title: '永續經營',
          desc: '與農民深度合作，推動友善土地的農業方式，為下一代留下更美好的環境。'
        }
      ]
    }
  }
}
</script>

<style>
/* ── Hero ───────────────────────────────────────────────── */
.about-hero {
  position: relative;
  min-height: 320px;
  padding-top: 70px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
}
.hero-content {
  position: relative;
  text-align: center;
  color: #fff;
  padding: 40px 24px;
}
.hero-en {
  font-size: 14px;
  letter-spacing: 4px;
  color: #7fc97a;
  font-style: italic;
  margin: 0 0 12px;
}
.hero-content h1 {
  font-size: clamp(30px, 5vw, 48px);
  font-weight: 700;
  margin: 0;
}

/* ── Brand Header ───────────────────────────────────────── */
.brand-header {
  background: #fff;
  padding: 52px 24px 40px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}
.brand-header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.bh-logo {
  height: 56px;
  width: auto;
  object-fit: contain;
}
.bh-sep {
  font-size: 28px;
  color: #ccc;
  font-weight: 300;
}
.brand-sub {
  font-size: 13px;
  color: #aaa;
  letter-spacing: 2px;
}

/* ── Brand Section ──────────────────────────────────────── */
.brand-section {
  background: #f8faf8;
  padding: 72px 5% 88px;
}
.brand-inner {
  max-width: 1060px;
  margin: 0 auto;
}

/* Title block */
.brand-title-block {
  text-align: center;
  margin-bottom: 56px;
}
.brand-title-block h2 {
  font-size: 34px;
  font-weight: 700;
  color: #222;
  margin-bottom: 14px;
}
.brand-subtitle {
  font-size: 17px;
  color: #2d6a2d;
  font-weight: 500;
  margin-bottom: 20px;
}
.divider {
  width: 48px;
  height: 3px;
  background: #2d6a2d;
  border-radius: 2px;
  margin: 0 auto;
}

/* Story layout */
.brand-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
  margin-bottom: 60px;
}
.brand-photo {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.13);
  position: sticky;
  top: 90px;
}
.brand-photo img {
  width: 100%;
  display: block;
  object-fit: cover;
}
.brand-text p {
  font-size: 16px;
  line-height: 2.1;
  color: #444;
  margin-bottom: 24px;
}
.brand-text p:last-child { margin-bottom: 0; }

/* Quote */
.brand-quote {
  background: #fff;
  border-left: 4px solid #2d6a2d;
  border-radius: 0 12px 12px 0;
  padding: 36px 40px;
  margin: 0 0 60px;
  position: relative;
}
.quote-mark {
  font-size: 72px;
  color: #2d6a2d;
  opacity: 0.15;
  line-height: 1;
  position: absolute;
  top: 12px;
  left: 20px;
  font-family: Georgia, serif;
}
.brand-quote p {
  font-size: 20px;
  font-weight: 500;
  color: #2d6a2d;
  line-height: 1.75;
  margin: 0 0 14px;
  position: relative;
}
.brand-quote cite {
  font-size: 13px;
  color: #999;
  font-style: normal;
  letter-spacing: 2px;
}

/* Mission */
.brand-mission {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.mission-item {
  background: #fff;
  border-radius: 12px;
  padding: 36px 28px;
  text-align: center;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8f5e8;
  transition: transform 0.2s;
}
.mission-item:hover { transform: translateY(-4px); }
.mission-icon { font-size: 36px; margin-bottom: 14px; }
.mission-item h3 {
  font-size: 17px;
  font-weight: 700;
  color: #2d6a2d;
  margin-bottom: 10px;
}
.mission-item p {
  font-size: 13px;
  color: #777;
  line-height: 1.75;
  margin: 0;
}

/* ── Partners ───────────────────────────────────────────── */
.about-partners {
  background: #fff;
  padding: 72px 5% 80px;
}
.about-partners-inner {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
.about-partners h2 {
  font-size: 30px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
}
.divider.center { margin: 0 auto 24px; }
.partner-desc {
  font-size: 15px;
  color: #777;
  line-height: 1.85;
  margin-bottom: 48px;
}
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
}
.partner-logo-item img {
  height: 64px;
  width: auto;
  object-fit: contain;
}
.partner-logo-item span {
  font-size: 13px;
  color: #666;
  font-weight: 500;
}
.partner-x {
  font-size: 30px;
  color: #ccc;
  font-weight: 300;
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .brand-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .brand-photo { position: static; }
}
@media (max-width: 640px) {
  .brand-mission { grid-template-columns: 1fr; }
  .brand-quote { padding: 28px 24px; }
  .brand-quote p { font-size: 17px; }
  .bh-logo { height: 44px; }
}
</style>
