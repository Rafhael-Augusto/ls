"use client";

import styled from "styled-components";

export const Content = styled.div`
  margin: 0 auto;
  max-width: 76vw;

  padding: 64px 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Hero = styled.div`
  height: 70vh;
  width: 10vw;

  margin-bottom: 64px;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://lacreisaude.com.br/_next/static/media/greetings-banner-image.3ec83257.png");

  @media (max-width: 1024px) {
    height: 49.5vh;
    width: 100%;
  }
  @media (max-width: 540px) {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 380px) {
    height: 62vh;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const Greetings = styled.h1`
  color: #018762;
  font-size: 3vw;
  max-width: 28vw;

  @media (max-width: 1024px) {
    max-width: 40vw;
    font-size: 4vw;

    margin-top: 3vh;
  }

  @media (max-width: 540px) {
    max-width: 65vw;
    font-size: 8vw;
  }
`;

export const Extra = styled.h2`
  font-size: 2vw;
  width: 33vw;

  margin-top: 16px;

  color: #018762;
  font-weight: lighter;

  @media (max-width: 1024px) {
    max-width: 100vw;
    width: 70%;
    font-size: 3vw;
  }

  @media (max-width: 540px) {
    max-width: 100vw;
    width: 100%;
    font-size: 5vw;

    background-color: #fff;

    border: 1px solid gray;
    border-radius: 8px;

    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    padding: 8px;
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  color: #fff;
  background-color: #018762;

  border: none;
  border-radius: 8px;
  height: 6vh;
  width: 15vw;

  z-index: 2;

  font-size: 1.2vw;
  font-weight: bolder;

  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #017756;
  }

  @media (max-width: 1024px) {
    width: 20vw;
    height: 6vh;

    font-size: 2vw;
  }

  @media (max-width: 540px) {
    width: 100%;
    height: 8vh;
    font-size: 4.5vw;
  }

  @media (min-width: 1024px) {
    width: 24%;
    height: 7vh;
  }

  cursor: pointer;
`;

export const HeroButtons = styled.div`
  display: flex;

  margin-top: 32px;
  width: 100%;

  background-color: transparent;
  gap: 32px;

  @media (max-width: 540px) {
    flex-direction: column;
    background-color: #fff;
    padding: 8px;

    margin-top: 0;
    margin-bottom: 2px;

    border-radius: 8px;
    border: 1px solid gray;

    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
