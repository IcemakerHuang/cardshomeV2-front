<template>
<v-container class="custom-font html-body">
  <v-row>
    <v-col cols="12">
      <h1>所有文章列表</h1>
    </v-col>
    <v-divider></v-divider>
    <v-col cols="12" md="6" lg="3" v-for="article in articles" :key="article._id">
      <article-card v-bind="article" />
    </v-col>
  </v-row>
</v-container>
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
import ArticleCard from '@/components/ArticleCard.vue'
// 生命週期是指元件（.vue）會經歷創建、掛載、更新和銷毀等過程。

import gsap from 'gsap'

const { api } = useApi()
const createSnackbar = useSnackbar()

const articles = ref([])

onMounted(async () => {
  try {
    // 最新認同卡列表
    const { data } = await api.get('/articles', {
      params: {
        itemsPerPage: -1 // 設 -1 讓 back/controllers/products.js 回傳所有商品
      }
    })
    articles.value.push(...data.result.data)
    await nextTick()
    gsap // 商品卡做動畫效果
      .to('.article-card', { opacity: 1, duration: 0.5 })
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

const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
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

.F15946
  background-color:#F15946
.font-white
  color: white
.footer-bg
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)
</style>
