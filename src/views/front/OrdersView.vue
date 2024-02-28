<template lang="pug">
VContainer(class="custom-font")
  VRow
    VCol(cols="12")
      h1 我的認同卡紀錄
    VCol(cols="12")
      VDataTable(:items="orders" :headers="headers")
        template(#[`item.createdAt`]="{ item }")
          | {{ new Date(item.createdAt).toLocaleString() }}
        template(#[`item.cart`]="{ item }")
          ul
            li(v-for="cart in item.cart" :key="cart._id")
              | {{ cart.product.name }} * {{ cart.quantity }}
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const orders = ref([])
const headers = [
  { title: '申辦編號', key: '_id' },
  { title: '日期', key: 'createdAt' },
  { title: '卡面', key: 'cart', sortable: false },
  {
    title: '費用',
    key: 'price',
    value: (item) => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.product.price
      }, 0)
    }
  }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.value.push(...data.result)
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
