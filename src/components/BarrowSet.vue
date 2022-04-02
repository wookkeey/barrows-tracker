<template>
  <section class="flex flex-col py-8">
    <header class="flex justify-between items-center mb-4">
      <h2 class="text-kingthings text-outline-1 text-2xl">{{ name }}</h2>
      <small
        class="font-mono text-xs inline-block"
        :class="completionStatus"
      >
        {{ progress }}%
      </small>
    </header>
    <div class="flex justify-around">
      <div
        v-for="item in equipmentPieces"
        :key="item"
      >
        <img
          :src="`/images/${brother}/${item}.png`"
          class="inline-block"
          :class="isObtained(item) ? 'opacity-100 hue-rotate-60' : 'opacity-50'"
        />
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
          return 'text-red-500';

        case 100:
          return 'text-green-500';

        default:
          return 'text-yellow-500';
      }
    },
  },
  methods: {
    getItemImagePath(item: string) {
      return require(`@/assets/${this.$props.brother}/${item}.png`);
    },
    isObtained(item: string) {
      return this.$props.obtainedItems[this.$props.brother].includes(item);
    },
  },
});
</script>
