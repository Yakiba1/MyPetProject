import type { IAppCard } from '~/app/types';

export interface ISharedBodyCardProps {
  item: Pick<IAppCard, 'title' | 'description' | 'date'>;
  showDate?: boolean;
}
