import React from "react";
import styled from "styled-components";
import photo1 from "./../../public/photo1.jpg";
import photo2 from "./../../public/photo2.jpg";
import photo3 from "./../../public/photo3.jpg";
import photo4 from "./../../public/photo4.jpg";
import photo5 from "./../../public/photo5.jpg";

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
  return (
    <Section id="client">
      <Title>Confira momentos com minhas clientes</Title>
      <GalleryContainer>
        <PhotoCard>
          <Photo src={photo1} alt="Cliente 1" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 1</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo2} alt="Cliente 2" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 2</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo3} alt="Cliente 3" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 3</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo4} alt="Cliente 4" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 4</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo5} alt="Cliente 5" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 5</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo5} alt="Cliente 6" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 6</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo4} alt="Cliente 6" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 6</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo1} alt="Cliente 6" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 6</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
        <PhotoCard>
          <Photo src={photo2} alt="Cliente 6" />
          <PhotoOverlay>
            <OverlayText>Momento Especial 6</OverlayText>
          </PhotoOverlay>
        </PhotoCard>
      </GalleryContainer>
    </Section>
  );
};

export default Gallery;
