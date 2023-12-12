<template>
  <div class="slider">
    <Transition name="fade" mode="out-in">
      <SharedSliderItem :key="updateKey" :item="slides[activeIdxSlide]">
        <template #navigation>
          <SharedSliderNavigation
            :is-disabled-prev="isDisabledPrev"
            :is-disabled-next="isDisabledNext"
            @prev="doPrev"
            @next="doNext"
          />
        </template>
      </SharedSliderItem>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import SharedSliderItem from '~/components/SharedSlider/SharedSliderItem/SharedSliderItem.vue';
import type { ISharedSliderExpose, ISharedSliderProps } from '~/components/SharedSlider/SharedSlider.types';
import SharedSliderNavigation from '~/components/SharedSlider/SharedSliderNavigation/SharedSliderNavigation.vue';

const props = defineProps<ISharedSliderProps>();

const DEFAULT_IDX = 0;

const activeIdxSlide = ref<number>(DEFAULT_IDX);
const updateKey = ref<number>(0);

const isDisabledPrev = computed<boolean>(() => activeIdxSlide.value === 0);
const isDisabledNext = computed<boolean>(() => activeIdxSlide.value === props.slides.length - 1);

const forceUpdateKey = () => (updateKey.value > 2 ? updateKey.value++ : updateKey.value--);

const doPrev = () => {
  if (isDisabledPrev.value) return;
  activeIdxSlide.value--;
  forceUpdateKey();
};
const doNext = () => {
  if (isDisabledNext.value) return;
  activeIdxSlide.value++;
  forceUpdateKey();
};

const doDefaultIdx = () => {
  activeIdxSlide.value = DEFAULT_IDX;
  forceUpdateKey();
};

defineExpose<ISharedSliderExpose>({
  doDefaultIdx,
});
</script>
