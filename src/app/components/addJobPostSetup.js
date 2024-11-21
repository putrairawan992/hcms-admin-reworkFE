"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import styles from "../styles/setupJobPost.module.css";
import { useState } from "react";
import { useSubmitJobPostSetup } from "../api/setup";

const AddJobPostSetup = ({ isOpen, onClose, title, option, refetch }) => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { mutate } = useSubmitJobPostSetup();

  const submitHandler = () => {
    const data = {
      status,
    };

    if (title === "Pendidikan") {
      data["education_name"] = name;
    } else if (title === "Lokasi Kerja") {
      data["job_location_name"] = name;
    } else if (title === "Keuntungan dari Perusahaan") {
      data["benefit_name"] = name;
    } else if (title === "Pengalaman") {
      data["experience_name"] = name;
    } else if (title === "Spesialisasi Pekerjaan") {
      data["job_specialist_name"];
    } else if (title === "Tingkat Pekerjaan") {
      data["job_level_name"];
    }

    mutate(
      { data, option },
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
          refetch();
          onClose();
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
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
      <ModalOverlay />
      <ModalContent padding={"2.5rem 1.5rem 1.5rem"}>
        <ModalBody>
          <Text mb={"2rem"} className={styles["job-post-title"]}>
            {title}
          </Text>
          <Box>
            <Box mb={"1rem"}>
              <Text className={styles["job-post-modal-text"]}>
                Masukkan {title}
              </Text>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder={`Masukkan ${title}`}
                type="text"
              />
            </Box>
            <Box>
              <Text className={styles["job-post-modal-text"]}>Status</Text>
              <Select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
              >
                <option value={""} selected disabled hidden>
                  Pilih Status
                </option>
                <option value={"Active"}>Aktif</option>
                <option value={"Inactive"}>Non - Aktif</option>
              </Select>
            </Box>
          </Box>
          <Flex align={"center"} justify={"end"} mt={"2.5rem"}>
            <Button
              onClick={submitHandler}
              mr={"0"}
              className={styles["job-post-search-btn"]}
            >
              Create
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddJobPostSetup;
