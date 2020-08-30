<template lang="pug">
#section02
  b-container
    b-row#bigtitle.justify-content-center.align-items-center.text-center
      b-col(cols="12", md="8")
        .title 創新創力 打造企業IT共榮平台生態圈
        .title2 零壹解決方案日為您共同探尋台灣企業IT下一個轉型商機
        b-row.justify-content-center.py-5
          .agenda(v-for="data in 5" )
            b-img(:src="require('@/assets/images/agenda_icons/'+data+'.png')")
    p 2019零壹科技解決方案日今年邁入第9年，每年邀請500為台灣IT經銷夥伴與企業用戶與我們共同探尋最新的資訊架構與趨勢，實質幫助企業面對數位轉型的痛點與提供解方，更深化至產業應用的全方位解決。今年我們將邀請產業顧問探討數位轉型的挑戰與實際案例，針對多雲應用，企業資安與超融合架構，零壹如何提供方案解決，搭配現場實機展示，讓你更加速而有效的創新轉型與展現組織運營績效。
    p 除5/22宣告零壹解決方案日大會啟動外，今年將更盛大舉辦於7月、10月、1月就每個議程主題延伸為半日主題論壇，深入探討每個方案架構與產業應用實例，協助客戶快速導入與創造商機；每月將更專精舉辦工作坊與培訓課程，實機上線操作，深入淺出培植IT競爭力。在都是為企業IT夥伴們，提供更扎實與完整的解決方案，為客戶創造更高效的價值貢獻。
    h6 專案時程
    b-row.m-0.justify-content-around.align-items-start.flex-column.flex-md-row.items
      b-col.item(
        v-for="(data, index) in datas",
        :key="index",
        :class="{ show: index < active.length }"
      )
        b-col
          p.m-0 {{ data.date }}
        b-button.dot(@click="show([data.title,index])")
        b-col {{ data.title }}
    b-row#card.m-0(v-if="active.indexOf('啟動大會') > -1")
      b-col#card1(cols="12" md="4").text-white
        b-col(cols="12").text-center.py-3
          h2(style="font-weight:bolder") 啟動大會
        b-col(cols="12").py-3
          .d-flex.align-items-center.justify-content-center
            font-awesome-icon.icon(:icon="['far', 'clock']").mr-1
            | 時間：
          p.m-0.text-center 5/22(三)13：00 ~ 16：00
          .d-flex.align-items-center.justify-content-center [
            font-awesome-icon.icon(:icon="['fas', 'calendar-plus']").mx-1
            | 加到 outlook/apple 行事曆 ]
          .d-flex.align-items-center.justify-content-center [
            font-awesome-icon.icon(:icon="['fas', 'calendar-plus']").mx-1
            | 加到 google 行事曆 ]
        b-col(cols="12").py-3
          .d-flex.align-items-center.justify-content-center
            font-awesome-icon.icon(:icon="['fas', 'map-marker-alt']").mr-1
            | 地點：
          p.text-center.m-0 台北寒舍艾美酒店3樓
          .d-flex.align-items-center.justify-content-center [
            font-awesome-icon.icon(:icon="['fas', 'map-marked-alt']").mx-1
            | 台北市信義區松仁路 38 號 ]
      b-col#card2(cols="12" md="8").d-flex.flex-wrap.p-0
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 13.00 ~ 13.30
          b-col(cols="12" md="6")
            p 報到
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 13.30 ~ 13.40
          b-col.photo(cols="6" md="3") 零壹科技總經理
          b-col(cols="12" md="6")
            p 打造零壹與企業IT的共榮平台生態圈
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 13.40 ~ 14.10
          b-col.photo(cols="6" md="3")
            b-img(:src="require('@/assets/images/speaker/01.jpg')")
            |勤業眾信
          b-col(cols="12" md="6")
            p 解析台灣企業數位轉型的挑戰與契機
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 14.10 ~ 14.30
          b-col.photo(cols="6" md="3")
            b-img(:src="require('@/assets/images/speaker/02.jpg')")
            |零壹技術顧問楊博文
          b-col(cols="12" md="6")
            p 躍進多雲環境，強化資料管理與安全應用
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 14.30 ~ 14.50
          b-col.photo(cols="6" md="3")
            b-img(:src="require('@/assets/images/speaker/03.jpg')")
            |零壹技術顧問陳鳴豪
          b-col(cols="12" md="6")
            p 企業資安防禦面面觀
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 14.50 ~ 15.10
          b-col.photo(cols="6" md="3")
            b-img(:src="require('@/assets/images/speaker/04.jpg')")
            |零壹技術顧問楊炳文
          b-col(cols="12" md="6")
            p 新融合 - 經典中帶著創新的融合新應用
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 15.10 ~ 16.00
          b-col(cols="12" md="6")
            p 現場交流與攤位展示
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 16.00 ~ 16.20
          b-col.photo(cols="6" md="3") 零壹科技
          b-col(cols="12" md="6")
            p 零壹方案整合架構與產業應用
        b-col(cols="12").list
          b-col.time(cols="6" md="3").text-secondary.m-0 16.20 ~ 16.30
          b-col(cols="12" md="6")
            p 幸運抽獎
