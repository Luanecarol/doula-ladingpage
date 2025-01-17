import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const CountItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin: 0;
    color: #b3665d;
  }

  p {
    margin-top: 0.5rem;
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-family: "Lexend", sans-serif;
    color: #b3665d;
  }
`;

const CountNumber = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        } else {
          setHasAnimated(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <SectionContainer ref={sectionRef}>
      <CountItem>
        <h2>+{hasAnimated ? <CountUp start={0} end={3} duration={8} /> : 0}</h2>
        <p>Certificaçoes</p>
      </CountItem>

      <CountItem>
        <h2>
          + {hasAnimated ? <CountUp start={0} end={5} duration={8} /> : 0}
        </h2>
        <p>Especializações</p>
      </CountItem>

      <CountItem>
        <h2>
          + {hasAnimated ? <CountUp start={0} end={200} duration={5.0} /> : 0}
        </h2>
        <p>Clientes Atendidos</p>
      </CountItem>
    </SectionContainer>
  );
};

export default CountNumber;
