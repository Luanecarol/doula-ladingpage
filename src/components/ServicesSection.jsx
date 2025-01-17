import React from "react";
import styled from "styled-components";
import Gif1 from "/public/gifdurante.gif";
import Gif2 from "/public/gifdia.gif";
import Gif3 from "/public/gifpos.gif";

const Section = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #b3665d;
  margin-bottom: 30px;
  font-family: "Lexend", sans-serif;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Gif = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #00796b;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const ServicesSection = () => {
  return (
    <Section id="about">
      <Title>Como a Doula vai te ajudar?</Title>
      <CardsContainer>
        <Card>
          <Gif src={Gif1} alt="Pré Parto" />
          <CardTitle>Pré Parto</CardTitle>
          <List>
            <ListItem>Orientação emocional</ListItem>
            <ListItem>Ajuda com exercícios de relaxamento</ListItem>
            <ListItem>Preparação para o parto</ListItem>
          </List>
        </Card>

        <Card>
          <Gif src={Gif2} alt="No Dia do Parto" />
          <CardTitle>No Dia do Parto</CardTitle>
          <List>
            <ListItem>Acompanhamento completo</ListItem>
            <ListItem>Suporte emocional contínuo</ListItem>
            <ListItem>Técnicas de alívio da dor</ListItem>
          </List>
        </Card>

        <Card>
          <Gif src={Gif3} alt="Pós Parto" />
          <CardTitle>Pós Parto</CardTitle>
          <List>
            <ListItem>Ajuda na amamentação</ListItem>
            <ListItem>Orientação para recuperação</ListItem>
            <ListItem>Conexão com a rede de suporte</ListItem>
          </List>
        </Card>
      </CardsContainer>
    </Section>
  );
};

export default ServicesSection;
