<template>
  <footer id="contact" class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <div class="brand-name">雲林浤賀蔬果</div>
        <div class="brand-avatar">
          <img src="~/static/img/logo-full.png" alt="浤賀有限公司" />
        </div>
        <div class="brand-desc">
          <p>蔬果・花卉進口</p>
          <p>蔬果批發・零售</p>
          <p>農產品買賣</p>
        </div>
      </div>

      <div class="footer-info">
        <h3>聯絡資訊</h3>
        <dl>
          <div>
            <dt>地　址</dt>
            <dd>雲林縣虎尾鎮文科路1342號</dd>
          </div>
          <div>
            <dt>統一編號</dt>
            <dd>42803868</dd>
          </div>
          <div>
            <dt>聯絡電話</dt>
            <dd><a href="tel:0558806333">05-588-0633</a></dd>
          </div>
        </dl>
        <div class="footer-social">
          <a
            href="https://www.facebook.com/profile.php?id=100064010855033"
            target="_blank" rel="noopener"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            Facebook
          </a>
          <a href="https://www.instagram.com/_honghe/" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      ©2024 浤賀有限公司 × 廉使蔬果合作社 版權所有
    </div>

    <!-- LINE floating button -->
    <a
      class="line-fab"
      href="https://line.me/ti/p/8ipNqFFiL3"
      target="_blank"
      rel="noopener"
      aria-label="LINE 線上詢問"
    >
      <img :src="$imgPath('line-client.svg')" alt="LINE" />
      <span class="line-tooltip">線上詢問</span>
    </a>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #1a1a1a;
  color: #ccc;
}
.footer-main {
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 32px 48px;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Brand col */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
}
.brand-name {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 5px;
  margin-bottom: 20px;
}
.brand-avatar img {
  max-width: 140px;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 18px;
}
.brand-desc {
  text-align: center;
  font-size: 13px;
  line-height: 1.9;
  color: #888;
}
.brand-desc p { margin: 0; }

/* Info col */
.footer-info h3 {
  font-size: 13px;
  letter-spacing: 3px;
  color: #fff;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #2d2d2d;
}
.footer-info dl { margin: 0; }
.footer-info dl > div {
  display: flex;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 14px;
}
.footer-info dt {
  color: #777;
  min-width: 64px;
  flex-shrink: 0;
}
.footer-info dd { margin: 0; }
.footer-info dd a {
  color: #ccc;
  text-decoration: underline;
  transition: color 0.2s;
}
.footer-info dd a:hover { color: #7fc97a; }

/* Social */
.footer-social {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.footer-social a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #888;
  transition: color 0.2s;
}
.footer-social a:hover { color: #7fc97a; }

/* Bottom bar */
.footer-bottom {
  text-align: center;
  padding: 18px 24px;
  border-top: 1px solid #2a2a2a;
  font-size: 13px;
  color: #555;
}

@media (max-width: 600px) {
  .footer-main { gap: 48px; padding: 40px 24px; }
}

/* ── LINE FAB ──────────────────────────────────────────── */
.line-fab {
  position: fixed;
  right: 55px;
  bottom: 120px;
  width: 50px;
  z-index: 999;
  display: block;
  text-align: center;
  text-decoration: none;
}
.line-fab img {
  width: 100%;
  display: block;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25));
  transition: transform 0.2s;
}
.line-fab:hover img { transform: scale(1.1); }
.line-tooltip {
  position: absolute;
  right: 60px;
  bottom: 5px;
  width: 80px;
  color: #fff;
  background: rgb(0, 200, 94);
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 12px;
  padding: 10px 14px;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}
.line-fab:hover .line-tooltip { opacity: 1; }
</style>
