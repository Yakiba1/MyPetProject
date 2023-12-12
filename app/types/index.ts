export type TAppSize = 's' | 'm' | 'l';

export interface IAppImage {
  alt: string;
  src: string;
}

export interface IAppCard {
  date?: string;
  description?: string;
  img: IAppImage;
  tag: string;
  title: string;
}
