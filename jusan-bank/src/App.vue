<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from "@/components/header/header.vue";
import FooterComp from "@/components/footer/footer.vue";


</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style lang="scss" scoped>
</style>
