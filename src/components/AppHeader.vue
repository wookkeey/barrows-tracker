<template>
  <header class="my-6 text-center">
    <div class="relative">
      <h1
        class="text-kingthings relative text-outline-1 px-4 z-10 bg-zinc-900 inline-block text-center text-4xl"
      >
        Barrows Tracker
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {};
  },
});
</script>

<style
  lang="postcss"
  scoped
>
div::after {
  @apply bg-zinc-800;
  content: ' ';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  margin-top: -1px;
}
</style>
