import { Flex, Heading, Input, Text } from "@chakra-ui/react";

import { BsGoogle } from "react-icons/bs";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useRouter } from "next/navigation";

export const InputCustomized = ({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) => {
  return (
    <Flex w="80%" h="40%" direction="column" color="black" gap={3}>
      <TextCustomized text={title} />
      <Input
        type="email"
        placeholder={placeholder}
        _placeholder={{ color: "white" }}
        size="md"
        borderColor="white"
      />
    </Flex>
  );
};

export const GoogleButton = () => {
  const provider = new GoogleAuthProvider();

  const handleSubmit = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token);
        console.log(user);
      })
      .catch((error: any) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(errorMessage);
      });
  };

  return (
    <Flex
      w="80%"
      h="40%"
      bg="gray.300"
      justify="center"
      align="center"
      color="black"
      gap={2}
      cursor="pointer"
      onClick={handleSubmit}
    >
      <BsGoogle />
      <Text>Continuar con Google</Text>
    </Flex>
  );
};

export const SingUp = () => {
  const router = useRouter();
  return (
    <Flex
      w="80%"
      h="40%"
      bg="orange.400"
      justify="center"
      align="center"
      color="black"
      cursor="pointer"
      onClick={() => router.push("./dashboard")}
    >
      Inciar Sesion
    </Flex>
  );
};

export const TextCustomized = ({ text }: { text: string }) => {
  return (
    <Text color="orange.600" fontWeight="medium" size="xl">
      {text}
    </Text>
  );
};

export const HeadingCustomized = ({ text }: { text: string }) => {
  return (
    <Heading color="orange.600" fontWeight="bold" size="md">
      {text}
    </Heading>
  );
};
