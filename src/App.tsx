import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { MeteorsGrid } from './components/meteors/MeteorsGrid';
import { meteorsListState, yearFilteredMeteorsState } from './components/state';
import * as Styled from './App.styles';

function App() {
  const setMeteors = useSetRecoilState(meteorsListState);
  const filteredMeteors = useRecoilValue(yearFilteredMeteorsState);
  const [loading, setLoading] = useState(false);

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
      {!loading && <MeteorsGrid results={filteredMeteors} />}
    </Styled.appContainer>
  );
}

export default App;
