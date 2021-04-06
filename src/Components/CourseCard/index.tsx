import React from 'react';

import { Container } from './styles';

interface CourseCardProps {
  courseImg: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ courseImg }) => {
  return (
    <Container>
      <img src={courseImg} alt="course"/>
      <div>
        <span>Texto .........</span>
        <h3>Titulo.......</h3>
        <button>Acessar</button>
      </div>
    </Container>
  )
}

export default CourseCard;