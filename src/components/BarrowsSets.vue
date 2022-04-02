<script
  lang="ts"
  setup
>
import BarrowSet from './BarrowSet.vue';
</script>

<template>
  <div class="grid grid-cols-2">
    <BarrowSet
      v-for="brother in brothers"
      :key="brother"
      :brother="brother"
      :obtained-items="obtainedItems"
    ></BarrowSet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BARROWS_BROTHERS, OBTAINED_ITEMS } from '@/utils/brothers';

export default defineComponent({
  name: 'BarrowsSets',
  data() {
    return {
      brothers: Object.keys(BARROWS_BROTHERS),
      obtainedItems: OBTAINED_ITEMS,
    };
  },
});
</script>

<style
  lang="postcss"
  scoped
>
.grid > section {
  border-bottom: 1px solid theme('colors.zinc.800');
}

.grid > section:nth-child(2n) {
  border-left: 1px solid theme('colors.zinc.800');
}

.grid > section:nth-child(5),
.grid > section:nth-child(6) {
  border-bottom: 0;
}
</style>
