import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { MeteorsGrid } from './components/meteors/MeteorsGrid';
import { meteorsListState } from './components/state';
import * as Styled from './App.styles';
import { Form } from './components/search/Form';

function App() {
  const setMeteors = useSetRecoilState(meteorsListState);
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
      <Form />
      {!loading && <MeteorsGrid />}
    </Styled.appContainer>
  );
}

export default App;
