"use client";
import React, { createContext, useState } from "react";

type Cart = { url: string }

const useCartState = () =>
  useState({
    url: 'https://embed.radio.co/player/b84cf70.html',
  });

export const PlayerContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = React.useContext(PlayerContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useCartState();

  return (
    <PlayerContext.Provider value={[cart, setCart]}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
