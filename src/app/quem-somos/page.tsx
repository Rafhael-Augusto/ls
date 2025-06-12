"use client";

import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

import { GlobalStyle } from "@/globalStyles/GlobalStyle";
import * as S from "./styles";

export default function WhoWeAre() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.Container>
        <S.Title>Atendimento qualificado, seguro e inclusivo</S.Title>
        <div
          style={{
            border: "1px solid #018762",
            width: "10vw",
            margin: "1vh 0",
          }}
        ></div>

        <S.Extras>
          <S.ExtraText>
            <span>
              Acreditamos que, ao possibilitar a inclusão clínica da nossa
              comunidade, transformamos o mundo.
            </span>
            <span>
              Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o
              propósito de oferecer a melhor experiência no acesso à
              profissionais da saúde para as pessoas LGBTQIAPN+.
            </span>
            <span>
              Atuamos de forma ética e embasada nas regras e diretrizes
              estabelecidas pelos órgãos de classe e regulamentadores.
            </span>
          </S.ExtraText>

          <S.LgbtPersonImage />
        </S.Extras>
      </S.Container>
      <Footer />
    </>
  );
}
