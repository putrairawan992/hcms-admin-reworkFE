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
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import styles from "../styles/confirmationModal.module.css";
import { useRef, useState } from "react";
import UploadIcon from "../../../public/images/Group (4).png";
import UploadedFileIcon from "../../../public/images/doc.circle.png";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { ArrowUpIcon } from "./icons";
import { useApproveRemuneration } from "../api/approval";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const NoteModal = ({ modalText, isOpen, onClose, id, isApprove }) => {
  const toast = useToast();
  const router = useRouter();
  const { mutate } = useApproveRemuneration();
  const [size] = useState("xl");
  const [storedFile, setStoredFile] = useState();
  const fileInputRef = useRef(null);
  const { setValue, watch, handleSubmit } = useForm({
    defaultValues: {
      note: "",
      file: "",
    },
  });

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue("file", file);
      setStoredFile(file);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("file", data?.file);
    formData.append("note", data?.note);

    mutate(
      {
        id,
        data: formData,
        isApprove,
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: `Anda ${isApprove ? "Menyetujui" : "Menolak"
              } Remunerasi Digital Product A`,
            duration: 3000,
            status: "success",
            position: "top",
            isClosable: true,
          });
          router.push("/approval/remuneration");
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
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: "2rem 0" }}>
        <ModalBody className={styles["modal-wrapper"]}>
          <Image className={styles["modal-info"]} src='/images/info-circle.png' />
          <Text className={styles["modal-title"]}>{modalText}</Text>
          <Flex className={styles["modal-notes-wrapper"]}>
            <Text className={styles["modal-notes-text"]}>Notes</Text>
            <ReactQuill
              theme="snow"
              value={watch("note")}
              onChange={(value) => setValue("note", value)}
              style={{ margin: "1.5rem 0 4rem", height: "249px" }}
            />
            <>
              {isApprove &&
                (!storedFile ? (
                  <Flex
                    onClick={handleClick}
                    className={styles["modal-upload-container"]}
                  >
                    <Image
                      className={styles["modal-container-upload-img"]}
                      src={UploadIcon}
                    />
                    <Box marginLeft={"1rem"}>
                      <Text className={styles["modal-container-upload-title"]}>
                        Drop files her or click to upload
                      </Text>
                      <Text className={styles["modal-container-upload-text"]}>
                        File supported : PDF, Maksimal 1 file and 10 MB
                      </Text>
                    </Box>
                    <Input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                  </Flex>
                ) : (
                  <Flex
                    onClick={handleClick}
                    className={styles["modal-uploaded-container"]}
                  >
                    <Flex align={"center"}>
                      <Image
                        className={styles["modal-uploaded-img"]}
                        src={UploadedFileIcon}
                      />
                      <Text className={styles["modal-uploaded-text"]}>
                        {storedFile.name}
                      </Text>
                    </Flex>
                    <Flex flexDir={"column"} align={"center"}>
                      <ArrowUpIcon />
                      <Text className={styles["modal-uploaded-reupload-text"]}>
                        Re-upload
                      </Text>
                    </Flex>
                    <Input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                  </Flex>
                ))}
            </>
            <Button
              onClick={handleSubmit(onSubmit)}
              alignSelf={"end"}
              className={styles["modal-approve"]}
            >
              Submit
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
