import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 18px;
  width: 600px;
  height: 241px;
  border-radius: 8px;
  background: #FFF;
`;

export const ImageContainer = styled.aside`
  margin: 0px 28px;
`;

export const InfoContainer = styled.aside`
  display: flex;
  flex-direction: column;

  span {
    font-size: 24px;
    color: #005EA4;
    font-weight: 500;
    margin-bottom: 8px;
  }

  button {
    height: 50px;
    width: 265px;
    margin: 16px 0 0 auto;
    border-radius: 4px;
    background: #0067F6;
    color: #F1F1F1;
    border: 0;
  }
`;