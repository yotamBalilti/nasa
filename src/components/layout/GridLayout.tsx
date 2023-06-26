import { Meteor } from '../types';
import { GridItem } from './GridItem';

interface IMeteorsGridProps {
  results: Meteor[];
}

export const GridLayout = ({ results }: IMeteorsGridProps) => {
  return (
    <div className='gridContainer'>
      {results && (
        <>
          <h3>{results?.length} meteors found!</h3>
          <div className='meteorsGrid'>
            {results.map((meteor) => (
              <GridItem meteor={meteor} key={meteor.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
