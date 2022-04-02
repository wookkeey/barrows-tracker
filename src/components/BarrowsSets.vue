<script
  lang="ts"
  setup
>
import BarrowSet from './BarrowSet.vue';
</script>

<template>
  <div class="m-2 divide-y divide-zinc-800">
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
