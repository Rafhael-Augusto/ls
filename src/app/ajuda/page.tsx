"use client";

import { useRouter } from "next/navigation";

import Header from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import QA from "@/components/QuestionAnswer/questionAnswer";

import * as S from "./styles";

export default function HelpPage() {
  const router = useRouter();

  const HandleHomeClick = () => {
    router.push("/");
  };

  return (
    <>
      <S.Container>
        <Header />
        <S.ExtraInfo>
          <S.Home onClick={HandleHomeClick}>
            <h3>Início</h3> <span>{">"}</span>{" "}
            <strong>Dúvidas Frequentes</strong>
          </S.Home>

          <S.FrequentQuestions>
            <h1>Dúvidas Frequentes</h1>
            <h3>Aqui, você encontra as dúvidas mais frequentes!</h3>
          </S.FrequentQuestions>
        </S.ExtraInfo>

        <div>
          <QA
            question="Como faço para me cadastrar na Lacrei Saúde?"
            answer="Na página inicial, clique em “Para pacientes” ou “Buscar atendimento” caso você seja um paciente. Caso você seja um profissional da saúde, clique em “Para profissionais” ou “Oferecer atendimento”."
          />
          <QA
            question="Como faço para alterar o meu cadastro?"
            answer="Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida clique em “Informações pessoais” e altere os dados que desejar. No final basta salvar as alterações realizadas."
          ></QA>
          <QA
            question="Como faço para excluir meu cadastro na Lacrei Saúde?"
            answer="Após o login, na parte superior direita da página clique em “Meu perfil”. Em seguida, acesse a aba “Privacidade”. Na seção “Minha conta”, clique em “Apagar minha conta”."
          ></QA>
          <QA
            question="Esqueci minha senha. Como faço para acessar minha conta?"
            answer="Na página de login/cadastro, clique em “Esqueci minha senha”. Preencha o campo com o e-mail que você utilizou para se cadastrar na Lacrei Saúde e clique em “Enviar link”. Você receberá um e-mail com um link para redefinir sua senha."
          ></QA>
          <QA
            question="Não estou recebendo o e-mail de validação. O que faço?"
            answer="Caso nosso e-mail não esteja na caixa de entrada, confira se o e-mail informado está escrito corretamente. Verifique também as outras pastas, a mensagem pode ter sido movida por um filtro de spam ou regra de e-mail, direcionando para a pasta de spam, lixo eletrônico, itens apagados, arquivo ou e-mail secundário. Caso o problema continue, envie um e-mail para contato@lacreisaude.com.br."
          ></QA>
          <QA
            question="O link para a minha redefinição de senha ou e-mail expirou. O que devo fazer?"
            answer="Nosso link para redefinições possui um prazo de validade de 24 horas. Isso ajuda a evitar que contas sejam usadas indevidamente."
          ></QA>
          <QA
            question="Não recebo o código SMS. O que eu faço?"
            answer="Antes de ligar para a pessoa profissional, você precisa validar seu número de telefone. Para isso, você receberá um token de autenticação por SMS. Em aparelhos com sistema operacional Android ou iOS, existe a possibilidade do aplicativo de mensagens estar com algum problema por conta de falhas no software. Nesse caso, acesse as configurações do dispositivo e verifique se a solução está disponível, seja para todo o sistema ou apenas para o aplicativo de mensagens especificamente. Caso o problema não seja solucionado, recomendamos que você entre em contato com a sua operadora ou leve o aparelho à assistência técnica especializada."
          ></QA>
          <QA
            question="Como busco uma pessoa profissional da saúde na Lacrei?"
            answer="Após fazer o login, basta digitar o que procura em nosso campo de busca. Você pode fazer a busca digitando o nome da pessoa profissional, sintomas, especialidade, etnia, identidade de gênero ou sexualidade. Em seguida, clique em “Pesquisar”."
          ></QA>
          <QA
            question="Como faço para registrar uma reclamação?"
            answer="Buscamos melhorar cada vez mais. Caso sua experiência na Lacrei Saúde tenha sido insatisfatória em algum momento, envie um e-mail para suporte@lacreisaude.com.br."
          ></QA>
          <QA
            question="Quero fazer uma denúncia. O que devo fazer?"
            answer="Para fazer uma denúncia, você precisa fazer o login. Após o login, acesse a página da pessoa profissional que deseja denunciar e clique em “Denunciar”."
          ></QA>
          <QA
            question="Por que preciso informar meu número de registro profissional?"
            answer="Caso você seja uma pessoa profissional, precisamos do seu número de registro para manter um ambiente seguro dentro da Lacrei Saúde. Após a validação, vamos seguir com o seu cadastro em nosso site."
          ></QA>
          <QA
            question="Qual o tempo de validação do meu cadastro?"
            answer="Após preencher todas as informações necessárias, você receberá um e-mail em até 2 dias úteis com os próximos passos para a finalização do seu cadastro na plataforma."
          ></QA>
        </div>

        <S.Extra>
          <span>Não encontrou o que procurava?</span>
          <S.PrimaryButton href="mailto:contato@lacreisaude.com.br">
            Enviar e-mail
          </S.PrimaryButton>
        </S.Extra>
        <Footer />
      </S.Container>
    </>
  );
}
