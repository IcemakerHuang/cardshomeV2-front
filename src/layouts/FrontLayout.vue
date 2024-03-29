<template>
<!-- 導覽列 -->
<VAppBar color="white" class="custom-font box-shadow elevation-8 transparent-50">
  <VContainer class="d-flex align-center">
    <div class="logo ml-6">
      <v-img src="https://raw.githubusercontent.com/IcemakerHuang/cardshome_data/main/logo/football-card_12776294.png"  contain aspect-ratio="1"></v-img>
    </div>
    <VBtn to="/" :active="false" color="orange">
      <VAppBarTitle class="logo-title">卡底家 Cardshome</VAppBarTitle>
    </VBtn>
  </VContainer>
  <VContainer class="d-flex flex-row-reverse">
    <!-- <VBtn to="/" :active="false" class="rounded-pill">
      <VAppBarTitle class="nav-title">論壇</VAppBarTitle>
    </VBtn> -->
    <VBtn to="/allproductView" :active="false" class="rounded-pill">
      <VAppBarTitle class="nav-title">認同卡</VAppBarTitle>
    </VBtn>
    <VBtn to="/allarticleView" :active="false" class="rounded-pill">
      <VAppBarTitle class="nav-title">資訊文章</VAppBarTitle>
    </VBtn>
  </VContainer>
  <VSpacer></VSpacer>
  <!-- 電腦版導覽列 -->
  <!-- 根據用戶登入狀態動態顯示導航項目 -->
  <template v-for="item in navItems" >
    <VBtn :to="item.to" :prepend-icon="item.icon" v-if="item.show" :key="item.to" color="black" class="rounded-pill">{{ item.text }}
      <!-- 購物車數量標籤 -->
      <v-badge color="error" :content="user.cart" v-if="item.to === '/cart'" floating></v-badge>
    </VBtn>
  </template>
  <VBtn v-if="!user.isLogin" to="/login" prepend-icon="mdi-login" class="rounded-pill bg-pink-lighten-2" color="white">登入
    <!-- v-if="!user.isLogin" @click="logout" -->
    <v-dialog
      v-model="dialog"
      activator="parent"
      width="auto"
      class="elevation-24"
    >
      <v-card min-width="600" class="rounded-xl ">
        <v-tabs
          v-model="tab"
          bg-color="pink-lighten-2"
        >
          <v-tab class="custom-font" value="one">登入</v-tab>
          <v-tab class="custom-font" value="two">註冊</v-tab>
        </v-tabs>

        <VCardText>
          <VWindow v-model="tab">
        <Register></Register>
        <Login></Login>
          </VWindow>
        </VCardText>
        <v-card-actions>
          <!-- 關閉視窗按鈕 -->
          <VBtn class="custom-font rounded-pill" color="red" text @click="dialog = false" prepend-icon="mdi-arrow-right-thin">關閉</VBtn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </VBtn>
  <VBtn prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout" color="white" class="rounded-pill bg-pink-lighten-1">登出</VBtn>
</VAppBar>
<!-- 頁面內容 -->
<VMain>
  <div>
    <RouterView :key="$route.path"></RouterView>
  </div>
</VMain>
</template>

<script setup>
// import { useDisplay } from 'vuetify' // 手機版
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import Register from '@/components/UserRegister.vue'
import Login from '@/components/UserLogin.vue'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router' // 設路由，讓登出回到首頁

const tab = ref('one')
const dialog = ref(false) // 手動關閉 dialog 提示窗

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 導覽列項目
// 利用 computed 來動態生成 navItems
const navItems = computed(() => [
  // 登入和註冊按鈕只在用戶未登入時顯示
  // { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
  // { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin },
  // 購物車、訂單和管理按鈕只在用戶已登入時顯示
  { to: '/cart', text: '待辦認同卡', icon: 'mdi-cart', show: user.isLogin },
  { to: '/orders', text: '我的認同卡', icon: 'mdi-list-box', show: user.isLogin },
  { to: '/admin', text: '管理', icon: 'mdi-cog', show: user.isLogin && user.isAdmin }
])

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    dialog.value = false // 關閉登出提示窗
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/') // 設路由，讓登出回到首頁
  } catch (error) {
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
}

</script>

<style scoped lang="sass">
.logo
  width: 30px
  height: 30px
.logo-title
  font-size: 25px
  font-weight: bold
  color: #f15946
.logo-title
  background: linear-gradient(to top, #e01a4f, #d76d77, #ffaf7b)
  background: -webkit-linear-gradient(to top, #e01a4f, #d76d77, #ffaf7b)
  background-clip: text
  -webkit-background-clip: text
  color: transparent

.nav-title
  font-size: 20px
  font-weight: bold
  color: #0c090d

@font-face
  font-family: 'Openhuninn'
  src: url('@/assets/jf-openhuninn-2.0.ttf') format('truetype')

.custom-font
  font-family: 'Openhuninn', sans-serif

.box-shadow-x
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1)
  transition: box-shadow 0.3s ease
  &:hover
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3)
.box-shadow
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1)

.rounded-pill
  &:hover
    background-color: #EC407A
    color: #fff !important
.transparent-50
  transparent: 50%
</style>
