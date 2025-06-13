"use client";

import { useRouter } from "next/navigation";

import * as S from "./styles";

import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { MdKeyboardControlKey } from "react-icons/md";

export function Footer() {
  const router = useRouter();

  const HandleIconClick = () => {
    router.push("/");
  };

  const HandleGoUpButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HandleWhoAreWeButton = () => {
    router.push("/quem-somos");
  };

  return (
    <>
      <S.Content>
        <S.ColumnsList>
          <S.Column gap={52}>
            <S.Logo
              onClick={HandleIconClick}
              src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
              alt="Lacrei Saude logo"
              style={{ height: "12vh", width: "12vw" }}
              height={0}
              width={0}
            />
            <S.SocialMediaList>
              <a href="https://www.facebook.com/lacrei.saude/" target="_blank">
                <FiFacebook
                  style={{ height: "28px", width: "28px", color: "#018762" }}
                />
              </a>
              <a href="https://www.instagram.com/lacreisaude/" target="_blank">
                <FaInstagram
                  style={{ height: "28px", width: "28px", color: "#018762" }}
                />
              </a>
              <a href="https://www.linkedin.com/company/lacrei" target="_blank">
                <TbBrandLinkedin
                  style={{ height: "28px", width: "28px", color: "#018762" }}
                />
              </a>
              <a href="mailto:contato@lacreisaude.com.br">
                <MdOutlineEmail
                  style={{ height: "28px", width: "28px", color: "#018762" }}
                />
              </a>
            </S.SocialMediaList>
          </S.Column>

          <S.Column gap={28}>
            <h3>Lacrei Saúde</h3>

            <S.OtherLinksList>
              <S.OtherLink onClick={HandleWhoAreWeButton} width={6.5}>
                Quem Somos
              </S.OtherLink>
              <S.OtherLink width={7.5}>Nosso Propósito</S.OtherLink>
              <S.OtherLink width={10}>Missão, Visão e Valor</S.OtherLink>
              <S.OtherLink width={7}>Acessibilidade</S.OtherLink>
            </S.OtherLinksList>
          </S.Column>

          <S.Column gap={28}>
            <h3>Saúde</h3>

            <S.OtherLinksList>
              <S.OtherLink width={9}>Buscar atendimento</S.OtherLink>
              <S.OtherLink width={10}>Oferecer atendimento</S.OtherLink>
            </S.OtherLinksList>
          </S.Column>

          <S.Column gap={28}>
            {" "}
            <h3>Segurança e Privacidade</h3>
            <S.OtherLinksList>
              <S.OtherLink width={10.5}>Política de Privacidade</S.OtherLink>
              <S.OtherLink width={7}>Termos de Uso</S.OtherLink>
              <S.OtherLink width={8.5}>Direitos de Titular</S.OtherLink>
            </S.OtherLinksList>
          </S.Column>
        </S.ColumnsList>

        <S.ExtraInfo>
          <span>
            A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
            emergência procure o hospital mais próximo.
          </span>
          <span>
            Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o
            site{" "}
            <S.CvvWebsite href="https://cvv.org.br/" target="_blank">
              www.cvv.org.br
            </S.CvvWebsite>
          </span>
          <div style={{ marginTop: "8px" }}>
            <span>
              Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ:
              51.265.351/0001-65
            </span>
          </div>
          <S.GoUpButton onClick={HandleGoUpButton}>
            <MdKeyboardControlKey
              style={{ color: "#018762", height: "24px", width: "24px" }}
            />
          </S.GoUpButton>
        </S.ExtraInfo>
      </S.Content>
    </>
  );
}
