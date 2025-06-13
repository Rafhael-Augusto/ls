import styled from "styled-components";

export const Container = styled.section`
  background-color: transparent;
  max-width: 76vw;

  margin: 8vh auto;

  font-family: Arial, Helvetica, sans-serif;

  @media (max-width: 540px) {
    max-width: 92vw;
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 4.5vh;

  width: 30vw;

  @media (max-width: 912px) {
    width: 80vw;

    font-size: 4vh;
  }

  @media (max-width: 540px) {
    width: 95vw;

    font-size: 3vh;
  }

  @media (min-width: 1024px) {
    font-size: 5vh;
    width: 50%;
  }
`;

export const ExtraText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4vh;

  width: 36vw;
  font-size: 3vh;

  margin-top: 4vh;

  & > * {
    font-weight: lighter;
    color: #3b2d2d;
  }

  @media (max-width: 912px) {
    display: flex;
    flex-direction: column;

    width: 100vw;
  }
`;

export const Extras = styled.div`
  position: relative;

  display: flex;
  gap: 12vh;

  margin-bottom: 30vh;

  @media (max-width: 912px) {
    margin-bottom: 1vh;
  }
`;

export const LgbtPersonImage = styled.div`
  position: absolute;

  height: 65vh;
  width: 44vw;

  top: 4.5vh;
  right: -18vh;

  background-image: url("https://lacreisaude.com.br/_next/static/media/about-us-image.0c5e5cc6.png");
  background-repeat: no-repeat;
  background-size: 70vh;

  @media (max-width: 912px) {
    display: none;
  }
`;
