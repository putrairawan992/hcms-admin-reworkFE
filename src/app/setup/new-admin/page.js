"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/adminRole.module.css";

const NewAdmin = () => {
  return (
    <Box className={styles["admin-role-container"]}>
      <Text className={styles["admin-role-title"]} mb={"3rem"}>
        Setup - Admin - New Admin
      </Text>
      <Flex align={"center"} justify={"space-between"} mb={"2rem"}>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Admin ID</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan ID Admin"
          />
        </Box>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Nama</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Nama Admin"
          />
        </Box>
      </Flex>
      <Flex align={"center"} justify={"space-between"} mb={"2rem"}>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Email</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Email Admin"
          />
        </Box>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Divisi</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Divisi Admin"
          />
        </Box>
      </Flex>
      <Flex align={"center"} justify={"space-between"} mb={"2rem"}>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Jabatan</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Jabatan Admin"
          />
        </Box>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Password</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Password Admin"
          />
        </Box>
      </Flex>
      <Flex align={"center"} justify={"space-between"} mb={"3.5rem"}>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Email</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Email Admin"
          />
        </Box>
        <Box>
          <Text className={styles["admin-role-search-text"]}>Divisi</Text>
          <Input
            className={styles["admin-new-admin-input"]}
            type="text"
            placeholder="Masukkan Divisi Admin"
          />
        </Box>
      </Flex>
      <Divider className={styles["admin-new-admin-divider"]} />
      <Box className={styles["admin-new-admin-bottom-wrapper"]}>
        <Text className={styles["admin-role-title"]}>Feature</Text>
        <Box
          className={styles["admin-new-admin-input-wrapper"]}
          mt={"2rem"}
        >
          <Text className={styles["admin-role-search-text"]}>
            Dashboard
          </Text>
          <Flex align={"center"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Help Center
          </Text>
          <Flex align={"center"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Edit
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Delete
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Upload
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Download
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>Setup</Text>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Admin</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Account</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Dekete
            </Checkbox>
          </Flex>
          <Flex align={"center"}>
            <Text className={styles["admin-new-admin-text"]}>Job Post</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Blast Notification
          </Text>
          <Flex align={"center"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Masterdata
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>BPJSKES</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>BPJSTK</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>SALTAB</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Pajak</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Merge</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            High Level
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Middle Level
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Company</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Upload
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Download
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Talent</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Upload
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Download
            </Checkbox>
          </Flex>
          <Flex align={"center"} mb={"1rem"}>
            <Text className={styles["admin-new-admin-text"]}>Renewal</Text>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Approval Job Post
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Share
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Approve
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Reject
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Approval Remuneration
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Save
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Comment
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Send Document
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Edit
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Delete
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Send
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Download
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Message
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>
            Data Talent
          </Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Download
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>Payslip</Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
          </Flex>
        </Box>
        <Box className={styles["admin-new-admin-input-wrapper"]}>
          <Text className={styles["admin-role-search-text"]}>Form</Text>
          <Flex align={"center"} mb={"1rem"}>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              View
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Create
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Add
            </Checkbox>
            <Checkbox
              className={styles["admin-new-admin-checkbox"]}
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
            >
              Update
            </Checkbox>
          </Flex>
        </Box>
      </Box>
      <Flex width={"100%"} justify={"end"} marginTop={"2rem"}>
        <Button className={styles["admin-new-admin-btn"]}>Save</Button>
      </Flex>
    </Box>
  );
};

export default NewAdmin;
