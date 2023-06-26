import styled from 'styled-components';

export const appContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #222;
  min-height: 100vh;
  gap: 2rem;
  color: #e6e6e6;
  text-align: center;
`;

export const appTitle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  line-height: 1;
`;

export const appSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
`;

export const appErrorSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1;
  color: salmon;
`;
