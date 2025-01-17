import React from "react";
import Lottie from "lottie-react";
import babyAnimation from "../../public/baby.json";
import styled from "styled-components";
import backgroundImage from "./../../public/fundo1.png";

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-image: url(${backgroundImage});
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  text-align: justify;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #b3665d;
    font-family: "Lexend", sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    margin: 0;
    color: #444;
    font-family: "Lexend", sans-serif;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 80px;
`;

const Photo = styled.img`
  border-radius: 4%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Photo1 = styled(Photo)`
  left: 100px;
  position: relative;
  z-index: 2;
`;

const Photo2 = styled(Photo)`
  position: relative;
  margin-top: -10px;
  left: -20px;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fde4e8;
  padding: 2rem;

  p {
    font-family: "Cedarville Cursive", cursive;
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;
    color: #b3665d;
  }
`;

const Apresentation = () => {
  return (
    <>
      <HeaderContainer>
        <Lottie
          animationData={babyAnimation}
          style={{ width: 120, height: 120 }}
        />
        <p>
          "Para mudar o mundo precisamos mudar a forma de nascer"
          <br />- Dr. Michel Odent
        </p>
      </HeaderContainer>

      <SectionContainer id="quemsou">
        <TextContainer>
          <h2>Olá mamãe!</h2>
          <p>
            É um prazer te conhecer, e desde já parabéns pela gestação! Antes
            vou me apresentar brevemente... Sou doula, educadora perinatal,
            consultora em amamentação e orientadora em cuidados com
            recém-nascido. Minha assistência consiste em preparar você para o
            momento mais especial de sua vida, proporcionando uma gestação e um
            parto humanizado que você e toda a sua família levarão para a vida
            com muito amor e carinho, construindo histórias que deixarão
            saudades!
          </p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  style={{ width: "42px", height: "42px" }}
                />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  style={{ width: "32px", height: "32px" }}
                />
              </a>
            </div>
          </div>
        </TextContainer>

        <PhotoContainer>
          <Photo1 src="/perfil.png" alt="Foto 1" />
          <Photo2 src="/perfil.png" alt="Foto 2" />
        </PhotoContainer>
      </SectionContainer>
    </>
  );
};

export default Apresentation;
