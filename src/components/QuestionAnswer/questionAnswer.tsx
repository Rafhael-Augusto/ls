"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { GlobalStyle } from "@/globalStyles/GlobalStyle";
import * as S from "./styles";

type qa = {
  question: string;
  answer: string;
};

export default function QA({ question, answer }: qa) {
  const [state, setState] = useState({
    isOpen: false,
  });

  const HandleClick = () => {
    setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  return (
    <>
      <GlobalStyle />

      <S.Content style={{ marginBottom: "0" }} onClick={HandleClick}>
        <h1 style={{ fontWeight: "lighter" }}>{question}</h1>
        <IoIosArrowDown
          style={{
            height: "4vh",
            width: "1.5vw",
            display: state.isOpen ? "none" : "block",
          }}
        />
        <IoIosArrowUp
          style={{
            height: "4vh",
            width: "1.5vw",
            display: state.isOpen ? "block" : "none",
          }}
        />
      </S.Content>
      <S.Content
        style={{
          display: state.isOpen ? "block" : "none",
          marginTop: "0.5vh",
          maxWidth: "78vw",
          cursor: "default",
          fontSize: "1.4vh",
          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ fontWeight: "lighter" }}>{answer}</h2>
      </S.Content>
    </>
  );
}
