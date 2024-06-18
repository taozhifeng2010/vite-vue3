<template>
  <div>
    <header>
      <el-button type="primary">主要按钮</el-button>
    </header>
    <div>
      <AppLayout />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLayout from './layouts/AppLayout.vue';

</script>

<style lang="scss" scoped></style>