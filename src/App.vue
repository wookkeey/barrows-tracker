<script
  setup
  lang="ts"
>
import AppHeader from '@/components/AppHeader.vue';
import BarrowsSets from '@/components/BarrowsSets.vue';
</script>

<template>
  <AppHeader></AppHeader>
  <main class="mx-auto p-3 sm:p-6">
    <BarrowsSets></BarrowsSets>
  </main>
</template>

<style
  lang="postcss"
  scoped
>
main {
  min-width: 20rem;
  max-width: 40rem;
  width: 100%;
}
</style>
