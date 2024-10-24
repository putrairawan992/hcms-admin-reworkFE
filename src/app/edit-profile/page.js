import { Box, Button, Divider, Flex, Input, Text } from "@chakra-ui/react";
import SidebarLayout from "../components/sidebarLayout";
import styles from "../styles/editprofile.module.css";
import DummyImage from "../../../public/images/dummy-image.png";
import Image from "next/image";

const EditProfile = () => {
  return (
    <SidebarLayout>
      <Box className={styles["editProfile-container"]}>
        <Text className={styles["editProfile-title"]}>Edit Profil</Text>
        <Flex className={styles["editProfile-change-img-container"]}>
          <Flex className={styles["editProfile-change-img-wrapper"]}>
            <Box className={styles["editProfile-img-wrapper"]}>
              <Image
                className={styles["editProfile-img"]}
                src={DummyImage}
                width={100}
                height={100}
              />
            </Box>
            <Text className={styles["editProfile-change-img-text"]}>
              Ganti Foto Profil
            </Text>
          </Flex>
          <Flex className={styles["editProfile-change-img-wrapper"]}>
            <Box className={styles["editProfile-img-wrapper"]}>
              <Image
                className={styles["editProfile-img"]}
                src={DummyImage}
                width={100}
                height={100}
              />
            </Box>
            <Text className={styles["editProfile-change-img-text"]}>
              Ganti Foto Perusahaan
            </Text>
          </Flex>
        </Flex>
        <Box className={styles["editProfile-upper-input"]}>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]}>
              Nama Lengkap:
            </Text>
            <Input
              className={styles["editProfile-input"]}
              type="text"
              defaultValue={"Hanafia Al Zahra"}
            />
          </Flex>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]}>
              Alamat E-Mail:
            </Text>
            <Input
              className={styles["editProfile-input"]}
              type="email"
              defaultValue={"hanafia@gmail.com"}
            />
          </Flex>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]}>
              Nomor Handphone:
            </Text>
            <Input
              className={styles["editProfile-input"]}
              type="text"
              defaultValue="081212341234"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </Flex>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]}>
              Alamat Domisili:
            </Text>
            <Input
              className={styles["editProfile-input"]}
              type="text"
              defaultValue={
                "Jl. Kenangan No. 10A RT/RW. 20/5 kel. ABC, kec. ABC, Jakarta ..."
              }
            />
          </Flex>
        </Box>
        <Divider className={styles["editProfile-divider"]} />
        <Box className={styles["editProfile-lower-input"]}>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]}>Password:</Text>
            <Input
              className={styles["editProfile-input"]}
              type="password"
              defaultValue={"****************"}
            />
          </Flex>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]} />
            <Input
              className={styles["editProfile-input"]}
              type="password"
              placeholder="Ganti Password Baru"
            />
          </Flex>
          <Flex className={styles["editProfile-input-wrapper"]}>
            <Text className={styles["editProfile-input-text"]} />
            <Input
              className={styles["editProfile-input"]}
              type="password"
              placeholder="Ketik Ulang Password Baru"
            />
          </Flex>
        </Box>
        <Flex className={styles["editProfile-btn-container"]}>
          <Button className={styles["editProfile-btn"]}>Save</Button>
        </Flex>
      </Box>
    </SidebarLayout>
  );
};

export default EditProfile;
