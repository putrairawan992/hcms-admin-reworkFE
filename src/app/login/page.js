"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import styles from "../styles/loginPage.module.css";
import { useRouter } from "next/navigation";
import { useLogin } from "../api/auth";
import { useState } from "react";

const LoginPage = () => {
  const toast = useToast();
  const { mutate } = useLogin();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    mutate(
      {
        username,
        password,
      },
      {
        onSuccess: async (res) => {
          toast({
            title: "Success",
            description: "Anda berhasil login",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          document.cookie = `userToken=${res.data.token}; path=/; max-age=86400; SameSite=Lax`;
          setTimeout(() => {
            router.push("/");
          }, 1500);
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Email atau password salah, silahkan coba lagi",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Flex className={styles["loginpage-container"]}>
      <Box className={styles["loginpage-left-wrapper"]}>
        <Text className={styles["login-left-title"]}>Welcome to Scala!</Text>
        <Box className={styles["input-section-container"]}>
          <Box className={styles["logo-container"]}>
            <Image src={"/images/scala.png"} width={"87px"} height={"44px"} />
          </Box>
          <Box className={styles["login-section-wrapper"]}>
            <Input
              className={styles["input-container"]}
              type="text"
              placeholder="Masukkan e-mail atau username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              className={styles["input-container"]}
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              background={username && password ? "#F39F5A" : "#b6b6b6"}
              onClick={loginHandler}
              className={styles["login-button"]}
            >
              Login
            </Button>
            <Text className={styles["forgot-password-text"]}>
              Lupa Password
            </Text>
            <Divider />
            <Text className={styles["register-text"]}>
              Belum ada akun? Silahkan daftar{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                disini
              </span>
            </Text>
            <Text className={styles["copyright-text"]}>
              © SCALA. 2023. All Rights Reserved
            </Text>
          </Box>
        </Box>
      </Box>
      <Box className={styles["loginpage-right-wrapper"]}>
        <Text className={styles["loginpage-right-title"]}>
          “Every problem is a gift - without problems we would not grow.”
        </Text>
        <Image
          src={"/images/login-right.png"}
          alt="Login Right Side"
          width={500}
          height={500}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
