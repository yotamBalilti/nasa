import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  filteredMeteorsState,
  nextAvailableResultState,
  yearState,
} from '../../state';
import { Meteor } from '../../types';
import { MeteorCard } from '../MeteorCard';
import * as Styled from './MeteorsGrid.styles';

interface IMeteorsGridProps {
  meteors: Meteor[];
}

export const MeteorsGrid = ({ meteors }: IMeteorsGridProps) => {
  return (
    <Styled.meteorsGridContainer>
      {meteors && (
        <>
          <Styled.meteorsGrid>
            {meteors.map((meteor) => (
              <MeteorCard meteor={meteor} key={meteor.id} />
            ))}
          </Styled.meteorsGrid>
        </>
      )}
    </Styled.meteorsGridContainer>
  );
};
