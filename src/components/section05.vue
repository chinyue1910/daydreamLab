<template lang="pug">
#section05
  b-container
    b-row.flex-column.align-items-center
      h6 活動介紹
      h2 玩活動
    b-row.flex-nowrap.box.position-relative.m-0.justify-content-start.justify-content-md-around
      b-col.px-5(
        cols="12",
        md="6",
        lg="5",
        :class="{ move: ismove }",
        style="transition:1s"
      )
        b-card
          template(v-slot:header)
            h4.mb-0 問卷禮
          b-card-body
            span 全程參加活動並完成線上問卷填寫者，於活動結束離場前出示問卷完成頁面，即可獲得
              span 精美問卷小禮
              | 。
          b-button.badge-pill 參與活動
          b-button.smbutton 報名活動
      b-col.px-5(
        cols="12",
        md="6",
        lg="5",
        :class="{ move: ismove }",
        style="transition:1s"
      )
        b-card
          template(v-slot:header)
            h4.mb-0 幸運抽獎禮
          b-card-body
            span 全程參加活動並參觀現場19個攤位完成集點任務，就有機會獲得幸運抽獎機會(共2名)。
            .lists
              .list 1.
                span 宜蘭力麗威斯汀度假酒店一泊二食住宿卷乙名
                | (價值NT22,000)
            .lists
              .list 2.
                span 臺北/香港 來回機票 乙名
                | (價值NT6,000)
          b-button.badge-pill 參與活動
          b-button.smbutton 報名活動
      font-awesome-icon.left(
        :icon="['fas', 'angle-left']",
        size="3x",
        @click="move(false)"
      )
      font-awesome-icon.right(
        :icon="['fas', 'angle-right']",
        size="3x",
        @click="move(true)"
      )
</template>

<script>
export default {
  data () {
    return {
      ismove: false
    }
  },
  methods: {
    move (isright) {
      if (this.ismove !== isright) {
        this.ismove = isright
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin sm {
  @media (min-width: 768px) {
    @content;
  }
}
#section05 {
  padding: 100px 0;
  min-height: 100vh;
  overflow: hidden;
}
.box {
  overflow: hidden;
  @include sm {
    overflow: initial;
  }
}
.left {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @include sm {
    display: none;
  }
  color: #aacd06;
}
.right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  @include sm {
    display: none;
  }
  color: #aacd06;
}
.move {
  transform: translate(-100%);
}
h6 {
  color: #aacd06;
  font-weight: bolder;
}
h2 {
  font-weight: bolder;
}
h4 {
  padding: 2rem 0;
  color: white;
  font-weight: bold;
}
.card {
  border-radius: 20px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 5%;
    right: -25px;
    width: 50px;
    height: 80px;
    background: repeating-linear-gradient(
      #aacd06,
      #aacd06 3px,
      white 3px,
      white 16px
    );
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 5%;
    right: -25px;
    width: 50px;
    height: 80px;
    background: repeating-linear-gradient(
      #aacd06,
      #aacd06 3px,
      white 3px,
      white 16px
    );
    z-index: -1;
  }
  @include sm {
    box-shadow: -35px 65px 100px rgba(0, 0, 0, 0.1);
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 65%;
      right: 10%;
      top: 45%;
      background: url("~@/assets/images/dot_bg.png");
      background-size: 100%;
      z-index: -1;
    }
    &::after {
      display: none;
    }
  }
}
.card-header {
  background-color: #aacd06;
  padding: 20px 40px;
  border-radius: 20px 20px 0 0;
}
.card-body {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card-body {
    display: block;
    min-height: 1px;
  }
}
span {
  color: black;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 32px;
  span {
    color: #aacd06;
  }
}

.lists {
  text-indent: -1rem;
  margin-left: 1rem;
  .list {
    display: inline;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    line-height: 32px;
    span {
      color: #aacd06;
    }
  }
}

.badge-pill {
  display: none;
  @include sm {
    display: block;
    border: 1px solid #aacd06;
    padding: 1rem 3.5rem;
    font-size: 1rem;
    color: #aacd06;
    text-decoration: bold;
    background-color: white;
    &:hover {
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
        linear-gradient(#aacd06, #6cb043);
      border: none;
      width: 178px;
      height: 58px;
      color: white;
    }
  }
}

.smbutton {
  position: absolute;
  top: 18%;
  right: -30px;
  background-color: white;
  color: #aacd06;
  border: 3px solid #aacd06;
  width: 70px;
  height: 150px;
  border-radius: 20px;
  padding: 10px;
  font-weight: bolder;
  font-size: 1.3rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  @include sm {
    display: none;
  }
}
</style>
