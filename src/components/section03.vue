<template lang="pug">
#section03
  b-container.text-white
    b-row.justify-content-between
      b-col.d-flex.align-items-end(cols="12" md="6")
        h1.m-0 贊助產商
        h2.m-0 Awesome Sponsors
      b-col.d-flex.justify-content-md-end.justify-content-around(cols="12" md="6")
        h3.m-0(@click="select('白金級')", :class="{ selected: selected === '白金級' }") 白金級
        h3.m-0(@click="select('黃金級')", :class="{ selected: selected === '黃金級' }") 黃金級
        h3.m-0(@click="select('銀級')", :class="{ selected: selected === '銀級' }") 銀級
    b-row.sponsor(v-if="selected === '白金級'")
      b-col.item(cols="6", md="3" v-for="(data,index) in 4" :key="index")
        b-img(:src="require('@/assets/images/sponsor1/'+data+'.png')")
    b-row.sponsor(v-if="selected === '黃金級'")
      b-col.item(cols="6", md="2" v-for="(data,index) in 12" :key="index")
        b-img(:src="require('@/assets/images/sponsor2/'+data+'.png')")
    b-row.sponsor(v-if="selected === '銀級'")
      b-col.item(cols="6", md="3" v-for="(data,index) in 4" :key="index")
        b-img(:src="require('@/assets/images/sponsor3/'+data+'.png')")
</template>

<script>
export default {
  data () {
    return {
      selected: '白金級'
    }
  },
  methods: {
    select (item) {
      this.selected = item
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
#section03 {
  background: url("~@/assets/images/small bg.png") no-repeat center/cover;
  padding: 50px 0;
}
h1 {
  font-weight: bolder;
  padding: 0 1rem;
}
h2 {
  font-weight: bolder;
  padding: 0 1rem;
  font-size: 1rem;
  letter-spacing: 5px;
}
.item {
  padding: 15px;
  img {
    border-radius: 10px;
    background-color: white;
    padding: 1rem;
    object-fit: contain;
    max-width: 100%;
  }
}
h3 {
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
  font-weight: bolder;
}
.selected {
  position: relative;
  color: black;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    background-color: black;
  }
}
.sponsor {
  padding: 50px 0;
  @include sm {
    height: 300px;
    align-content: center;
    align-items: center;
  }
}
</style>
