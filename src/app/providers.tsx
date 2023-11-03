"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { firebaseConfig } from "@/firebase";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AuthContext } from "@/context/authContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<any[]>([]);
  const [user, setUser] = useState<any>();

  useEffect(() => {
    initializeApp(firebaseConfig);
    const db = getFirestore(initializeApp(firebaseConfig));

    async function getData() {
      try {
        const querySnapshot = await getDocs(collection(db, "producto"));
        querySnapshot.forEach((doc) => setProducts([...products, doc.data()]));
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  console.log(products);

  return (
    <CacheProvider>
      <AuthContext.Provider value={user}>
        <ChakraProvider>{children}</ChakraProvider>
      </AuthContext.Provider>
    </CacheProvider>
  );
}
