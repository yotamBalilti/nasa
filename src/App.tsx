import { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { GridLayout } from './components/layout/GridLayout';
import { meteorsListState, yearFilteredMeteorsState } from './components/state';

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
    <div className='app'>
      <h1>NASA Meteor Search</h1>
      {!loading && <GridLayout results={filteredMeteors} />}
    </div>
  );
}

export default App;
