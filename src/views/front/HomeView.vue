<template>
<div>
  <v-row>
    <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">

          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-row>
</div>
<v-container class="custom-font html-body">
  <!-- 首頁輪播 -->
  <!-- 認同卡列表 -->
  <v-row>
    <v-col cols="12">
      <h1>最新認同卡</h1>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12" md="6" lg="3" v-for="product in products" :key="product._id">
      <product-card v-bind="product" />
    </v-col>
  </v-row>
  <!-- 認同卡文章列表 -->
  <v-row>
    <v-col cols="12">
      <h1>最新文章</h1>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12" md="6" lg="3" v-for="article in articles" :key="article._id">
      <article-card v-bind="article" />
    </v-col>
  </v-row>
</v-container>
<!-- 頁尾 -->
<v-footer
    class="footer-bg text-center d-flex flex-column mt-6 custom-font"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Copyright ©  IcemakerDesign. All rights reserved.</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog' // 提供錯誤訊息
import ProductCard from '@/components/ProductCard.vue'
import ArticleCard from '@/components/ArticleCard.vue' // .vue都會經歷生命週期
// 生命週期是指元件（.vue）會經歷創建、掛載、更新和銷毀等過程。

import gsap from 'gsap'

const { api } = useApi()
const createSnackbar = useSnackbar()

const products = ref([])
const articles = ref([])
// footer
const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
])

onMounted(async () => {
  try {
    // 最新認同卡列表
    const { data } = await api.get('/products', {
      params: {
        itemsPerPage: -1 // 設 -1 讓 back/controllers/products.js 回傳所有商品
      }
    })
    products.value.push(...data.result.data)
    await nextTick()
    // 文章列表
    const { data: articlesData } = await api.get('/articles', {
      params: {
        itemsPerPage: -1 // 設 -1 讓 back/controllers/products.js 回傳所有商品
      }
    })
    articles.value.push(...articlesData.result.data)

    await nextTick()
    // 商品卡做動畫效果
    gsap.to('.product-card', { opacity: 1, duration: 0.5 })
    gsap.to('.article-card', { opacity: 1, duration: 0.5 })
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

// 首頁輪播
// 使用 ref 創建響應式變量
const items = ref([
  {
    src: 'https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/School%20Affinity%20Card_KV.jpg'
  },
  {
    src: 'https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/2019041204_03.jpg'
  },
  {
    src: 'https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/KV_1366x430.jpg'
  },
  {
    src: 'https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/Carousel/lowcarboncard-KV.jpg'
  }
])
const slides = ref([
  '',
  '',
  '',
  '',
  ''
])
</script>

<style scoped lang="sass">
.product-card
  opacity: 0
.product-card
  opacity: 0

@font-face
  font-family: 'Openhuninn'
  src: url('@/assets/jf-openhuninn-2.0.ttf') format('truetype')

.custom-font
  font-family: 'Openhuninn', sans-serif

.F15946
  background-color:#F15946
.font-white
  color: white
.footer-bg
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)
</style>
