<template>
  <div class="tag">{{ item.tag }}</div>
</template>

<script setup lang="ts">
import type { ISharedTagCardProps } from '~/components/SharedCard/SharedTagCard/SharedTagCard.types';

defineProps<ISharedTagCardProps>();
</script>

<style scoped lang="scss" src="./SharedTagCard.scss"></style>
