import styled from 'styled-components';

export const meteorsGridContainer = styled.div`
  width: min(100%, 1200px);
  height: 60vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const meteorsGrid = styled.div`
  width: min(100%, 1200px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
`;

export const meteorsGridTitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
`;

export const meteorsGridErrorSubtitle = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1;
  color: salmon;
`;
