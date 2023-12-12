<template>
  <div class="Article">
    <SharedCard
      :item="{ img: { alt: 'природа', src: 'https://w.forfun.com/fetch/a6/a609f352bbc5264204247b1125224c47.jpeg' } }"
    >
      <template #card-header>
        <SharedTagCard :item="{ tag: 'ничего' }" />
      </template>
      <template #body>
        <SharedBodyCard :item="{ date: '123', description: 'asdwqe', title: 'dsfds234324' }" />
      </template>
    </SharedCard>
  </div>
</template>
<script setup lang="ts">
import SharedTagCard from '~/components/SharedCard/SharedTagCard/SharedTagCard.vue';
import SharedBodyCard from '~/components/SharedCard/SharedBodyCard/SharedBodyCard.vue';
import SharedCard from '~/components/SharedCard/SharedCard.vue';
</script>
