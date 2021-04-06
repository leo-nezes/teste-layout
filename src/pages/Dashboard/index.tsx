import React from 'react';

import { FiChevronDown,FiSearch } from 'react-icons/fi';

import { Container, Header, Content, CardsContainer, SearchContainer, SearchTitle, QuestionsContainer, CoursesContainer, CoursesTitle, CardsCourses, LoadCoursesButton } from './styles';

import InformationCard from '../../Components/InformationCard';
import Question from '../../Components/Question';
import CourseCard from '../../Components/CourseCard';

import search from '../../assets/search.svg';
import brainstorm from '../../assets/brainstorm.svg';
import whatsapp from '../../assets/whatsapp.svg';
import classImg from '../../assets/class.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <img src={whatsapp} alt="whatsapp"/>
          <span>Fale conosco</span>
        </div>
      </Header>

      <Content>
        <CardsContainer>
          <InformationCard pathImg={search}/>
          <InformationCard pathImg={brainstorm}/>
        </CardsContainer>

        <SearchContainer>
          <SearchTitle>Título 3</SearchTitle>

          <QuestionsContainer>
            <Question questionTitle="Pergunta 1?" placeholder="Digite a resposta"/>
            <Question questionTitle="Pergunta 2?" placeholder="Digite a resposta"/>
            <Question questionTitle="Pergunta 3?" placeholder="Selecione" icon={FiChevronDown}/>
            <button>{<FiSearch />}</button>
          </QuestionsContainer>
        </SearchContainer>

        <CoursesContainer>
          <CoursesTitle>Título 4</CoursesTitle>

          <CardsCourses>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
            <CourseCard courseImg={classImg}/>
          </CardsCourses>
        </CoursesContainer>

        <LoadCoursesButton>
          <button>
          + Carregar mais cursos
          </button>
        </LoadCoursesButton>

      </Content>
    </Container>
  );
}

export default Dashboard;