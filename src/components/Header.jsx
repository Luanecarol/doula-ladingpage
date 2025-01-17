import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "./../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const ContainerHeader = styled.header`
  background: ${(props) =>
    props.isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.1)"};
  box-shadow: ${(props) =>
    props.isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ListItem = styled.li`
  font-size: 18px;
  transition: color 0.3s ease;

  a {
    text-decoration: none;
    color: #b3665d;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    font-weight: 300;
    cursor: pointer;
  }

  a:hover {
    color: #db919d;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const WhatsappButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${pulse} 1.5s infinite;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    background-color: #20b855;
  }

  @media (max-width: 768px) {
    mergin-left: 15px;
    width: 15px;
    height: 15px;
    font-size: 25px;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ContainerHeader isScrolled={isScrolled}>
      <ContainerLogo>
        <Logo src={logo} alt="Logo do site" />
      </ContainerLogo>

      <Nav>
        <List>
          <ListItem>
            <a onClick={() => scrollToSection("quemsou")} href="#quemsou">
              Quem Sou Eu
            </a>
          </ListItem>
          <ListItem>
            <a onClick={() => scrollToSection("about")} href="#about">
              Serviços
            </a>
          </ListItem>
          <ListItem>
            <a onClick={() => scrollToSection("services")} href="#services">
              Planos
            </a>
          </ListItem>
          <ListItem>
            <a onClick={() => scrollToSection("client")} href="#client">
              Clientes
            </a>
          </ListItem>
          <ListItem>
            <a onClick={() => scrollToSection("contact")} href="#contact">
              Contato
            </a>
          </ListItem>
        </List>
      </Nav>

      <WhatsappButton
        href="https://wa.me/5551999999999"
        target="_blank"
        aria-label="Entre em contato pelo WhatsApp"
      >
        <FaWhatsapp />
      </WhatsappButton>
    </ContainerHeader>
  );
};

export default Header;
