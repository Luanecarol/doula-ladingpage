import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const CarouselContainer = styled.section`
  .swiper {
    width: 100%;
    height: 100vh;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: cover;
    color: #fff;
    position: relative;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 70vh;
    }
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 30px;
    margin-bottom: 4px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin: 0 10px;
  background: #d6837f;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #b3665d;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
    margin: 0 5px;
  }
`;

const HeroSection = () => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="swiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: `url('nasc.jpg')`,
          }}
        >
          <OverlayContent>
            <Title>Bem-vinda ao Mundo da Maternidade</Title>
            <SubTitle>Descubra apoio e cuidado Com</SubTitle>
            <SubTitle
              style={{
                fontFamily: "'Cedarville Cursive', cursive",
                fontSize: "34px",
              }}
            >
              Kamila Fortunato
            </SubTitle>
            <Button
              href="https://www.instagram.com/o_cantinhodadoula/"
              aria-label="Acesse nosso Instagram"
            >
              Veja Mais
            </Button>
            <Button
              href="https://wa.me/5511954402939"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entre em contato via WhatsApp"
            >
              Entre em Contato
            </Button>
          </OverlayContent>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: `url('/doula.jpg')` }}>
          <OverlayContent>
            <Title>Apoio Personalizado</Title>
            <SubTitle>Caminhe conosco nessa jornada</SubTitle>
            <Button
              href="https://www.instagram.com/o_cantinhodadoula/"
              aria-label="Acesse nosso Instagram"
            >
              Veja Mais
            </Button>
            <Button
              href="https://wa.me/5511954402939"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entre em contato via WhatsApp"
            >
              Converse Conosco
            </Button>
          </OverlayContent>
        </SwiperSlide>
      </Swiper>
    </CarouselContainer>
  );
};

export default HeroSection;
