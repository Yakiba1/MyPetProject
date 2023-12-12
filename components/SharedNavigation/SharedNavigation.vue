<template>
  <nav>
    <ul class="navigation">
      <li v-for="navItem in navList" :key="navItem.text">
        <nuxt-link class="navigation__item">
          {{ navItem.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { navList } from '~/components/SharedNavigation/SharedNavigation.data';
</script>

<style scoped src="./SharedNavigation.scss" lang="scss"></style>
