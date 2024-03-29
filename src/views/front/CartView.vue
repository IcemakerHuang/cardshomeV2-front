<template lang="pug">
VContainer(class="custom-font")
  VCol(cols="12")
    h1 認同卡選取清單
  VDivider
  VCol(cols="12")
    //- 表格呈現
    VDataTable(:items="cart" :headers="headers")
      template(#[`item.product.name`]="{ item }")
        span(v-if="item.product.sell") {{ item.product.name }}
        span.text-red.text-decoration-line-through(v-else) {{ item.product.name }} (已下架)
      template(#[`item.quantity`]="{ item }")
        VBtn(variant="text" icon="mdi-minus" color="red" @click="addCart(item.product._id, -1)")
        | {{ item.quantity }}
        VBtn(variant="text" icon="mdi-plus" color="green" @click="addCart(item.product._id, 1)")
      template(#[`item.action`]="{ item }")
        VBtn(variant="text" icon="mdi-delete" color="red" @click="addCart(item.product._id, item.quantity * -1)")
  VCol.text-center(cols="12")
    p 所有卡面合計費用: {{ total }}
    //- 結帳按鈕
    VBtn(color="pink-lighten-2" :disabled="!canCheckout" :loading="isSubmitting" @click="checkout") 儲存
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])
const headers = [
  { title: '商品名稱', key: 'product.name' },
  { title: '單價', key: 'product.price' },
  { title: '數量', key: 'quantity' },
  { title: '總價', key: 'total', value: item => item.product.price * item.quantity },
  { title: '操作', key: 'action' }
]

const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity * current.product.price
  }, 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const addCart = async (product, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product,
      quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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

const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
    createSnackbar({
      text: '結帳成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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
  isSubmitting.value = false
}

// 將資訊渲染到前端頁面上，包括從後端獲取資訊，並處理可能的錯誤
// Vue 組件掛載（mounted）時，從後端 API /users/cart 得到購物車資訊，並將資訊加到 cart.value 中。
onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
})

</script>

<style scoped lang="sass">
@font-face
  font-family: 'Openhuninn'
  src: url('@/assets/jf-openhuninn-2.0.ttf') format('truetype')

.custom-font
  font-family: 'Openhuninn', sans-serif
</style>
