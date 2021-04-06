import React from 'react';

import { Container, ImageContainer, InfoContainer } from './styles';

interface InformationCardProps {
  pathImg: string;
}

const InformationCard: React.FC<InformationCardProps> = ({ pathImg }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={pathImg} alt="card-container"/>
      </ImageContainer>
      <InfoContainer>
        <span>Título 1</span>
        <p>
          Content..  ... content. ... content.. .. content.. .. content .. 
          content....content....content....content....content....
          content....content....
        </p>

        <button>Botão para detalhes....</button>
      </InfoContainer>
    </Container>
  );
}

export default InformationCard;