<script>
import { RouterView } from 'vue-router'
import { c_header, c_footer } from '@/components/layout';

export default {
  name: 'Home',
  components: {
    c_header, c_footer,
    RouterView
  }
}
</script>

<template>
  <c_header />
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
  <c_footer />
</template>

<style lang="scss">
@import '@/styles/reset.scss';
@import '@/styles/base.scss';
@import '@/styles/layout.scss';
@import '@/styles/main.scss';
</style>