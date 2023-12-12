<template>
  <div class="card">
    <div class="card__header">
      <slot name="card-header" />
    </div>
    <div class="card__body">
      <NuxtImg :class="['card__img', classSize]" v-bind="item.img" />
      <slot name="body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISharedCardProps } from '~/components/SharedCard/SharedCard.types';
import { defaultISharedCardProps, listClassesSize } from '~/components/SharedCard/SharedCard.data';

const props = withDefaults(defineProps<ISharedCardProps>(), defaultISharedCardProps);
const classSize = computed(() => listClassesSize[props.size]);
</script>

<style scoped lang="scss" src="./SharedCard.scss"></style>
