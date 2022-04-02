<template>
  <section class="flex flex-col p-3 sm:p-6">
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-kingthings text-outline-1 text-2xl">
        {{ name }}
      </h2>
      <span
        class="font-mono text-sm inline-block py-1 px-2 rounded text-zinc-900 font-bold self-start"
        :class="completionStatus"
      >
        {{ progress }}%
      </span>
    </header>
    <div class="flex justify-around">
      <div
        v-for="item in equipmentPieces"
        :key="item"
        class="relative"
      >
        <img
          :src="`/images/${brother}/${item}.png`"
          :class="`opacity-${isObtained(item) ? '10' : '8'}0`"
          class="inline-block"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 absolute -top-1.5 -right-1.5 opacity-90"
          viewBox="0 0 20 20"
          fill="currentColor"
          :class="isObtained(item) ? 'text-green-500' : 'text-red-500'"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
            v-if="isObtained(item)"
          />
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clip-rule="evenodd"
            v-else
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { BarrowsBrother } from '@/types/brothers';
import { BARROWS_BROTHERS } from '@/utils/brothers';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarrowsSet',
  props: {
    brother: {
      type: String,
      required: true,
    },
    obtainedItems: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      equipmentPieces: ['helm', 'body', 'legs', 'weapon'],
    };
  },
  computed: {
    name() {
      return BARROWS_BROTHERS[this.$props.brother as BarrowsBrother];
    },
    itemsCount() {
      const { obtainedItems, brother } = this.$props;

      return obtainedItems[brother].length;
    },
    progress() {
      return (this.itemsCount / 4) * 100;
    },
    completionStatus() {
      switch (this.progress) {
        case 0:
          return 'bg-red-500';

        case 100:
          return 'bg-green-500';

        default:
          return 'bg-yellow-500';
      }
    },
  },
  methods: {
    getItemImagePath(item: string) {
      return require(`@/assets/${this.$props.brother}/${item}.png`);
    },
    isObtained(item: string) {
      const { brother, obtainedItems } = this.$props;

      return obtainedItems[brother].includes(item);
    },
  },
});
</script>

<style scoped>
.text-kingthings {
  line-height: 1;
}
</style>
