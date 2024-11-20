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
} from "@chakra-ui/react";
import styles from "../styles/confirmationModal.module.css";
import InfoIcon from "../../../public/images/Info Circle.png";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import CheckIcon from "../../../public/images/Success-Circle.png";
import dynamic from "next/dynamic";

const CancelApprovalConfirmationModal = ({ modalText, isOpen, onClose }) => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [size, setSize] = useState("sm");
  const [openText, setOpenText] = useState(false);

  const openTextHandler = () => {
    setOpenText(true);
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
              <Image className={styles["modal-info"]} src={InfoIcon} />
              <Text className={styles["modal-text"]}>{modalText}</Text>
              <Flex align={"center"}>
                <Button onClick={onClose} className={styles["modal-reject"]}>
                  Batal
                </Button>
                <Button
                  onClick={openTextHandler}
                  className={styles["modal-approve"]}
                >
                  Yakin
                </Button>
              </Flex>
            </>
          ) : (
            <Flex
              direction={"column"}
              align={"center"}
              justify={"center"}
              gap={"24px"}
            >
              <Image src={CheckIcon} />
              <Text textAlign={"center"}>
                Anda Berhasil Membatalkan Permintaan Remunerasi Digital Product
                A
              </Text>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CancelApprovalConfirmationModal;
