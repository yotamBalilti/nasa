import styled from 'styled-components';

export const formContainer = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #666666;
  color: #e6e6e6;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  width: max(50vw, 400px);
  height: max(10vh, 100px);
`;

export const formInputContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.5rem;
  height: 100%;
`;

export const formInput = styled.input`
  border-radius: 0.5rem;
  border: none;
  outline: none;
  background-color: #e6e6e6;
  color: #282c34;
  font-size: 1rem;
  width: 100%;
  height: 40px;
  padding-inline-start: 1rem;
`;

export const dataList = styled.datalist`
  position: absolute;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  padding: 0.5rem;
  background-color: #e6e6e6;
  color: #282c34;
  font-size: 0.6rem;
`;

export const dataListOption = styled.option`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #e6e6e6;
  color: #282c34;
  font-size: 0.6rem;
  cursor: pointer;
`;

export const formButtonsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  gap: 1rem;
  padding: 0.5rem;
`;

export const formPrimaryButton = styled.button`
  height: 40px;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: salmon;
  color: #282c34;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #282c34;
    color: #e6e6e6;
  }
`;

export const formSecondaryButton = styled.button`
  border: none;
  background-color: transparent;
  color: #e6e6e6;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #282c34;
  }
`;
