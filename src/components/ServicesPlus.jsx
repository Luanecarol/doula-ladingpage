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
            "Escalda pés com ervas aromáticas com óleos essenciais, flores e sais para ajudar no tratamento de retenção de líquidos melhorando o desconforto nos pés",
            "Massagens com óleos essências promovendo o relaxamento e melhorando a questão da ansiedade que sabemos que é muito comum na reta final da gestação",
            "Homenagens através de vídeos e cartas escritas por seus amigos e familiares",
            "Lembretes com frases motivacionais",
            "Arte Gestacional",
          ]}
        />
        <ServiceCard
          gif={Gif1}
          alt="Imagem Curso para Pais de Primeira Viagem"
          title="Curso para pais de primeira viagem"
          items={[
            "Encontros online aonde abordaremos:",
            "Cultura do parto no Brasil e Fases do trabalho de parto, Cuidados com o recém nascido",
            "Confecção do plano de parto",
            "Exterogestação",
            "Rede de apoio evidenciando a importância da interação do acompanhante",
            "Workshop sobre Amamentação onde falaremos sobre o manejo e intercorrências e esclarecemos todas as suas dúvidas e as do seu acompanhante.",
          ]}
        />
        <ServiceCard
          gif={Gif3}
          alt="Imagem Consultoria de Amamentação"
          title="Consultoria de Amamentação"
          items={[
            "Assistência as principais queixas da mãe",
            "Orientação para recuperação",
            "Orientações práticas sobre pega correta",
            "posições para amamentar e cuidados com as mamas.",
          ]}
        />
      </CardsContainer>
    </Section>
  );
};

export default ServicesPlus;
