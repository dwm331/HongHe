<template>
  <div class="wrapper">
    <Header />

    <div class="about-split">
      <!-- Left: sticky image -->
      <div
        class="split-image"
        :style="{ backgroundImage: `url(${$imgPath('about-bg.jpg')})` }"
      ></div>

      <!-- Right: scrollable content -->
      <div class="split-content">
        <h2 class="about-title">品牌介紹</h2>
        <p class="about-tagline">I believe! I honghe!</p>
        <p class="about-sub">浤賀 — 實踐家族傳承，從土地到餐桌的承諾</p>

        <div class="about-body">
          <p>在一個純樸的家庭中，周冠誠年少時便被種植蔬菜的生活所環繞。他的童年充滿了在農田中奔跑、親手栽種的記憶，這是一個由土地與辛勤耕耘所編織成的故事。然而，命運的安排卻將他帶往了科技的世界。</p>
          <p>十五年前，他跨越了不同的領域，成為了一名科技業的工程師。偶然的機會下，來到了遠離家鄉的澳大利亞，在那裡，他重新與土地相遇。這段在澳洲農場的時光不僅豐富了他對農業的了解，更是重新點燃了對家族傳統的熱愛。</p>
          <p>在一個跨越千里的故事中，冠誠在遙遠的澳大利亞相識 Emily 並訂下終身。他們的愛情如同一場冒險，穿越了無數的距離，卻也在彼此的相遇中找到了生命中最美好的驚喜。</p>
          <p>回到台灣後，冠誠與 Emily 攜手迎接了一個全新的挑戰。憑藉著對土地的熱愛與對未來的信心，創立了「浤賀」，這個名字不僅是公司的象徵，更是他們對彼此情感的見證。</p>
          <p>「浤賀」的使命是將優質的本土蔬菜帶給更多的人們，同時也保證了從土地到餐桌的品質與新鮮。「浤賀」不僅僅是一家蔬菜貿易公司，更是一群對土地與蔬菜充滿熱情的夥伴，他們深信每一口蔬菜背後都應該有一個美好的故事。</p>
          <p>這是一個關於愛與堅持的故事，一個跨越海洋的奇妙旅程。在「浤賀」的世界裡，每一片蔬菜都是對愛情的見證，每一個故事都是對勇氣與堅持的讚頌。讓我們一同走進「浤賀」，品味這份來自大地的真摯情感，感受這段跨越海洋的奇妙旅程。</p>
        </div>

        <!-- Two logos -->
        <div class="about-logos">
          <div class="about-logo-item">
            <img src="~/static/img/logo-dark.png" alt="浤賀有限公司" />
          </div>
          <div class="about-logo-item">
            <img src="~/static/img/logo2_800.png" alt="廉使蔬果生產合作社" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  head () {
    return { title: '品牌故事 | 浤賀有限公司 HongHe' }
  }
}
</script>

<style>
/* ── Split layout ───────────────────────────────────── */
.about-split {
  display: flex;
  padding-top: 120px; /* fixed header height */
  min-height: 100vh;
}

/* Left: sticky full-height image */
.split-image {
  width: 50%;
  position: sticky;
  top: 120px;
  height: calc(100vh - 120px);
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
}

/* Right: scrollable content */
.split-content {
  flex: 1;
  padding: 64px 56px 80px;
  overflow-y: auto;
}

.about-title {
  font-size: 28px;
  font-weight: 700;
  color: #222;
  margin: 0 0 16px;
}
.about-tagline {
  font-size: 16px;
  color: #2d6a2d;
  font-style: italic;
  letter-spacing: 2px;
  margin: 0 0 12px;
  font-weight: 500;
}
.about-sub {
  font-size: 15px;
  color: #777;
  margin: 0 0 40px;
  padding-bottom: 28px;
  border-bottom: 1px solid #e8e8e8;
}

.about-body p {
  font-size: 15px;
  line-height: 2;
  color: #444;
  margin-bottom: 22px;
}
.about-body p:last-child { margin-bottom: 0; }

/* Two logos at the bottom */
.about-logos {
  display: flex;
  gap: 32px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 48px;
  padding-top: 36px;
  border-top: 1px solid #e8e8e8;
}
.about-logo-item {
  flex: 1;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-logo-item img {
  max-width: 100%;
  height: auto;
  max-height: 80px;
  object-fit: contain;
}

/* ── Mobile: stack vertically ──────────────────────── */
@media (max-width: 768px) {
  .about-split {
    flex-direction: column;
  }
  .split-image {
    width: 100%;
    position: static;
    height: 280px;
  }
  .split-content {
    padding: 40px 24px 60px;
  }
}
</style>
