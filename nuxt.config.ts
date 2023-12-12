// Пути должны оставаться отностиельными, т.к корневой файл
import modules from './app/config/modules';
import linters from './app/config/linters';
import image from './app/config/modules/image';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules,
  ...linters,
  css: ['~/assets/styles/main.scss'],
  ...image,
});
