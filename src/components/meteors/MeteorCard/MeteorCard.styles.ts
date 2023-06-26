import styled from 'styled-components';

export const meteorCard = styled.div`
  background: #555;
  border-radius: 10px;
  padding: 10px;
  height: max(auto, 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;

  &:hover {
    background: #e6e6e6;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const meteorCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: salmon;
`;

export const meteorCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;
