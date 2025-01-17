import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  font-family: "Lexend", sans-serif;
`;

const BrandName = styled.h2`
  font-size: 2rem;
  font-family: "Cedarville Cursive", cursive;
  font-weight: 300;
  color: #b3665d;
  margin: 0;
`;
const BrandSubtitle = styled.h3`
  font-size: 1rem;
  font-family: lexend;
  font-weight: 200;
  color: #b3665d;
  margin: 0;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;

    img {
      width: 32px;
      height: 32px;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }

    &:hover img {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #555;
  margin: 1.5rem 0;
`;

const DeveloperCredit = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <BrandName> Kamila Fortunato</BrandName>
      <BrandSubtitle>
        Doula|Educadora Perinatal|Consultora Em Amamentação|Nutricionista{" "}
      </BrandSubtitle>
      <ContactContainer>
        <a
          href="https://www.instagram.com/doula_kamila"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <img
            src="/instagram.png"
            alt="Instagram"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
        <a href="mailto:doula@example.com" title="Enviar Email">
          <img
            src="/email.png"
            alt="Email"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            style={{ width: "29px", height: "29px" }}
          />
        </a>
      </ContactContainer>
      <Divider />
      <DeveloperCredit>Site desenvolvido por Falcon Tech</DeveloperCredit>
    </FooterContainer>
  );
};

export default Footer;
