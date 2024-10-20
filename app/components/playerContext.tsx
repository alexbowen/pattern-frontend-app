"use client";

import React, { createContext, useState } from "react";

type Cart = { url: string }

const usePlayerState = () =>
  useState({
    url: '',
    id: 'x',
  });

  // https://embed.radio.co/player/b84cf70.html

export const PlayerContext = createContext<ReturnType<
  typeof usePlayerState
> | null>(null);

export const usePlayer = () => {
  const cart = React.useContext(PlayerContext);
  if (!cart) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return cart;
};

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [player, setPlayer] = usePlayerState();

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
