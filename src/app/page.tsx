"use client";

import { Login } from "@/components/Login";
import { Flex, Input, Text } from "@chakra-ui/react";
import imageBg from "../../public/maldivas.webp";
import { useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "@/context/authContext";
import Dashboard from "./dashboard/page";
import { firebaseConfig } from "@/firebase";
import { initializeApp } from "firebase/app";

export default function Home() {
  const user = useContext(AuthContext);

  return (
    <Flex
      minW="100vw"
      minH="100vh"
      justify="center"
      align="center"
      bg="white"
      backgroundImage={imageBg.src} // Reemplaza 'url_de_tu_imagen.jpg' con la URL de tu imagen de fondo
      backgroundSize="cover" // Puedes ajustar el tamaño de la imagen de fondo
      backgroundPosition="center" // Puedes ajustar la posición de la imagen de fondo
    >
      {<Login />}
      {/* {<Dashboard />} */}
    </Flex>
  );
}
