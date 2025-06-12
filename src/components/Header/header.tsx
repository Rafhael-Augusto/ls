"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import { GlobalStyle } from "../../globalStyles/GlobalStyle";
import * as S from "./styles";

import { FaRegQuestionCircle } from "react-icons/fa";

export default function Header() {
  const router = useRouter();

  const [state, setState] = useState({
    isDropDownOpen: false,
  });

  const HandleDropDown = () => {
    setState((prev) => ({ ...prev, isDropDownOpen: !prev.isDropDownOpen }));
  };

  const HandleIconClick = () => {
    router.push("/");
    setState((prev) => ({ ...prev, isDropDownOpen: false }));
  };

  const HandleHelpClick = () => {
    router.push("/ajuda");
  };

  const HandleTeamInfoClick = () => {
    router.push("quem-somos");
  };

  return (
    <>
      <GlobalStyle />
      <S.CloseDropDown
        style={{ display: state.isDropDownOpen ? "block" : "none" }}
        onClick={() => setState((prev) => ({ ...prev, isDropDownOpen: false }))}
      />
      <S.Content>
        <S.Header>
          <S.Logo
            onClick={HandleIconClick}
            height={64}
            width={64}
            src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
            alt="Logo da Lacrei saude"
          ></S.Logo>

          <S.ButtonList gap={16}>
            <S.SecondaryButton onClick={HandleTeamInfoClick} width={12}>
              Quem Somos
            </S.SecondaryButton>

            <S.ButtonList gap={8}>
              <S.SecondaryButton onClick={HandleHelpClick} width={8}>
                Ajuda
              </S.SecondaryButton>
              <S.MobileHelpButton onClick={HandleHelpClick}>
                <FaRegQuestionCircle
                  style={{ color: "#018762", height: "3vh", width: "7vw" }}
                />
              </S.MobileHelpButton>

              <S.PrimaryButton
                style={{
                  backgroundColor: state.isDropDownOpen ? "#024C37" : "",
                }}
                onClick={HandleDropDown}
                width={12}
              >
                Entrar{" "}
                <Image
                  src={
                    state.isDropDownOpen
                      ? "/icons/up-arrow.svg"
                      : "/icons/down-arrow.svg"
                  }
                  alt="Abrir menu de entrar"
                  height={24}
                  width={24}
                />
              </S.PrimaryButton>

              <S.LoginDropDown
                style={{ display: state.isDropDownOpen ? "flex" : "none" }}
              >
                <S.WhoWillLogin>
                  <Image
                    src={"/icons/person.svg"}
                    alt="Entrar como paciente"
                    height={24}
                    width={24}
                  />
                  <h2>Paciente</h2>
                </S.WhoWillLogin>
                <div style={{ borderTop: "1px solid gray", width: "100%" }} />
                <S.WhoWillLogin>
                  <Image
                    src={"/icons/medical_services.svg"}
                    alt="Entrar como profissional"
                    height={24}
                    width={24}
                  />
                  <h2>Profissional</h2>
                </S.WhoWillLogin>
              </S.LoginDropDown>
            </S.ButtonList>
          </S.ButtonList>
        </S.Header>
      </S.Content>
    </>
  );
}
