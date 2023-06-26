import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { MeteorsGrid } from './components/meteors/MeteorsGrid';
import {
  filteredMeteorsState,
  meteorsListState,
  nextAvailableResultState,
  yearState,
} from './components/state';
import * as Styled from './App.styles';
import { Form } from './components/search/Form';

function App() {
  const setMeteors = useSetRecoilState(meteorsListState);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        'https://data.nasa.gov/resource/y77d-th95.json'
      );
      const data = await response.json();
      setMeteors(data);
      setLoading(false);
    };
    fetchData();
  }, [setMeteors]);

  return (
    <Styled.appContainer>
      <Styled.appTitle>NASA Meteor Search</Styled.appTitle>
      <Form />
      {showError && <Styled.appErrorSubtitle>{error}</Styled.appErrorSubtitle>}
      {!filteredMeteors && !showError && (
        <Styled.appErrorSubtitle>No meteors found</Styled.appErrorSubtitle>
      )}
      {!showError && !loading && (
        <Styled.appSubtitle>
          {filteredMeteors?.length} meteors found!
        </Styled.appSubtitle>
      )}
      {!loading && <MeteorsGrid meteors={filteredMeteors} />}
    </Styled.appContainer>
  );
}

export default App;
