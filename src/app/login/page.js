"use client";
import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import styles from "../styles/loginPage.module.css";
import Image from "next/image";
import LoginRightSide from "../../../public/images/login-right.png";
import ScalaLogo from "../../../public/images/scala.png";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const loginHandler = () => {
    router.push("/");
  };

  return (
    <Flex className={styles["loginpage-container"]}>
      <Box className={styles["loginpage-left-wrapper"]}>
        <Text className={styles["login-left-title"]}>Welcome to Scala!</Text>
        <Box className={styles["input-section-container"]}>
          <Box className={styles["logo-container"]}>
            <Image src={ScalaLogo} width={100} height={100} />
          </Box>
          <Box className={styles["login-section-wrapper"]}>
            <Input
              className={styles["input-container"]}
              type="email"
              placeholder="Masukkan e-mail"
            />
            <Input
              className={styles["input-container"]}
              type="password"
              placeholder="Masukkan password"
            />
            <Button onClick={loginHandler} className={styles["login-button"]}>
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
          src={LoginRightSide}
          alt="Login Right Side"
          width={500}
          height={500}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
