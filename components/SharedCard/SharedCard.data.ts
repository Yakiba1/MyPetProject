import type { TAppSize } from '~/app/types';
import type { ISharedCardProps } from '~/components/SharedCard/SharedCard.types';

export const listClassesSize: Record<TAppSize, string> = {
  l: 'large',
  m: 'medium',
  s: 'small',
};

export const defaultISharedCardProps: Pick<ISharedCardProps, 'size'> = {
  size: 'l',
};
