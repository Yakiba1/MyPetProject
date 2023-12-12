<template>
  <div class="shared-slider-navigation">
    <div class="shared-slider-navigation__item">
      <button class="shared-slider-navigation__button" :disabled="isDisabledPrev" @click="emit('prev')">
        <IconPrevSlider />
      </button>
    </div>
    <div class="shared-slider-navigation__item">
      <button class="shared-slider-navigation__button" :disabled="isDisabledNext" @click="emit('next')">
        <IconNextSlider />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconPrevSlider from '~/components/icons/IconPrevSlider.vue';
import IconNextSlider from '~/components/icons/IconNextSlider.vue';
import type {
  ISharedSliderNavigationEmits,
  ISharedSliderNavigationProps,
} from '~/components/SharedSlider/SharedSliderNavigation/SharedSliderNavigation.types';

const emit = defineEmits<ISharedSliderNavigationEmits>();
defineProps<ISharedSliderNavigationProps>();
</script>

<style scoped lang="scss" src="./SharedSliderNavigation.scss"></style>
