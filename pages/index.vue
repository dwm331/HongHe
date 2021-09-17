<template>
  <div class="wrapper">
    <Header></Header>
    <div class="wrap_main">
      <div class="top_bar">
        <img src="~/static/img/logo.jpeg" alt="">
        <h2>浤賀有限公司</h2>
      </div>
      <div class="top_view" id="title1">
        <div class="top_title"><h1>健康 效率 永續經營</h1></div>
        <div class="top_subtitle"><h2>healthy, efficient, sustainable development</h2></div>
        <div class="top_message"><h2>蔬果批發｜蔬果進口</h2></div>
        <a class="tabkeALook_btn" href="https://www.facebook.com/%E6%B5%A4%E8%B3%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-196766557402879/" target="_black">FB粉絲專頁</a>
      </div>
      <div class="first_view">
        <div class="cardList">
          <div class="card">
            <div>
              <img src="~/static/img/icon/icon1.png" alt="" />
              <h3>國際貿易</h3>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                necessitatibus!
              </h4>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="~/static/img/icon/icon2.png" alt="" />
              <h3>信用交易</h3>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                necessitatibus!
              </h4>
            </div>
          </div>
          <div class="card">
            <div>
              <img src="~/static/img/icon/icon3.png" alt="" />
              <h3>高品質</h3>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                necessitatibus!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="second_view" id="title2">
        <div>
          <img src="~/static/img/main.jpeg" alt="" />
        </div>
        <div>
          <div class="sencond_title">關於我們</div>
          <div class="sencond_message">
            <p>
              成立於2018年，雲林縣最大蔬菜貿易公司，進口批售大白菜、白蘿蔔、高麗菜、青花菜、美生菜、南瓜等蔬果。主要販售的通路有果菜市場、餐廳食材等。
            </p>
            <p>地址：雲林縣虎尾鎮文科路1342號</p>
          </div>
        </div>
      </div>
      <div class="img_view" id="title3">
        <div class="card" v-for="(item, index) in products" :key="index">
          <div class="card_message">
            <h3>{{ item.name }}</h3>
            <h4>{{ item.info }}</h4>
          </div>
        </div>
      </div>
    </div>
    <Footer id="title5"></Footer>
    <div id="fb-root"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "大白菜",
          title: "冬季的蔬菜王",
          info: "結球白菜、大白菜、捲心白菜、黃芽白菜、山東大白菜、天津白菜、包心白菜、洋白菜",
          href: "img/v1.png",
          img: "img/v1_1.jpeg",
        },
        {
          name: "白蘿蔔",
          title: "十一月十二月",
          info: "新竹：新竹市、五峰，台中：清水，雲林，南投：埔里，台南，彰化縣，嘉義縣",
          href: "img/v2.png",
          img: "img/v2_1.jpeg",
        },
        {
          name: "高麗菜",
          title: "產地來源",
          info: "彰化、雲林",
          href: "img/v3.png",
          img: "img/v3_1.jpeg",
        },
        {
          name: "青花菜",
          title: "十一至四月",
          info: "嘉義、彰化、雲林",
          href: "img/v4.png",
          img: "img/v4_1.jpeg",
        },
        {
          name: "美生菜",
          title: "產地來源",
          info: "品種介紹",
          href: "img/v5.png",
          img: "img/v5_1.jpeg",
        },
        {
          name: "南瓜",
          title: "產地來源",
          info: "品種介紹",
          href: "img/v6.png",
          img: "img/v6_1.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
@import "~assets/css/global.min.css";
@import "~assets/css/components/header.min.css";
@import "~assets/css/components/footer.min.css";
@import "~assets/css/HongHe/style.min.css";
</style>