import { Meteor } from '../../types';

interface IMeteorCardProps {
  meteor: Meteor;
}

export const MeteorCard = ({ meteor }: IMeteorCardProps) => {
  return (
    <div className='meteorCard'>
      <h2>{meteor.name}</h2>
      <span>Mass: {meteor.mass}g</span>
      <span>Year: {meteor.year.slice(0, 4)}</span>
      <span>
        {meteor?.geolocation?.coordinates[0]} /{' '}
        {meteor?.geolocation?.coordinates[1]}
      </span>
    </div>
  );
};
