"use client";

import React, { createContext, useState, useEffect } from "react";

type Cart = { url: string }

const useCategoriesState = () =>
  useState({
    items: []
  });

  // https://embed.radio.co/Tabs/b84cf70.html

export const CategoriesContext = createContext<ReturnType<
  typeof useCategoriesState
> | null>(null);

export const useCategories = () => {
  const cart = React.useContext(CategoriesContext);
  if (!cart) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return cart;
};

    // const getCategories = async () => {
    //   let url = `http://localhost:3000/api/blog/category`
    //   const response = await fetch(url);
    //   return await response.json();
    // }


const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useCategoriesState();

  // console.log('category provider')


  useEffect(() => {
    const getCategories = async () => {
      let url = `http://localhost:3000/api/blog/taxonomy`

      try {
        const response = await fetch(url);

        const data = await response.json();
        // console.log('categories data', data)
        setCategories({ items: data });
        // setLoading(false);
      } catch (error) {
        console.log('error client url', url)
        // setError(error);
        // setLoading(false);
      }
    };

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={[categories, setCategories]}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
