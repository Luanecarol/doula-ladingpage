import React from "react";
import styled from "styled-components";
import Gif1 from "/public/conssulpais.gif";
import Gif2 from "/public/despedidabarriga.gif";
import Gif3 from "/public/workshopamamentacao.gif";

const Section = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  font-family: "Lexend", sans-serif;
  font-weight: 400;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border: 1px solid #b3665d;
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
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: #b3665d;
  margin-bottom: 15px;
  font-weight: 400;
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

const ServiceCard = ({ gif, alt, title, items }) => (
  <Card>
    <Gif src={gif} alt={alt} />
    <CardTitle>{title}</CardTitle>
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </Card>
);

const ServicesPlus = () => {
  return (
    <Section id="services">
      <Title>Precisa De Serviço Individual?</Title>
      <CardsContainer>
        <ServiceCard
          gif={Gif2}
          alt="Imagem Despedida da Barriga"
          title="Despedida Da Barriga"
          items={[
            "Acompanhamento completo",
            "Suporte emocional contínuo",
            "Técnicas de alívio da dor",
          ]}
        />
        <ServiceCard
          gif={Gif1}
          alt="Imagem Curso para Pais de Primeira Viagem"
          title="Curso para pais de primeira viagem"
          items={[
            "Orientação emocional",
            "Ajuda com exercícios de relaxamento",
            "Preparação para o parto",
          ]}
        />
        <ServiceCard
          gif={Gif3}
          alt="Imagem Consultoria de Amamentação"
          title="Consultoria de Amamentação"
          items={[
            "Ajuda na amamentação",
            "Orientação para recuperação",
            "Conexão com a rede de suporte",
          ]}
        />
      </CardsContainer>
    </Section>
  );
};

export default ServicesPlus;
