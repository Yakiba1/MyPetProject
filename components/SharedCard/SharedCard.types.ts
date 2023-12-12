import type { IAppCard, TAppSize } from '~/app/types';

export interface ISharedCardProps {
  item: Pick<IAppCard, 'img'>;
  size?: TAppSize;
}
