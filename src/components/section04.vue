<template lang="pug">
#section04
  b-container
    b-row.justify-content-center
      b-col.categ(cols="6", md="auto")
        h3(@click="select('產品館')", :class="{ selected: selected === '產品館' }") 產品館
      b-col.categ(cols="6", md="auto")
        h3(@click="select('主題館')", :class="{ selected: selected === '主題館' }") 主題館
    b-row(v-if="selected === '產品館'")
      b-col.d-flex.cards(
        v-for="(data, index) in datas",
        :key="index",
        cols="12",
        md="6"
      )
        b-col.photo(cols="4")
          b-img(:src="require('@/assets/images/product/' + (index + 1) + '.png')")
          | {{ data.name }}
        b-col.d-flex.flex-column.justify-content-around.text(cols="8")
          .py-3
            p.m-0 {{ data.first }}
            p.m-0 {{ data.second }}
          .line.my-3
          b-button.badge-pill.align-self-start.px-5.my-3 了解更多
    b-row(v-if="selected === '主題館'")
      b-col.theme(v-for="(data, index) in datas1", :key="index", cols="12")
        b-col.p-0.photo1(cols="12", md="4")
          b-img(:src="require('@/assets/images/theme/theme' + (index + 1) + '.jpg')")
        b-col.text1(cols="12", md="8")
          h2 {{ data.title }}
          p {{ data.text }}
</template>

<script>
export default {
  data () {
    return {
      selected: '產品館',
      datas: [
        {
          name: 'Akamai',
          first: '簡單、輕鬆、一指完成',
          second: '30秒搞定企業資安基礎防護'
        },
        {
          name: 'BlackBerry',
          first: '跨平台數位資產協同合作之安全與稽核',
          second: ''
        },
        {
          name: 'Cisco',
          first: '人工智慧時代的伺服器',
          second: 'Cisco UCS 480 ML M5'
        },
        {
          name: 'CyCarrier',
          first: 'AI資安防禦再進化!',
          second: '偵測出自己偵測不到的惡意程式'
        },
        {
          name: 'F5',
          first: '輕鬆駕馭多雲環境',
          second: '全方位分析應用服務管理一次搞定'
        },
        {
          name: 'Ipswitch',
          first: '網路設備主機監控 WhatsUp Gold-營運不中斷必備解決方案',
          second: ''
        },
        {
          name: 'Microsoft',
          first: 'Azure Security Center 服務安全一覽無遺',
          second: ''
        },
        {
          name: 'NetApp',
          first: '釋放您的資料中心，領導高速全閃存整合方案',
          second: ''
        },
        {
          name: 'Nutanix',
          first: '享受建構、運作、跨雲及創新的自由',
          second: ''
        },
        { name: 'NVIDIA', first: 'NVIDIA GPU 應用 全面進化', second: '' },
        {
          name: 'Palo Alto Networks',
          first: '與資安大神同行，逆轉AI人工智慧',
          second: ''
        },
        {
          name: 'Splunk',
          first: 'Splunk 資安維運平台與建構掏金價值的大數據中心',
          second: ''
        },
        {
          name: 'Trend Micro',
          first: '安全與效能堅固的即時偵測、強制管制與矯正解決方案',
          second: ''
        },
        {
          name: 'Veeam',
          first: 'Veeam 首屈一指的雲端資料管理',
          second: 'AWS、Azure、IBM Cloud'
        },
        { name: 'Veritas', first: '多雲時代的資料管理', second: '' },
        {
          name: 'VMware',
          first: '虛擬化領導品牌',
          second: 'VMware SDDC 打造未來 IT 基礎架構'
        }
      ],
      datas1: [
        {
          title: '企業數位轉型資安全面觀',
          text:
            '企業針對數位轉型將面臨應用服務、雲服務使用、資訊安全與行動化等四大面向的挑戰，零壹科技整合資訊安全品牌，利用品牌特色與零壹科技的資安多年的建置經驗，以資安顧問角度結合頂尖的技術情資服務，在數位轉型的浪潮下，資訊安全得到保障。雲端服務為企業在轉型中重要政策之一，能讓企業提供之數位應用服務，更具彈性與靈活。零壹科技結合雲平台與代理解決方案，透過雲架構師們專業的規劃，讓企業再使用IaaS、Paas，Saas等服務時發揮給價值，帶與企業無限的商機'
        },
        {
          title: '要進多雲環境，強化資料管理與安全應用',
          text:
            '多雲整合使用，如何確保資料轉移交換安全性。也同時藉由NetApp儲存整合，可以平行與公有雲資料交換、同步、備援...，釋放建構完整容器服務。'
        },
        {
          title: '新融合-經典中帶著創新的融合新應用',
          text:
            '當企業決定數位轉型後，服務與資料成為企業極為重要的一部分，管理者非常渴望的解決方案，就是在一個極簡單且功能強大的操作環境下，能全方位的保護現有企業內部重要的服務與資料。零壹科技致力於全方位虛擬平台基礎建設的完整解決方案，從一個點到一個面的完整保護，讓您提高企業生產力及創造力。'
        }
      ]
    }
  },
  methods: {
    select (data) {
      this.selected = data
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
#section04 {
  background-color: #eee;
}
.categ {
  text-align: center;
}
h3 {
  margin: 0;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  font-weight: bolder;
  justify-content: center;
}

.selected {
  position: relative;
  color: #aacd06;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: #aacd06;
  }
}

img {
  object-fit: contain;
  max-width: 100%;
}
.cards {
  border-radius: 20px;
  overflow: hidden;
  padding: 15px;
}
.photo {
  background-color: white;
  border-radius: 20px 0 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.text {
  background-color: #f9f9f9;
  border-radius: 0 20px 20px 0;
}
.line {
  width: 20%;
  height: 3px;
  background-color: #aacd06;
}

.theme {
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  img {
    object-fit: cover;
    max-width: 100%;
    @include sm {
      max-width: auto;
      height: 100%;
    }
  }
  .photo1{
    border-radius: 50px 50px 0 0;
    overflow: hidden;
    @include sm{
      border-radius: 50px 0 0 50px;
    }
  }
  .text1 {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0 0 50px 50px;
        @include sm{
      border-radius: 0 50px 50px 0;
    }
    h2 {
      padding: 15px 0;
      color: #aacd06;
      font-weight: bolder;
      font-size: 1.5rem;
      @include sm{
        font-size: 2rem;
      }
    }
  }
  &:nth-child(2) {
    @include sm {
      .photo1 {
        order: 2;
        border-radius: 0 50px 50px 0;
      }
      .text1 {
        order: 1;
        border-radius: 50px 0 0 50px;
      }
    }
  }
}
.badge-pill {
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  &:hover {
    background: linear-gradient(transparent,rgba(0,0,0,0.5)),linear-gradient(#aacd06, #6cb043);
  }
}
</style>
