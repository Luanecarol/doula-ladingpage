import React from "react";
import styled from "styled-components";
import backgroundImage from "./../../public/fundo1.png";

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #b3665d;
    font-family: "Lexend", sans-serif;
    font-weight: 400;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      gap: 0.5rem;
      align-items: flex-start;
      margin-bottom: 10px;

      &::before {
        content: "➤";
        color: #b3665d;
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h2 {
      font-size: 1.8rem;
    }

    ul {
      li {
        gap: 0.3rem;
      }
    }
  }
`;

const Curiosities = () => {
  return (
    <SectionContainer>
      <TextContainer aria-labelledby="curiosities-title">
        <h2 id="curiosities-title">Você Sabia?</h2>
        <ul>
          <li>
            Mulheres que contam com o apoio de uma doula têm 50% menos chances
            de precisar de uma cesariana.
          </li>
          <li>
            Há também uma redução de 25% no tempo de trabalho de parto e 40%
            menos necessidade de anestesia epidural.
          </li>
          <li>
            O apoio emocional e físico da doula está associado a uma maior
            satisfação com a experiência de parto e um aumento na taxa de
            sucesso da amamentação.
          </li>
        </ul>
      </TextContainer>
    </SectionContainer>
  );
};

export default Curiosities;
