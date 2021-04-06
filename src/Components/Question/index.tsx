import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, InputContainer } from './styles';

interface QuestionProps {
  questionTitle: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Question: React.FC<QuestionProps> = ({ questionTitle, placeholder, icon: Icon }) => {
  return (
    <Container>
      <span>{questionTitle}</span>
      
      <InputContainer>
        <input placeholder={placeholder}/>
        {Icon && <Icon size={15}/>}
      </InputContainer>
    </Container>
  );
}

export default Question;