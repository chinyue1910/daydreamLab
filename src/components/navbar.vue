<template lang="pug">
b-navbar(toggleable="md", type="light")
  b-navbar-brand(href="#")
    b-img(:src="require('@/assets/images/logo.png')")
  b-navbar-toggle(target="nav-collapse")
    template(v-slot:default="{ expanded }")
      div(v-if="expanded", icon="")
      div(v-else, icon="")
  b-collapse#nav-collapse(is-nav)
    b-navbar-nav.ml-auto
      b-nav-item(href="#section01") 首頁
      b-nav-item(href="#section02") 啟動大會
      b-nav-item(href="#section03") 贊助單位
      b-nav-item(href="#section04") 產品館
      b-nav-item(href="#section05") 玩活動
</template>

<style lang="scss" scoped>
@mixin sm {
  @media (min-width: 768px) {
    @content;
  }
}
.navbar {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 99999999;
  @include sm {
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    padding: 0;
    background-color: transparent;
  }
  .navbar-brand {
    width: 40vw;
    max-width: 120px;
    @include sm {
      margin-left: 5rem;
    }
    img {
      object-fit: cover;
      max-width: 100%;
    }
  }
  .navbar-toggler {
    width: 30px;
    height: 30px;
    border-radius: 0;
    border: 5px solid #aacd06;
  }
  .nav-link {
    color: #aacd06;
    text-align:center ;
    @include sm {
      color: white;
      margin: 2rem;
      font-size: 0.8rem;
    }
  }
}
</style>
