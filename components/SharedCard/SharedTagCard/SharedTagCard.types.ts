import { IAppCard } from '~/app/types';

export interface ISharedTagCardProps {
  item: Pick<IAppCard, 'tag'>;
}
