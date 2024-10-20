"use client";

import React, { createContext, useState, useEffect } from "react";

const useTaxonomyState = () =>
  useState([]);

  // https://embed.radio.co/Tabs/b84cf70.html

export const TaxonomyContext = createContext<ReturnType<
  typeof useTaxonomyState
> | null>(null);

export const useTaxonomy = () => {
  const cart = React.useContext(TaxonomyContext);
  if (!cart) {
    throw new Error("useTaxonomy must be used within a TaxonomyProvider");
  }
  return cart;
};

const TaxonomyProvider = ({ children }: { children: React.ReactNode }) => {
  const [taxonomy, setTaxonomy] = useTaxonomyState();

  // console.log('taxonomy provider')


  useEffect(() => {
    const getTaxonomy = async () => {
      const url = `http://localhost:3000/api/blog/taxonomy`

      try {
        const response = await fetch(url);

        const data = await response.json();
        setTaxonomy(data);
        // setLoading(false);
      } catch (error) {
        console.log('error client url', error)
        // setError(error);
        // setLoading(false);
      }
    };

    getTaxonomy();
  }, []);

  return (
    <TaxonomyContext.Provider value={[taxonomy, setTaxonomy]}>
      {children}
    </TaxonomyContext.Provider>
  );
};

export default TaxonomyProvider;
