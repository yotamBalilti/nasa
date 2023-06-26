import { Meteor } from '../types';

interface IGridItemProps {
  meteor: Meteor;
}

export const GridItem = ({ meteor }: IGridItemProps) => {
  return (
    <div className='meteorCard'>
      <h2>{meteor.name}</h2>
    </div>
  );
};
