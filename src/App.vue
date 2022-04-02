<script
  setup
  lang="ts"
>
import AppHeader from '@/components/AppHeader.vue';
import BarrowsSets from '@/components/BarrowsSets.vue';
</script>

<template>
  <AppHeader></AppHeader>
  <main class="mx-auto my-6">
    <BarrowsSets></BarrowsSets>
  </main>
</template>

<style
  lang="postcss"
  scoped
>
main {
  width: 20rem;
}
</style>
