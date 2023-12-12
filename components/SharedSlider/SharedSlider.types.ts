import type { IAppCard } from '~/app/types';

export interface ISharedSliderProps {
  slides: IAppCard[];
}

export interface IChangeSliderEmits {
  (event: 'setActiveSlide', idx: number): void;
}

// Информация по кол-во слайдов и активному
export interface IInfoSlides {
  active: number;
  max: number;
}

// Функция, чтобы вернуть слайдер к 1му слайду
export interface ISharedSliderExpose {
  doDefaultIdx: () => void;
}
