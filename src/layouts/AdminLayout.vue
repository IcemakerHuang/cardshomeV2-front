<template>
  <VNavigationDrawer permanent class="bg-sidebar custom-font">
    <VList>
      <!-- -! copliet有修改 prepend-avatar -->
      <VListItem :prepend-avatar="user.avatar" :title="user.account" to="/admin">
        <!-- 大頭貼 -->
      </VListItem>
    </VList>
    <VDivider />
    <VList>
      <VListItem
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        :title="item.text"
        :prepend-icon="item.icon"
      />
    </VList>
  </VNavigationDrawer>
  <VMain>
    <RouterView />
  </VMain>
</template>

<script setup>
import { useUserStore } from '@/store/user'
// import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/admin/article', text: '文章管理', icon: 'mdi-book-open-page-variant' },
  { to: '/admin/products', text: '認同卡管理', icon: 'mdi-shopping' },
  { to: '/admin/orders', text: '申請管理', icon: 'mdi-list-box' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]
// 12/28 上傳大頭貼
// const prependAvatar = computed(() => {
//   return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
// })
</script>

<style scoped lang="sass">
.bg-sidebar
  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)

@font-face
  font-family: 'Openhuninn'
  src: url('@/assets/jf-openhuninn-2.0.ttf') format('truetype')

.custom-font
  font-family: 'Openhuninn', sans-serif
</style>
