import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  filteredMeteorsState,
  nextAvailableResultState,
  yearState,
} from '../../state';
import { MeteorCard } from '../MeteorCard';
import * as Styled from './MeteorsGrid.styles';

export const MeteorsGrid = () => {
  const filteredMeteors = useRecoilValue(filteredMeteorsState);
  const nextYear = useRecoilValue(nextAvailableResultState);
  const setYear = useSetRecoilState(yearState);
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (filteredMeteors?.length === 0) {
      setError(
        'A meteor with the required year and mass was not found, jumping to first-year where there is a mass that fits the criteria'
      );
    } else {
      setError(null);
    }
  }, [filteredMeteors]);

  useEffect(() => {
    if (error) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        nextYear && setYear(nextYear);
      }, 4000);
    }
    return () => {
      setShowError(false);
    };
  }, [error, nextYear, setYear]);

  return (
    <Styled.meteorsGridContainer>
      {showError && (
        <Styled.meteorsGridErrorSubtitle>
          {error}
        </Styled.meteorsGridErrorSubtitle>
      )}
      {!filteredMeteors && <p>No meteors found</p>}
      {!showError && filteredMeteors && (
        <>
          <Styled.meteorsGridTitle>
            {filteredMeteors?.length} meteors found!
          </Styled.meteorsGridTitle>
          <Styled.meteorsGrid>
            {filteredMeteors.map((meteor) => (
              <MeteorCard meteor={meteor} key={meteor.id} />
            ))}
          </Styled.meteorsGrid>
        </>
      )}
    </Styled.meteorsGridContainer>
  );
};
