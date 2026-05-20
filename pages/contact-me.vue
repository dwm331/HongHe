<template>
  <div class="wrapper">
    <Header />

    <!-- Page Banner -->
    <section class="page-banner" :style="{ backgroundImage: `url(${$imgPath('main_bg.jpg')})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <span class="sec-tag">CONTACT</span>
        <h1>聯絡我們</h1>
        <p>歡迎蒞臨，邀您指導</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-section">
      <div class="contact-inner">

        <!-- Left: Info -->
        <div class="contact-info">
          <h2>聯絡資訊</h2>
          <div class="divider"></div>

          <div class="info-item">
            <span class="info-icon">📍</span>
            <div>
              <div class="info-label">地址</div>
              <a
                href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9"
                target="_blank" rel="noopener"
              >雲林縣西螺鎮福田里社口117之3號</a>
            </div>
          </div>

          <div class="info-item">
            <span class="info-icon">📞</span>
            <div>
              <div class="info-label">聯絡電話</div>
              <a href="tel:0911809828">0911-809828</a>
              <br />
              <a href="tel:0911970688">0911-970688</a>
            </div>
          </div>

          <div class="info-item">
            <span class="info-icon">✉️</span>
            <div>
              <div class="info-label">電子信箱</div>
              <a href="mailto:hongheco@gmail.com">hongheco@gmail.com</a>
            </div>
          </div>

          <div class="contact-social">
            <a
              href="https://www.facebook.com/profile.php?id=100064010855033"
              target="_blank" rel="noopener" class="social-pill"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/_honghe/"
              target="_blank" rel="noopener" class="social-pill"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              Instagram
            </a>
          </div>

          <!-- Map link block -->
          <a
            class="map-link"
            href="https://maps.app.goo.gl/kyTFXBpmcHZntvRQ9"
            target="_blank" rel="noopener"
          >
            <div class="map-placeholder">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#2d6a2d" stroke-width="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>點擊開啟 Google 地圖</span>
            </div>
          </a>
        </div>

        <!-- Right: Form -->
        <div class="contact-form-wrap">
          <form v-if="!submitted" class="contact-form" @submit.prevent="handleSubmit">
            <h2>傳送訊息</h2>
            <div class="divider"></div>

            <div class="form-group">
              <label for="cf-name">姓名</label>
              <input id="cf-name" v-model="form.name" type="text" placeholder="您的姓名" required />
            </div>
            <div class="form-group">
              <label for="cf-email">信箱</label>
              <input id="cf-email" v-model="form.email" type="email" placeholder="your@email.com" required />
            </div>
            <div class="form-group">
              <label for="cf-subject">主旨</label>
              <input id="cf-subject" v-model="form.subject" type="text" placeholder="訊息主旨" required />
            </div>
            <div class="form-group">
              <label for="cf-message">內容</label>
              <textarea
                id="cf-message"
                v-model="form.message"
                rows="6"
                placeholder="請輸入您想說的話..."
                required
              ></textarea>
            </div>

            <!-- hCaptcha widget -->
            <div id="hcaptcha-box" class="form-group"></div>
            <p v-if="captchaError" class="captcha-error">請先完成人機驗證</p>

            <button type="submit" class="submit-btn" :disabled="sending">
              {{ sending ? '傳送中…' : '傳送訊息' }}
            </button>
            <p v-if="sendError" class="send-error">傳送失敗，請稍後再試。</p>
          </form>

          <div v-else class="thank-you">
            <div class="check-circle">✓</div>
            <h3>感謝您的來信！</h3>
            <p>我們已收到您的訊息，將盡快與您聯繫。</p>
            <button class="outline-btn" @click="resetForm">再傳一封</button>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'  // ← 填入 web3forms.com 的 access key
const HCAPTCHA_SITEKEY = 'YOUR_HCAPTCHA_SITEKEY'   // ← 填入 hcaptcha.com 的 sitekey

