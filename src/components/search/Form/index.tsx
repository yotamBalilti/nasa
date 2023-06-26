import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { massState, yearsDataListState, yearState } from '../../state';
import * as Styled from './Form.styles';

export const Form = () => {
  const setYear = useSetRecoilState(yearState);
  const setMass = useSetRecoilState(massState);
  const [tempYear, setTempYear] = useState('');
  const [tempMass, setTempMass] = useState(1);
  const yearsDataList = useRecoilValue(yearsDataListState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setYear(tempYear);
    setMass(tempMass);
  };

  const handleReset = () => {
    setTempMass(1);
    setTempYear('');
    setYear('');
    setMass(1);
  };

  return (
    <Styled.formContainer onSubmit={handleSubmit} className='searchForm'>
      <Styled.formInputContainer>
        <label htmlFor='yearListedMeteors'>Search for meteors landed in:</label>
        <Styled.formInput
          list='meteorsDataList'
          id='yearListedMeteors'
          type='number'
          name='year-choice'
          onChange={(e) => setTempYear(e.target.value)}
          maxLength={4}
          value={tempYear}
          autoComplete='off'
          required
        />
        <Styled.dataList id='meteorsDataList'>
          {[...yearsDataList].sort()?.map((year, index) => (
            <Styled.dataListOption value={year} key={index} />
          ))}
        </Styled.dataList>
      </Styled.formInputContainer>
      <Styled.formInputContainer>
        <label htmlFor='mass'>And greater then: (in grams)</label>
        <Styled.formInput
          type='number'
          id='mass'
          value={tempMass}
          onChange={(e) => setTempMass(Number(e.target.value))}
        />
      </Styled.formInputContainer>
      <Styled.formButtonsContainer>
        <Styled.formPrimaryButton type='submit'>
          Search
        </Styled.formPrimaryButton>
        <Styled.formSecondaryButton onClick={handleReset}>
          Reset
        </Styled.formSecondaryButton>
      </Styled.formButtonsContainer>
    </Styled.formContainer>
  );
};
