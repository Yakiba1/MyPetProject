<template>
  <div class="layout-default">
    <SharedMenu />
    <div class="layout-default__content">
      <SharedHeader />
      <main>
        <slot />
      </main>
    </div>
  </div>
  <SharedFooter />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss" src="./default.scss"></style>
