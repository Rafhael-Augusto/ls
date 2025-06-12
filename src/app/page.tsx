"use client";

import { GlobalStyle } from "@/globalStyles/GlobalStyle";
import * as S from "./styles";

import { Footer } from "@/components/Footer/footer";
import Header from "@/components/Header/header";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.Hero>
        <S.Content>
          <S.Greetings>Olá, você está na Lacrei Saúde!</S.Greetings>
          <S.Extra>
            Conectamos pessoas{" "}
            <strong style={{ color: "#515151" }}>LGBTQIAPN+</strong> com
            profissionais de saúde qualificados, proporcionando experiências de
            cuidado seguras e inclusivas.
          </S.Extra>

          <S.HeroButtons>
            <S.PrimaryButton>Para pacientes</S.PrimaryButton>
            <S.PrimaryButton>Para profissionais</S.PrimaryButton>
          </S.HeroButtons>
        </S.Content>
      </S.Hero>
      <Footer />
    </>
  );
}
