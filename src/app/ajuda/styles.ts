import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;

  font-family: Arial, Helvetica, sans-serif;
`;

export const ExtraInfo = styled.section`
  width: 80vw;
  margin: 0 auto;

  margin-top: 4%;

  background-color: transparent;

  @media (max-width: 840px) {
    width: 100vw;
  }
`;

export const Home = styled.strong`
  color: gray;
  font-weight: bolder;

  & > span {
    color: #000000;
    font-weight: lighter;

    margin: 0 1vw;
  }

  & > strong {
    color: #018762;
    font-weight: 300px;
  }

  & > h3 {
    display: inline;
    &:hover {
      text-decoration: underline;
    }

    cursor: pointer;
  }
`;

export const FrequentQuestions = styled.div`
  background-color: transparent;
  color: #018762;
  width: 100%;

  margin-top: 4%;

  & > h1 {
    font-size: 6vh;

    @media (max-width: 860px) {
      text-align: center;
      width: 90%;

      font-size: 4vh;
    }
  }

  & > h3 {
    color: gray;
    margin-top: 2vh;

    font-size: 3vh;
    font-weight: lighter;

    @media (max-width: 860px) {
      text-align: center;
    }
  }
`;

export const Extra = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  max-width: 80vw;
  margin: 8vh auto;

  color: #017756;

  font-weight: bolder;
  font-size: 150%;

  @media (max-width: 860px) {
    align-items: center;

    max-width: 100vw;

    & > span {
      font-size: 3vh;
    }
  }
`;

export const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  background-color: #018762;

  text-decoration: none;

  border: none;
  border-radius: 8px;
  height: 6vh;
  width: 18vw;

  font-size: 2.2vh;
  font-weight: bolder;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #017756;
  }

  @media (max-width: 860px) {
    font-size: 2vh;
    width: 40vw;
  }

  &:hover {
    text-decoration: underline;
  }

  cursor: pointer;
`;
