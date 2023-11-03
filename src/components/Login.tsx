import { Flex, Heading, Text } from "@chakra-ui/react";
import {
  GoogleButton,
  HeadingCustomized,
  InputCustomized,
  SingUp,
} from "./Inputs&Buttons";
import { motion } from "framer-motion";

export const Login = () => {
  const HeaderSection = () => {
    return (
      <Flex w="100%" h="10%" direction="column" justify="center" align="center">
        <HeadingCustomized text="Inciar sesion" />
      </Flex>
    );
  };

  const InputSection = () => {
    return (
      <Flex w="100%" h="50%" direction="column" justify="center" align="center">
        <InputCustomized title="Email" placeholder="email@gmail.com" />
        <InputCustomized title="Contraseña" placeholder="********" />
      </Flex>
    );
  };

  const ButtonSection = () => {
    return (
      <Flex
        w="100%"
        h="25%"
        direction="column"
        justify="center"
        align="center"
        gap={4}
      >
        <SingUp />
        <GoogleButton />
      </Flex>
    );
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Flex
        w="30vw"
        h="65vh"
        justify="center"
        align="center"
        backgroundColor="rgba(255, 255, 255, 0.25)" // Ajusta la opacidad según tus preferencias
        backdropFilter="blur(5px)" // Ajusta el valor del desenfoque según tus preferencias
        direction="column"
        shadow="lg"
        border="1px"
        borderColor="whiteAlpha.500"
      >
        <HeaderSection />
        <InputSection />
        <ButtonSection />
      </Flex>
    </motion.div>
  );
};
