"use client";
import styled from "styled-components";
import Image from "next/image";

interface prop {
  gap?: number;
  width?: number;
}

export const Content = styled.div`
  margin: 0 auto;
  max-width: 90vw;
`;

export const Header = styled.header`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-around;

  gap: 30%;

  background-color: #fff;
  height: 12vh;

  @media (max-width: 540px) {
    gap: 0;
    height: 8vh;
  }
`;

export const ButtonList = styled.div<prop>`
  position: relative;

  display: flex;
  align-items: center;

  justify-content: space-between;
  gap: ${(props) => props.gap}px;

  @media (max-width: 540px) {
    gap: 0;
  }
`;

export const PrimaryButton = styled.button<prop>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;

  color: #fff;
  background-color: #018762;

  border: none;
  border-radius: 8px;
  height: 6vh;
  width: ${(prop) => prop.width}vw;

  z-index: 2;

  font-size: 18px;
  font-weight: bolder;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #017756;
  }

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 18vw;
    height: 5vh;
  }

  @media (max-width: 540px) {
    background-image: url("/icons/person.svg");
    background-repeat: no-repeat;
    background-position: center;

    color: transparent;
    gap: 0;
    width: 12vw;
    height: 5vh;

    & > * {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    height: 7vh;
  }
`;

export const MobileHelpButton = styled.div`
  & > * {
    display: none;
  }
  @media (max-width: 540px) {
    background-color: transparent;
    margin-right: 2vw;
    & > * {
      display: block;
      background-color: transparent;
    }
  }
`;

export const SecondaryButton = styled.button<prop>`
  color: #017756;
  background-color: transparent;

  border: none;
  border-radius: 8px;
  height: 6vh;
  width: ${(prop) => prop.width}vw;

  z-index: 2;

  font-size: 18px;
  font-weight: bolder;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #e6f3ef;
  }

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 14vw;
    height: 5vh;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const Logo = styled(Image)`
  background-color: transparent;

  height: 30%;
  width: 18%;

  z-index: 2;

  cursor: pointer;

  @media (max-width: 540px) {
    width: 52vw;
    height: 5vh;
  }
`;

export const LoginDropDown = styled.div`
  position: absolute;
  color: #000000;

  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: #fff;
  padding: 8px;

  border-radius: 8px;
  border: 1px solid gray;

  height: 18vh;
  width: 14vw;

  top: 8vh;
  right: 0;

  @media (max-width: 1024px) {
    width: 20vw;
    height: 12vh;

    font-size: 1.8vw;
  }

  @media (max-width: 540px) {
    height: 18vh;
    width: 50vw;
  }
`;

export const CloseDropDown = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100vh;
  width: 98.9vw;

  z-index: 1;
  background-color: transparent;
`;

export const WhoWillLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  background-color: transparent;
  height: 6vh;
  width: 12.5vw;

  gap: 16px;
  padding-left: 8%;
  border-left: 4px solid transparent;

  & > * {
    color: #000000;
    font-size: 16px;
    font-weight: lighter;
  }

  &:hover {
    background-color: #dff2ed;
    border-left: 4px solid #017756;

    & > * {
      color: #017756;
    }
  }

  @media (max-width: 540px) {
    width: 100%;
  }

  cursor: pointer;
`;

export const Hero = styled.section`
  width: 100vw;
  height: 60vh;
`;
