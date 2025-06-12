"use client";

import { GlobalStyle } from "@/globalStyles/GlobalStyle";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

export default function Doggy() {
  const [state, setState] = useState({
    isIdle: true,
    isMoving: false,
    isAlive: true,
    petSprite: "/doggy/SNIFFING-LEFT.gif",
    StolenItemPos: [0, 0],
  });

  const petInfo = useRef<HTMLDivElement>(null);
  const petLooking = useRef(-1);

  const newPosition = useRef([0, 0]);
  const currentPosition = useRef([400, 200]);

  const chanceOfIdle = 0.4;
  const distanceOfDogWalk = 120;

  const handlePetLife = () => {
    setState((prev) => ({ ...prev, isAlive: false }));
  };

  useEffect(() => {
    const PetMovement = () => {
      const setPetIdle = Math.random() > chanceOfIdle ? false : true;

      if (setPetIdle) {
        const randomIdleSprit = Math.random();
        if (petLooking.current < 0) {
          setState((prev) => ({
            ...prev,
            petSprite:
              randomIdleSprit > 0.25
                ? "/doggy/SNIFFING-LEFT.gif"
                : "/doggy/PANTING.gif",
          }));
        } else {
          setState((prev) => ({
            ...prev,
            petSprite:
              randomIdleSprit > 0.25
                ? "/doggy/SNIFFING-RIGHT.gif"
                : "/doggy/PANTING.gif",
          }));
        }
        return;
      }

      const getRandomPosition = () => {
        const randomSign = Math.random() > 0.5 ? -1 : 1;
        const randomPosition = Math.floor(Math.random() * distanceOfDogWalk);
        return randomSign * randomPosition;
      };

      const newPosX = getRandomPosition();
      const newPosY = getRandomPosition();
      newPosition.current = [newPosX, newPosY];

      const maxX = window.innerWidth;
      const maxY = window.innerHeight;

      const newPox = Math.max(
        0,
        Math.min(maxX, newPosX + currentPosition.current[0])
      );
      const newPoy = Math.max(
        0,
        Math.min(maxY, newPosY + currentPosition.current[1])
      );

      if (newPosition.current[0] < 0) {
        setState((prev) => ({ ...prev, petSprite: "/doggy/WALKING-LEFT.gif" }));
        petLooking.current = -1;
      } else {
        setState((prev) => ({
          ...prev,
          petSprite: "/doggy/WALKING-RIGHT.gif",
        }));
        petLooking.current = 1;
      }

      currentPosition.current[0] = newPox;
      currentPosition.current[1] = newPoy;
    };

    const currentPetPos = petInfo.current
      ? petInfo.current.getBoundingClientRect()
      : null;

    const interval = setInterval(
      () => {
        PetMovement();
      },
      currentPetPos !== null && currentPetPos.x === currentPosition.current[0]
        ? 1200
        : 3000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <S.Puppy
        onClick={handlePetLife}
        ref={petInfo}
        style={{
          transform: `translate(${currentPosition.current[0]}px, ${currentPosition.current[1]}px)`,
          backgroundImage: `url(${state.petSprite})`,
          display: state.isAlive ? "block" : "none",
        }}
      ></S.Puppy>
    </>
  );
}
