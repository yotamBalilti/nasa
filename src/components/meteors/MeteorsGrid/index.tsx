import { Meteor } from '../../types';
import { MeteorCard } from '../MeteorCard';

interface IMeteorsGridProps {
  results: Meteor[];
  error?: string;
}

export const MeteorsGrid = ({ results, error }: IMeteorsGridProps) => {
  return (
    <div className='gridContainer'>
      {error && <p className='error'>{error}</p>}
      {!results && <p>No meteors found</p>}
      {results && (
        <>
          <h3>{results?.length} meteors found!</h3>
          <div className='meteorsGrid'>
            {results.map((meteor) => (
              <MeteorCard meteor={meteor} key={meteor.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
