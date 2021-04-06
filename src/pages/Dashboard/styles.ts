import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 87px;
  padding: 32px;
  margin-bottom: 24px;
  background: #FFFFFF;
  
  div {
    display: flex;
    align-items: center;
    margin-left: auto;

    img {
      margin-right: 8px;
    }

    span {
      color: #219653;
    }

  }
`;

export const Content = styled.main`
  padding: 24px 32px;
`;

export const CardsContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  justify-content: space-between;
`;


export const SearchContainer = styled.div`
  height: 166px;
  padding: 16px 24px 24px 32px;
  margin-bottom: 24px;
  border-radius: 8px;
  background: #FFF;
`;

export const SearchTitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #005EA4;
`;

export const QuestionsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;

  button {
    width: 51px;
    height: 51px;
    margin-top: auto;
    background: #0030FF;
    border: 0;
    border-radius: 4px;
    color: #FFF;
  }
`;

export const CoursesContainer = styled.div``;


export const CoursesTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #333;
`;

export const CoursesCardContainer = styled.section`
  margin-top: 19px;
`;

export const CardsCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin-top: 19px;
`;

export const LoadCoursesButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: 0;
    background: transparent;
    color: #FFAD01;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }
`;