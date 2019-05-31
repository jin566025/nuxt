<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item,idx) in cur"
        :key="idx">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [
					{title:'森森的烘焙系私家定制&DIY蛋糕',pos:'石桥铺',price:'10',img:'//p1.meituan.net/deal/f50d3f181087125d50b2899205b03b0f84330.jpg@368w_208h_1e_1c'},
					{title:'UME影城(两江西奥))',pos:'两江西',price:'10',img:'//p0.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@214w_297h_1e_1c'},
					{title:'中影国际影城(九龙坡印象汇店)',pos:'石桥铺',price:'10',img:'//p1.meituan.net/moviemachine/42ef79dd1d894b67dd57de383d753c03556009.jpg@214w_297h_1e_1c'},
					{title:'king大志烤肉黑毛牛专门店',pos:'石桥铺',price:'30',img:'//p1.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@214w_297h_1e_1c'},
					{title:'木子手工蛋糕（大坪店）',pos:'大坪',price:'20',img:'//p1.meituan.net/bbia/a9049011b4cef4c5caed51293e60bff2164918.jpg@368w_208h_1e_1c'},
					{title:'幸福西饼生日蛋糕（汇龙店）',pos:'汇龙',price:'50',img:'//p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c'},
					{title:'鑫冠饼屋',pos:'大坪',price:'20',img:'//p0.meituan.net/mogu/a66fdf98f1678a4fe53fc2abbccd096b71477.jpg@368w_208h_1e_1c'}
				],
        part: [
					{title:'木子手工蛋糕（大坪店）',pos:'大坪',price:'20',img:'//p0.meituan.net/msmerchant/b6f532ecaf2cd5afd36ca57fd5f17f5765817.jpg@368w_208h_1e_1c'},
					{title:'鑫冠饼屋',pos:'大坪',price:'20',img:'//p0.meituan.net/mogu/a66fdf98f1678a4fe53fc2abbccd096b71477.jpg@368w_208h_1e_1c'},
					{title:'大志烤肉黑毛牛专门店（大坪店）',pos:'大坪',price:'30',img:'//p0.meituan.net/msmerchant/233afb5b9201ee7a4bedfb4813a69241313783.jpg@368w_208h_1e_1c'},
					{title:'木子手工蛋糕（大坪店）',pos:'大坪',price:'20',img:'//p1.meituan.net/bbia/a9049011b4cef4c5caed51293e60bff2164918.jpg@368w_208h_1e_1c'}
				],
        spa: [
					{title:'幸福西饼生日蛋糕（汇龙店）',pos:'汇龙',price:'50',img:'//p0.meituan.net/msmerchant/df8ed3cc84b4de5321fff48c9c352b83789724.jpg@368w_208h_1e_1c'},
					{title:'牛仔世家牛排餐厅（时代天街店）',pos:'时代天街',price:'40',img:'//p0.meituan.net/deal/45f2121e4f3d5f33a4f4b1028e27820661060.jpg@0_95_697_422a|388h_640w_2e_90Q|213w_120h_1e_1c'},
					{title:'储缘蛋糕（金港巷店）',pos:'石桥铺',price:'30',img:'//p1.meituan.net/deal/c5ef517ebf2eff39817efd87ff6a709a60059.jpg@0_24_800_484a|388h_640w_2e_90Q|213w_120h_1e_1c'}
				],
        movie:[
					{title:'king大志烤肉黑毛牛专门店',pos:'石桥铺',price:'30',img:'//p1.meituan.net/deal/fada5d26020a1e380163d42edad2aff4241180.jpg@0_349_960_581a|388h_640w_2e_90Q|213w_120h_1e_1c'},
					{title:'小P老师-P.STYLE 派斯造型（时代天街D馆店）',pos:'龙湖时代天街',price:'30',img:'//p1.meituan.net/movie/b76f37b5e3484b6837f75ef7b5bf46452066459.jpg@214w_297h_1e_1c'},
					{title:'娇诗尼亚减肥瘦身经络理疗（东原D7城店）',pos:'江北大石坝',price:'30',img:'//p0.meituan.net/deal/b4f2d5c26c0f8148752c1df9194e8434139438.jpg@0_24_800_484a|388h_640w_2e_90Q|213w_120h_1e_1c'},
					{title:'king大志烤肉黑毛牛专门店',pos:'石桥铺',price:'30',img:'//p1.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@214w_297h_1e_1c'}
				],
        travel: [
					{title:'中影国际影城(九龙坡印象汇店)',pos:'石桥铺',price:'10',img:'//p0.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@214w_297h_1e_1c'},
					{title:'万达影城(南坪万达广场店)',pos:'万达广场',price:'10',img:'//p1.meituan.net/moviemachine/42ef79dd1d894b67dd57de383d753c03556009.jpg@214w_297h_1e_1c'},
					{title:'UME影城(两江西奥))',pos:'两江西',price:'10',img:'//p0.meituan.net/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg@214w_297h_1e_1c'},
					{title:'中影国际影城(九龙坡印象汇店)',pos:'石桥铺',price:'10',img:'//p1.meituan.net/moviemachine/42ef79dd1d894b67dd57de383d753c03556009.jpg@214w_297h_1e_1c'}
				]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },

  methods: {
    over:function(e) {
     let dom = e.target
     let tag = dom.tagName.toLowerCase()
		 let that = this
		 if(tag === 'dd'){
			  this.kind = dom.getAttribute('kind')
			  let keyword = dom.getAttribute('keyword')
		 }
    }
  },

}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>
