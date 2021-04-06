import styled from 'styled-components';

export const Container = styled.div`
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4F4F4F;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 371px;
  height: 51px;
  padding: 17px 13px;
  margin-top: 8px;
  border: 1px solid #8D97A0;
  box-sizing: border-box;
  border-radius: 4px;

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  svg {
      margin-right: auto;
    }
`;