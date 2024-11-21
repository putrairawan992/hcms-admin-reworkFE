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
import SidebarLayout from "../components/sidebarLayout";
import styles from "../styles/editProfile.module.css";
import { useProfileStore } from "@/stores/profileStore";
import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useEditProfile } from "../api/profile";

const EditProfile = () => {
  const toast = useToast();
  const { profile } = useProfileStore((state) => state);
  const profileFileInputRef = useRef(null);
  const companyFileInputRef = useRef(null);
  const [profileImagePreview, setProfileImagePreview] = useState();
  const [companyImagePreview, setCompanyImagePreview] = useState();
  const [reload, setReload] = useState(false);
  const { mutate } = useEditProfile();
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone_number: "",
      address: "",
      password: "****************",
      photo: "",
      currentPhoto: "",
      company_photo: "",
      currentCompanyPhoto: "",
    },
  });

  useEffect(() => {
    if (profile && !isEmpty(profile)) {
      setValue("username", profile.username || "-");
      setValue("email", profile.email || "-");
      setValue("phone_number", profile.phone_number || "-");
      setValue("address", profile.address || "-");
      setProfileImagePreview(profile.photo || "");
      setCompanyImagePreview(profile.company_photo || "");
    }
  }, [profile, setValue]);

  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);

  const handleTextClick = (type) => {
    if (type === "profile") {
      profileFileInputRef.current.click();
    } else if (type === "company") {
      companyFileInputRef.current.click();
    }
  };

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      if (type === "profile") {
        setValue("photo", file);
        setProfileImagePreview(URL.createObjectURL(file));
      } else if (type === "company") {
        setValue("company_photo", file);
        setCompanyImagePreview(URL.createObjectURL(file));
      }
    }
  };

  const onSubmit = (data) => {
    if (watch("newPassword") !== watch("confirmPassword")) {
      toast({
        title: "Error",
        description: "Password tidak sama! Mohon ulangi",
        duration: 3000,
        status: "error",
        position: "top",
        isClosable: true,
      });
    } else {
      const formData = new FormData();
      formData.append("username", data.username ? data.username : "-");
      formData.append("email", data.email ? data.email : "-");
      formData.append(
        "phone_number",
        data.phone_number ? data.phone_number : ""
      );
      formData.append("address", data.address ? data.address : "");
      formData.append(
        "password",
        data.confirmPassword ? data.confirmPassword : ""
      );
      formData.append("photo", data.photo ? data.photo : "");
      formData.append(
        "company_photo",
        data.company_photo ? data.company_photo : ""
      );

      mutate(
        {
          dataProfile: formData,
        },
        {
          onSuccess: () => {
            toast({
              title: "Success",
              description: "Berhasil mengupdate data diri!",
              duration: 3000,
              status: "success",
              position: "top",
              isClosable: true,
            });
            setReload(true);
          },
          onError: (err) => {
            console.error(err);
            toast({
              title: "Error",
              description:
                err?.response?.data?.errors || `Something went wrong!`,
              duration: 3000,
              status: "error",
              position: "top",
              isClosable: true,
            });
          },
        }
      );
    }
  };

  return (
    <SidebarLayout>
      {!isEmpty(profile) && (
        <Box className={styles["editProfile-container"]}>
          <Text className={styles["editProfile-title"]}>Edit Profil</Text>
          <Flex className={styles["editProfile-change-img-container"]}>
            <Flex className={styles["editProfile-change-img-wrapper"]}>
              <Box className={styles["editProfile-img-wrapper"]}>
                <Image
                  className={styles["editProfile-img"]}
                  src={profileImagePreview}
                  alt="profile-pict"
                />
              </Box>
              <Text
                onClick={() => handleTextClick("profile")}
                className={styles["editProfile-change-img-text"]}
              >
                Ganti Foto Profil
              </Text>
              <input
                type="file"
                ref={profileFileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, "profile")}
                accept="image/*"
              />
            </Flex>
            <Flex className={styles["editProfile-change-img-wrapper"]}>
              <Box className={styles["editProfile-img-wrapper"]}>
                <Image
                  className={styles["editProfile-img"]}
                  src={companyImagePreview}
                  alt="company-profile-pict"
                />
              </Box>
              <Text
                onClick={() => handleTextClick("company")}
                className={styles["editProfile-change-img-text"]}
              >
                Ganti Foto Perusahaan
              </Text>
              <input
                type="file"
                ref={companyFileInputRef}
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e, "company")}
                accept="image/*"
              />
            </Flex>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={styles["editProfile-upper-input"]}>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]}>
                  Nama Lengkap:
                </Text>
                <Input
                  className={styles["editProfile-input"]}
                  type="text"
                  {...register("username")}
                />
              </Flex>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]}>
                  Alamat E-Mail:
                </Text>
                <Input
                  className={styles["editProfile-input"]}
                  type="email"
                  {...register("email")}
                />
              </Flex>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]}>
                  Nomor Handphone:
                </Text>
                <Input
                  className={styles["editProfile-input"]}
                  type="text"
                  {...register("phone_number", { pattern: /^[0-9]*$/ })}
                />
              </Flex>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]}>
                  Alamat Domisili:
                </Text>
                <Input
                  className={styles["editProfile-input"]}
                  type="text"
                  {...register("address")}
                />
              </Flex>
            </Box>
            <Divider className={styles["editProfile-divider"]} />
            <Box className={styles["editProfile-lower-input"]}>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]}>
                  Password:
                </Text>
                <Input
                  readOnly
                  className={styles["editProfile-input"]}
                  type="password"
                  {...register("password")}
                />
              </Flex>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]} />
                <Input
                  className={styles["editProfile-input"]}
                  type="password"
                  placeholder="Ganti Password Baru"
                  {...register("newPassword")}
                />
              </Flex>
              <Flex className={styles["editProfile-input-wrapper"]}>
                <Text className={styles["editProfile-input-text"]} />
                <Input
                  className={styles["editProfile-input"]}
                  type="password"
                  placeholder="Ketik Ulang Password Baru"
                  {...register("confirmPassword")}
                />
              </Flex>
            </Box>
            <Flex className={styles["editProfile-btn-container"]}>
              <Button type="submit" className={styles["editProfile-btn"]}>
                Save
              </Button>
            </Flex>
          </form>
        </Box>
      )}
    </SidebarLayout>
  );
};

export default EditProfile;
