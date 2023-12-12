<template>
  <div class="intro">
    <div class="intro__inner">
      <div class="intro__content">
        <div class="intro__slider">
          <SharedSlider ref="slider" :slides="activeSlides" />
        </div>
        <div class="intro__menu">
          <ul class="intro__list">
            <li
              v-for="item in items"
              :key="item.text"
              :class="['intro__item', item.id === activeItemId && 'active']"
              @click="setActiveSlides(item)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAppCard } from '~/app/types';
import type { IIntroSlide } from '~/paritals/IntroPartials/introPartials.types';

const slider = ref();

const slides: IAppCard[] = [
  {
    date: '19.11.2023',
    description: 'Трам пам пам',
    img: {
      alt: 'тест фотка 1',
      src: 'cart/baikal-1.jpg',
    },
    tag: 'Новость дня 1',
    title: 'Временные заголовок',
  },
  {
    date: '19.11.2023',
    description: 'Трам пам пам',
    img: {
      alt: 'тест фотка 1',
      src: 'cart/baikal-1.jpg',
    },
    tag: 'Новость дня 2',
    title: 'Временные заголовок 2',
  },
];
const items: IIntroSlide[] = [
  {
    id: 1,
    slides,
    text: 'Активность',
  },
  {
    id: 2,
    slides: [
      {
        date: '19.11.2023',
        description: 'Трasdsadadам пам пам',
        img: {
          alt: 'тест фотка 1',
          src: 'cart/baikal-1.jpg',
        },
        tag: 'Новость asdsaadadadad',
        title: 'Временные заголовок 2',
      },
    ],
    text: 'Топ мест',
  },
  {
    id: 3,
    slides,
    text: 'Путеводитель по городам',
  },
  {
    id: 4,
    slides,
    text: 'Отдых и развлечения в России',
  },
  {
    id: 5,
    slides,
    text: 'Выставки в России',
  },
];

const DEFAULT_ITEM = items[0];

const activeSlides = ref<IAppCard[]>(DEFAULT_ITEM.slides);
const activeItemId = ref<number>(DEFAULT_ITEM.id);

const setActiveSlides = (item: IIntroSlide) => {
  activeItemId.value = item.id;
  activeSlides.value = item.slides;

  slider.value.doDefaultIdx();
};
</script>

<style scoped lang="scss" src="./IntroPartials.scss"></style>
