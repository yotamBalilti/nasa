import { Meteor } from '../../types';
import * as Styled from './MeteorCard.styles';

interface IMeteorCardProps {
  meteor: Meteor;
}

export const MeteorCard = ({ meteor }: IMeteorCardProps) => {
  return (
    <Styled.meteorCard>
      <Styled.meteorCardTitle>{meteor.name}</Styled.meteorCardTitle>
      <Styled.meteorCardDetails>
        <span>Year: {meteor.year.slice(0, 4)}</span>
        <span>Mass: {meteor.mass}g</span>
        <span>
          {meteor?.geolocation?.coordinates[0]} /{' '}
          {meteor?.geolocation?.coordinates[1]}
        </span>
      </Styled.meteorCardDetails>
    </Styled.meteorCard>
  );
};