export default {
  head () {
    return {
      title: '聯絡我們 | HongHe – 浤賀有限公司 x 廉使蔬果生產合作社',
      script: [{ src: 'https://js.hcaptcha.com/1/api.js', async: true, defer: true }]
    }
  },
  data () {
    return {
      submitted: false,
      sending: false,
      captchaToken: '',
      captchaError: false,
      sendError: false,
      form: { name: '', email: '', subject: '', message: '' }
    }
  },
  mounted () {
    this._renderCaptcha()
  },
  methods: {
    _renderCaptcha () {
      if (window.hcaptcha) {
        window.hcaptcha.render('hcaptcha-box', {
          sitekey: HCAPTCHA_SITEKEY,
          callback: (token) => { this.captchaToken = token; this.captchaError = false },
          'expired-callback': () => { this.captchaToken = '' }
        })
      } else {
        setTimeout(() => this._renderCaptcha(), 400)
      }
    },
    async handleSubmit () {
      if (!this.captchaToken) { this.captchaError = true; return }
      this.sending = true
      this.sendError = false
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `[浤賀官網] ${this.form.subject}`,
            from_name: this.form.name,
            ...this.form,
            'h-captcha-response': this.captchaToken
          })
        })
        const data = await res.json()
        if (data.success) {
          this.submitted = true
        } else {
          this.sendError = true
        }
      } catch {
        this.sendError = true
      } finally {
        this.sending = false
      }
    },
    resetForm () {
      this.submitted = false
      this.captchaToken = ''
      this.captchaError = false
      this.sendError = false
      this.form = { name: '', email: '', subject: '', message: '' }
      this.$nextTick(() => this._renderCaptcha())
    }
  }
}
</script>

<style>
/* ── Page Banner (shared with news.vue) ─────────────────── */
/* banner styles already defined in news.vue if loaded first,
   but since each page is independent, repeat the critical rules */
.page-banner {
  position: relative;
  min-height: 300px;
  padding-top: 120px;
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

/* ── Contact Section ───────────────────────────────────── */
.contact-section {
  background: #f8faf8;
  padding: 72px 5% 88px;
}
.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}

/* Info column */
.contact-info h2 {
  font-size: 26px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
}
.divider {
  width: 48px;
  height: 3px;
  background: #2d6a2d;
  border-radius: 2px;
  margin-bottom: 32px;
}
.info-item {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: flex-start;
}
.info-icon {
  font-size: 20px;
  margin-top: 2px;
  flex-shrink: 0;
}
.info-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 4px;
}
.info-item a {
  font-size: 15px;
  color: #333;
  transition: color 0.2s;
  display: inline-block;
}
.info-item a:hover { color: #2d6a2d; }

.contact-social {
  display: flex;
  gap: 12px;
  margin: 28px 0 28px;
}
.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border: 1.5px solid #2d6a2d;
  color: #2d6a2d;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}
.social-pill:hover {
  background: #2d6a2d;
  color: #fff;
}

.map-link { display: block; margin-top: 4px; }
.map-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #e8f5e8;
  border: 2px dashed #a8d5a8;
  border-radius: 12px;
  padding: 32px;
  color: #2d6a2d;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}
.map-placeholder:hover { background: #daeeda; }

/* Form column */
.contact-form-wrap {
  background: #fff;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.08);
}
.contact-form h2 {
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  color: #333;
  background: #fafafa;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  box-sizing: border-box;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #2d6a2d;
  background: #fff;
}
.form-group textarea { resize: vertical; }
.captcha-error, .send-error {
  font-size: 13px;
  color: #d32f2f;
  margin: -8px 0 12px;
}
.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}
.submit-btn {
  width: 100%;
  padding: 14px;
  background: #2d6a2d;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background 0.2s, transform 0.2s;
}
.submit-btn:hover {
  background: #235523;
  transform: translateY(-2px);
}

/* Thank you state */
.thank-you {
  text-align: center;
  padding: 40px 20px;
}
.check-circle {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #2d6a2d;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}
.thank-you h3 {
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin-bottom: 12px;
}
.thank-you p {
  font-size: 15px;
  color: #777;
  margin-bottom: 28px;
}
.outline-btn {
  display: inline-block;
  padding: 12px 28px;
  border: 2px solid #2d6a2d;
  color: #2d6a2d;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  background: none;
  transition: background 0.2s, color 0.2s;
}
.outline-btn:hover {
  background: #2d6a2d;
  color: #fff;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-form-wrap { padding: 36px 28px; }
}
@media (max-width: 480px) {
  .contact-section { padding: 48px 4% 64px; }
  .contact-form-wrap { padding: 28px 20px; }
  .contact-social { flex-direction: column; }
}
</style>
