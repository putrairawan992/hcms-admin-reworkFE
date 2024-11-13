"use client";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import styles from "../styles/confirmationModal.module.css";
import InfoIcon from "../../../public/images/Info Circle.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

const ConfirmationModal = ({ modalText, isOpen, onClose }) => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [size, setSize] = useState("sm");
  const [openText, setOpenText] = useState(false);
  const [text, setText] = useState("");

  const openTextHandler = () => {
    setSize("xl");
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
              <Image
                className={styles["modal-info"]}
                src={InfoIcon}
                width={100}
                height={100}
              />
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
            <Flex className={styles["modal-notes-wrapper"]}>
              <Text className={styles["modal-notes-text"]}>Notes</Text>
              <ReactQuill
                theme="snow"
                value={text}
                onChange={setText}
                style={{ margin: "1.5rem 0 4rem", height: "249px" }}
              />
              <Button alignSelf={"end"} className={styles["modal-approve"]}>
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
