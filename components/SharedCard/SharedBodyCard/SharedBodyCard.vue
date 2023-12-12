<template>
  <p v-if="showDate" class="card-date">{{ item.date }}</p>
  <h3 class="card-title">{{ item.title }}</h3>
  <p class="card-description">{{ item.description }}</p>
</template>

<script setup lang="ts">
import type { ISharedBodyCardProps } from '~/components/SharedCard/SharedBodyCard/SharedBodyCard.types';
import { defaultSharedBodyCardProps } from '~/components/SharedCard/SharedBodyCard/SharedBodyCard.data';

withDefaults(defineProps<ISharedBodyCardProps>(), defaultSharedBodyCardProps);
</script>

<style scoped lang="scss" src="./SharedBodyCard.scss"></style>
