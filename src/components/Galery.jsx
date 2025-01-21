import React from "react";
import styled from "styled-components";
import photo1 from "./../../public/photo1.jpg";
import photo2 from "./../../public/photo2.jpg";
import photo3 from "./../../public/photo3.jpg";
import photo4 from "./../../public/photo4.jpg";
import photo5 from "./../../public/photo5.jpg";
import photo6 from "./../../public/photo6.jpg";
import photo7 from "./../../public/photo7.jpg";
import photo8 from "./../../public/photo8.jpg";
import photo10 from "./../../public/photo10.jpg";
import photo11 from "./../../public/photo11.jpg";
import photo12 from "./../../public/photo12.jpg";
import photo13 from "./../../public/photo13.jpg";
import photo14 from "./../../public/photo14.jpg";
import photo15 from "./../../public/photo15.jpg";
import photo16 from "./../../public/photo16.jpg";
import photo17 from "./../../public/photo17.jpg";
import photo18 from "./../../public/photo18.jpg";
import photo19 from "./../../public/photo19.jpg";

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

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease;

  ${PhotoCard}:hover & {
    transform: scale(1.1);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: opacity 0.3s ease;

  ${PhotoCard}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.p`
  font-size: 1.2rem;
  color: white;
  font-family: "Lexend", sans-serif;
  text-align: center;
`;

const Gallery = () => {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
  ];

  return (
    <Section id="client">
      <Title>Confira momentos com minhas clientes</Title>
      <GalleryContainer>
        {photos.map((photo, index) => (
          <PhotoCard key={index}>
            <Photo src={photo} alt={`Cliente ${index + 1}`} />
            <PhotoOverlay>
              <OverlayText> 💝</OverlayText>
            </PhotoOverlay>
          </PhotoCard>
        ))}
      </GalleryContainer>
    </Section>
  );
};

export default Gallery;
