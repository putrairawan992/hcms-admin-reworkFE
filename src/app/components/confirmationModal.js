"use client";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import styles from "../styles/confirmationModal.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useJobPostMutation } from "../api/approval";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ConfirmationModal = ({
  modalText,
  isOpen,
  onClose,
  isApprove,
  id,
  refetch,
}) => {
  const toast = useToast();
  const [size, setSize] = useState("sm");
  const [openText, setOpenText] = useState(false);
  const [text, setText] = useState("");
  const { mutate } = useJobPostMutation();

  const submitHandler = () => {
    if (isApprove) {
      mutate(
        {
          id,
          isApprove,
        },
        {
          onSuccess: () => {
            toast({
              title: "Success",
              description: `Data telah ${isApprove ? "disetujui" : "ditolak"}`,
              duration: 3000,
              status: "success",
              position: "top",
              isClosable: true,
            });
            onClose();
            refetch();
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
    } else {
      setSize("xl");
      setOpenText(true);
    }
  };

  const rejectHandler = () => {
    mutate(
      {
        id,
        isApprove,
        data: {
          reason: text,
        },
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: `Data telah ${isApprove ? "disetujui" : "ditolak"}`,
            duration: 3000,
            status: "success",
            position: "top",
            isClosable: true,
          });
          onClose();
          refetch();
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

  useEffect(() => {
    setOpenText(false);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: "2rem 0" }}>
        <ModalBody className={styles["modal-wrapper"]}>
          {!openText ? (
            <>
              <Image
                className={styles["modal-info"]}
                src={"/images/Info Circle.png"}
              />
              <Text className={styles["modal-text"]}>{modalText}</Text>
              <Flex align={"center"}>
                <Button onClick={onClose} className={styles["modal-reject"]}>
                  Batal
                </Button>
                <Button
                  onClick={submitHandler}
                  className={styles["modal-approve"]}
                >
                  Yakin
                </Button>
              </Flex>
            </>
          ) : (
            <Flex className={styles["modal-notes-wrapper"]}>
              <Text className={styles["modal-notes-text"]}>Notes</Text>
              <ReactQuill
                theme="snow"
                value={text}
                onChange={setText}
                style={{ margin: "1.5rem 0 4rem", height: "249px" }}
              />
              <Button
                onClick={rejectHandler}
                alignSelf={"end"}
                className={styles["modal-approve"]}
              >
                Submit
              </Button>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
