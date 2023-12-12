import { IAppCard } from '~/app/types';

export interface IIntroSlide {
  id: number;
  slides: IAppCard[];
  text: string;
}
