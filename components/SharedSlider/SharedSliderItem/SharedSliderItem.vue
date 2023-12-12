<template>
  <div class="slider-item">
    <SharedCard :item="item">
      <template #card-header>
        <div class="slider-item__header">
          <SharedTagCard :item="item" />
          <slot name="navigation" />
        </div>
      </template>
      <template #body>
        <SharedBodyCard :show-date="false" :item="item" />
      </template>
    </SharedCard>
    <div class="slider-item__footer">
      <div v-if="item.date" class="date">{{ item.date }}</div>
      <nuxt-link>Ссылка</nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import SharedCard from '~/components/SharedCard/SharedCard.vue';
import SharedBodyCard from '~/components/SharedCard/SharedBodyCard/SharedBodyCard.vue';
import SharedTagCard from '~/components/SharedCard/SharedTagCard/SharedTagCard.vue';
import type { ISharedSliderItemProps } from '~/components/SharedSlider/SharedSliderItem/SharedSliderItem.types';

defineProps<ISharedSliderItemProps>();
</script>

<style scoped lang="scss" src="./SharedSliderItem.scss"></style>
