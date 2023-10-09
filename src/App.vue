<template>
 <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'


export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false) //默认menuVisible是看不见的
    provide('menuVisible',menuVisible) //标记menuVisible
  }
}
</script>
