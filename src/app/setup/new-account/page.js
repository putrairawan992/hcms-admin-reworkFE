"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import styles from "../../styles/accountSetup.module.css";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useRef, useState } from "react";
import { useCreateAccountSetup } from "@/app/api/setup";

const NewAccountSetup = () => {
  const toast = useToast();
  const { mutate } = useCreateAccountSetup();
  const companyFileInputRef = useRef(null);
  const [companyImagePreview, setCompanyImagePreview] = useState();
  const [inputData, setInputData] = useState({
    product_digital_1: {
      nama_pt: "",
      users: [
        {
          username: "",
          email: "",
          inbox: "",
          remuneraion: "",
        },
      ],
    },
    product_digital_2: {
      nama_pt: "",
      users: [
        {
          username: "",
          email: "",
          inbox: "",
          remuneraion: "",
        },
      ],
    },
  });

  const handleTextClick = () => {
    companyFileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCompanyImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddUser = (productIndex) => {
    const newUser = {
      username: "",
      email: "",
      inbox: "",
      remuneraion: "",
    };

    const updatedData = { ...inputData };
    const productKey = Object.keys(updatedData)[productIndex];

    if (updatedData[productKey]) {
      updatedData[productKey].users.push(newUser);
    }

    setInputData(updatedData);
  };

  const handleDeleteUser = (productIndex, userIndex) => {
    const updatedData = { ...inputData };
    const productKey = Object.keys(updatedData)[productIndex];

    if (
      updatedData[productKey] &&
      updatedData[productKey].users.length > userIndex
    ) {
      updatedData[productKey].users.splice(userIndex, 1);
    }

    setInputData(updatedData);
  };

  const handleChange = (productIndex, userIndex, field, value) => {
    const updatedData = { ...inputData };

    if (field === "nama_pt") {
      const productKey = Object.keys(updatedData)[productIndex];
      updatedData[productKey].nama_pt = value;
    } else {
      const productKey = Object.keys(updatedData)[productIndex];
      updatedData[productKey].users[userIndex][field] = value;
    }

    setInputData(updatedData);
  };

  const handleCheckboxChange = (userIndex, productIndex, type) => {
    const updatedData = { ...inputData };
    const productKey = Object.keys(updatedData)[productIndex];
    const updatedUser = updatedData[productKey].users[userIndex];

    updatedUser.inbox = type;

    setInputData(updatedData);
  };

  const isProductEmpty = (product) => {
    return !product.nama_pt.trim() && product.users.every(user =>
      Object.values(user).every(value => !value.trim())
    );
  }

  const createAccountHandler = () => {
    const filteredData = Object.fromEntries(
      Object.entries(inputData).filter(([key, value]) => !isProductEmpty(value))
    );

    mutate(
      { data: filteredData },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Data Berhasil Disimpan",
            duration: 3000,
            status: "success",
            position: "top",
            isClosable: true,
          });
          window.location.reload();
        },
        onError: (err) => {
          console.error(err);
          toast({
            title: "Error",
            description: err?.response?.data?.errors || `Something went wrong!`,
            duration: 3000,
            status: "error",
            position: "top",
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <Box className={styles["account-role-container"]}>
      <Text mb={"2rem"} className={styles["account-role-title"]}>
        Setup - Account - New Account
      </Text>
      {Object.entries(inputData).map(([_, productData], productIndex) => (
        <Box
          className={styles["account-new-account-wrapper"]}
          key={productIndex}
          style={{
            borderBottom:
              productIndex === Object.entries(inputData).length - 1
                ? "none"
                : "2px solid #ae445a",
          }}
        >
          <Flex align={"center"} justify={"space-between"} mb={"2rem"}>
            <Text className={styles["account-setup-subtitle"]}>
              Product Digital {productIndex + 1}
            </Text>
          </Flex>

          {productData.users.map((user, userIndex) => (
            <Flex
              align={"center"}
              w={"100%"}
              justify={"space-between"}
              key={userIndex}
            >
              <Box w={"100%"}>
                <Flex align={"center"} w={"100%"} justify={"space-between"}>
                  <Box w={"48%"}>
                    <Text className={styles["account-setup-header"]}>
                      Nama {userIndex + 1}
                    </Text>
                    <Input
                      type="text"
                      className={styles["account-setup-input"]}
                      placeholder="Masukkan Nama"
                      value={productData.nama_pt}
                      onChange={(e) =>
                        handleChange(
                          productIndex,
                          null,
                          "nama_pt",
                          e.target.value
                        )
                      }
                    />
                  </Box>
                  <Box w={"48%"}>
                    <Text className={styles["account-setup-header"]}>
                      Username {userIndex + 1}
                    </Text>
                    <Input
                      type="text"
                      className={styles["account-setup-input"]}
                      placeholder="Masukkan Username"
                      value={user.username}
                      onChange={(e) =>
                        handleChange(
                          productIndex,
                          userIndex,
                          "username",
                          e.target.value
                        )
                      }
                    />
                  </Box>
                </Flex>
                <Box w={"100%"} m={"1.5rem 0"}>
                  <Text className={styles["account-setup-header"]}>
                    Email {userIndex + 1}
                  </Text>
                  <Input
                    type="text"
                    className={styles["account-setup-input"]}
                    w={"100%"}
                    placeholder="Masukkan Email"
                    value={user.email}
                    onChange={(e) =>
                      handleChange(
                        productIndex,
                        userIndex,
                        "email",
                        e.target.value
                      )
                    }
                  />
                </Box>
                <Flex align={"center"} justify={"start"}>
                  <Box>
                    <Text className={styles["account-setup-header"]}>
                      Inbox {userIndex + 1}
                    </Text>
                    <Flex>
                      <Checkbox
                        sx={{
                          "& .chakra-checkbox__control[data-checked]": {
                            bg: "teal.500",
                          },
                          "& .chakra-checkbox__control": {
                            bg: "#ffffff",
                          },
                          "& .chakra-checkbox__label": {
                            fontSize: "14px !important",
                            fontWeight: "400 !important",
                            lineHeight: "18px !important",
                            textAlign: "left !important",
                            color: "#404041 !important",
                          },
                        }}
                        onChange={() =>
                          handleCheckboxChange(
                            userIndex,
                            productIndex,
                            "view"
                          )
                        }
                      >
                        View
                      </Checkbox>
                      <Checkbox
                        sx={{
                          "& .chakra-checkbox__control[data-checked]": {
                            bg: "teal.500",
                          },
                          "& .chakra-checkbox__control": {
                            bg: "#ffffff",
                          },
                        }}
                        ml={"1rem"}
                        onChange={() =>
                          handleCheckboxChange(
                            userIndex,
                            productIndex,
                            "reply"
                          )
                        }
                      >
                        Reply
                      </Checkbox>
                    </Flex>
                  </Box>
                  <Box ml={"30rem"} mb={"2rem"}>
                    <Text className={styles["account-setup-header"]}>
                      Skema Remunerasi dan Form {userIndex + 1}
                    </Text>
                    <RadioGroup
                      onChange={(value) =>
                        handleChange(
                          productIndex,
                          userIndex,
                          "remuneraion",
                          value
                        )
                      }
                      value={user.remuneraion}
                    >
                      <Stack direction="row">
                        <Radio value="normal">Normal</Radio>
                        <Radio value="khusus">Khusus</Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                </Flex>
              </Box>

              {productData.users.length > 1 && (
                <Flex w={"15%"} align={"center"} justify={"center"}>
                  <DeleteIcon
                    w={"32px"}
                    h={"32px"}
                    mr={"2rem"}
                    cursor={"pointer"}
                    onClick={() => handleDeleteUser(productIndex, userIndex)}
                  />
                </Flex>
              )}
            </Flex>
          ))}

          <Button
            ml={"0"}
            mt={"3rem"}
            className={styles["account-role-search-btn"]}
            onClick={() => handleAddUser(productIndex)}
          >
            <AddIcon mr={"8px"} /> Add Account
          </Button>
        </Box>
      ))}

      <Flex align={"center"} justify={"end"} margin={"3rem 0"}>
        <Button
          onClick={createAccountHandler}
          ml={"0"}
          className={styles["account-role-search-btn"]}
        >
          Save
        </Button>
      </Flex>
    </Box>
  );
};

export default NewAccountSetup;