</template>

<script>
export default {
  data () {
    return {
      datas: [
        { date: '5/22', title: '啟動大會' },
        { date: '10月', title: 'HCI主題論壇' },
        { date: '2020/01', title: '雲主題論壇' },
        { date: '每月', title: '工作坊/課程' },
        { date: '7月', title: '資安主題論壇' }
      ],
      active: []
    }
  },
  methods: {
    show (data) {
      const result = []
      for (let i = 0; i < data[1] + 1; i++) {
        result.push(data[0])
      }
      this.active = result
    }
  },
  mounted () {
    this.active.push('啟動大會')
  }
}
</script>

<style lang="scss" scoped>
@mixin sm {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin md {
  @media (min-width: 768px) {
    @content;
  }
}

#section02 {
  background-color: #eeeeee;
  padding: 100px 0;
}
p {
  text-align: justify;
}
#bigtitle {
  .title {
    font-weight: bolder;
    font-size: 2rem;
  }
  .title2 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
  .agenda {
    padding: 0 1rem;
    flex: 0 0 50%;
    @include sm {
      flex: 0 0 20%;
    }
  }
}
h6 {
  color: #aacd06;
  font-weight: bold;
  text-align: center;
}
.items {
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 90%;
    position: absolute;
    background-color: gray;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  @include sm {
    &::before {
      content: "";
      width: 90%;
      height: 1px;
      position: absolute;
      background-color: gray;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      @include md {
        top: 50%;
      }
    }
  }
}
.item {
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @include sm {
    flex-direction: column;
  }
  .col {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid gray;
    flex-grow: 0;
    padding: 0;
    flex-basis: auto;
    cursor: pointer;
  }
}
.show {
  color: #aacd06;
  font-weight: bold;
  .dot {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background: url("~@/assets/images/dot.png") no-repeat center/cover;
      width: 20px;
      height: 20px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 120px;
      background-color: #aacd06;
      @include sm {
        height: 2px;
        width: 100px;
      }
    }
  }
}
#card{
  border-radius: 30px;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #aacd06;
}
#card1{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 5rem 0;
}
#card2{
  border-radius: 30px;
  font-size: 1.2rem;
  overflow: hidden;
  .list{
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    p{
      font-weight: bolder;
      margin: 0;
      font-size: 1rem;
    }
    .photo{
      color: #6C757D;
      font-weight: 600;
      font-size: 15px;
      flex: 1 0 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @include sm{
        text-align: center;
        align-items: center;
        flex: 0 0 25%;
        order: 4;
      }
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
        @include sm{
          display: block;
        }
      }
    }
    .time{
      font-size: 1.5rem;
      font-weight: 100;
      flex: 1 0 50%;
      padding: 0 15px;
      @include sm{
        flex: 0 0 25%;
      }
    }
    &:nth-child(odd){
      background-color: white;
    }
    &:nth-child(even){
      background-color: #fbfbfb;
    }
  }
}
</style>
