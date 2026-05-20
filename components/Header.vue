<template>
  <header :class="['site-header', { 'is-scrolled': isScrolled }]">
    <div class="header-inner">
      <nuxt-link class="logo" to="/">
        <img src="~/static/img/logo-full.png" alt="浤賀有限公司" />
      </nuxt-link>

      <nav class="nav" :class="{ 'is-open': menuOpen }">
        <ul class="nav-list">
          <li><a href="https://ihonghe.com.tw/about-me/" target="_blank" rel="noopener" @click="close">品牌故事</a></li>
          <li class="has-sub">
            <nuxt-link to="/products/domestic">產品介紹</nuxt-link>
            <ul class="sub-menu">
              <li><nuxt-link to="/products/domestic" @click.native="close">國產蔬菜</nuxt-link></li>
              <li><nuxt-link to="/products/import" @click.native="close">進口蔬菜</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/news" @click.native="close">最新消息</nuxt-link></li>
          <li><nuxt-link to="/contact-me" @click.native="close">聯絡我們</nuxt-link></li>
        </ul>
      </nav>

      <div class="header-right">
        <a
          href="https://www.facebook.com/profile.php?id=100064010855033"
          target="_blank" rel="noopener" class="social-btn" aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/_honghe/" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <button
          class="hamburger"
          :class="{ 'is-active': menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="選單"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="nav-backdrop" @click="close" />
  </header>
</template>

<script>
export default {
  data: () => ({ isScrolled: false, menuOpen: false }),
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () { this.isScrolled = window.scrollY > 60 },
    close () { this.menuOpen = false },
    homeHash (id) {
      return this.$route.path === '/' ? `#${id}` : `/#${id}`
    }
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s;
}
.site-header.is-scrolled {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.logo img {
  height: 48px;
  width: auto;
  display: block;
  object-fit: contain;
}

/* Nav */
.nav-list {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-list > li { position: relative; }
.nav-list > li > a {
  display: block;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.nav-list > li > a:hover { color: #2d6a2d; background: #f0f8f0; }

/* Dropdown */
.has-sub .sub-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 130px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
}
.has-sub:hover .sub-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.sub-menu li a {
  display: block;
  padding: 9px 18px;
  font-size: 14px;
  color: #444;
  transition: background 0.15s, color 0.15s;
  white-space: nowrap;
}
.sub-menu li a:hover { background: #f0f8f0; color: #2d6a2d; }

/* Header right */
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #555;
  transition: color 0.2s, background 0.2s;
}
.social-btn:hover { color: #2d6a2d; background: #f0f8f0; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.hamburger.is-active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.is-active span:nth-child(2) { opacity: 0; }
.hamburger.is-active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Backdrop */
.nav-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
}

/* Mobile */
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .logo span { display: none; }

  .nav {
    position: fixed;
    top: 70px;
    right: -280px;
    width: 260px;
    height: calc(100vh - 70px);
    background: #fff;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.12);
    overflow-y: auto;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 901;
  }
  .nav.is-open { right: 0; }

  .nav-list {
    flex-direction: column;
    align-items: stretch;
    padding: 16px 0;
    gap: 0;
  }
  .nav-list > li > a {
    padding: 14px 24px;
    border-radius: 0;
    font-size: 16px;
  }
  .has-sub .sub-menu {
    position: static;
    box-shadow: none;
    border-radius: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    background: #f8f8f8;
    padding: 0;
  }
  .sub-menu li a { padding: 11px 40px; }
  .social-btn { display: none; }
}
</style>
