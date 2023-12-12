export interface ISharedSliderNavigationEmits {
  (event: 'next'): void;

  (event: 'prev'): void;
}

export interface ISharedSliderNavigationProps {
  isDisabledNext: boolean;
  isDisabledPrev: boolean;
}
