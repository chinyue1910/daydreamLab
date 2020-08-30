<template lang="pug">
#section01
  b-container.text-white.d-flex.flex-column.justify-content-between.h-100.py-3(fluid)
    div
    b-container.text-center
      b-row.justify-content-center.align-items-center.m-0
        b-col.icons
          font-awesome-icon.icon(:icon="['far', 'clock']")
          p.m-0 22 MAY 2019
        b-col.icons
          font-awesome-icon.icon(:icon="['fas', 'user-friends']")
          p.m-0 500 ATTENDEE
        b-col.icons
          font-awesome-icon.icon(:icon="['fas', 'ticket-alt']")
          p.m-0 19 BOOTHS
      b-img(:src="require('@/assets/images/word.png')")
    b-row.m-0.justify-content-center.align-items-center
      p.m-0 Share on：
      font-awesome-icon.m-2(:icon="['fab', 'facebook-f']")
      font-awesome-icon.m-2(:icon="['fab', 'twitter']")
      font-awesome-icon.m-2(:icon="['fab', 'line']")
    b-button.badge-pill(variant="white")
      b 報名活動
    div
</template>

<style lang="scss" scoped>
@mixin sm {
  @media (min-width: 768px) {
    @content;
  }
}

#section01 {
  height: 100vh;
  background: url("~@/assets/images/bg.jpg") no-repeat center/cover;
  .container-fluid {
    backdrop-filter: brightness(85%);
    @include sm {
      padding: 150px 0 1rem 0 !important;
    }
    img {
      padding: 2rem 0;
      max-width: 80%;
    }
    .row {
      .col {
        flex-grow: 0;
      }
    }
    p {
      white-space: nowrap;
    }
    .btn {
      border: 1px solid white;
      align-self: center;
      padding: 1rem 3.5rem;
      font-size: 1rem;
      color: white;
      text-decoration: bold;
      position: relative;
      &:hover {
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.5)),
          linear-gradient(#aacd06, #6cb043);
        box-shadow: 0 5px 50px black;
        border: none;
        width: 178px;
        height: 58px;
      }
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      background-color: #aacd06;
      padding: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
      transform: scale(0.5);
      @include sm{
        transform: scale(1);
      }
    }
    p{
      font-size:0.5rem;
      @include sm{
        font-size: 1rem;
      }
    }
  }
}
</style>
