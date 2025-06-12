import styled from "styled-components";
import Image from "next/image";

interface prop {
  gap?: number;
  width?: number;
}

export const Content = styled.div`
  margin: 2vh auto;
  max-width: 82%;
`;

export const Footer = styled.footer`
  background-color: #fff;
`;

export const Logo = styled(Image)`
  background-color: transparent;

  cursor: pointer;

  @media (max-width: 540px) {
    display: none;
  }
`;

export const ColumnsList = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;

  background-color: #fff;
  padding: 32px 0;
  gap: 5vw;

  border: 1px solid gray;
  border-left: none;
  border-right: none;

  @media (max-width: 540px) {
    align-items: center;
    text-align: center;
  }
`;

export const Column = styled.div<prop>`
  display: flex;
  flex-direction: column;
  justify-content: top;

  gap: ${(prop) => prop.gap}px;

  background-color: transparent;
  width: 16vw;

  @media (max-width: 540px) {
    flex: 0 0 40vw;
    text-align: left;

    border-radius: 8px;
    border: 1px solid gray;

    padding: 8px;
  }
`;

export const OtherLinksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
`;

export const OtherLink = styled.h4<prop>`
  text-align: left;
  font-weight: lighter;

  width: ${(prop) => prop.width}rem;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 540px) {
    font-size: 3.9vw;
  }

  cursor: pointer;
`;

export const SocialMediaList = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  gap: 22px;

  & > * {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const ExtraInfo = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 32px 0;

  & > * {
    font-weight: lighter;
    font-size: 14px;

    background-color: transparent;
    color: gray;
  }
`;

export const GoUpButton = styled.button`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 0;
  right: 0;

  height: 48px;
  width: 48px;

  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #018762;

  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);

  cursor: pointer;
`;

export const CvvWebsite = styled.a`
  text-decoration: none;
  color: gray;

  &:hover {
    text-decoration: underline;
  }

  cursor: pointer;
`;
