"use client";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import styles from "../styles/helpCenter.module.css";

const ChangeContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
      <ModalOverlay />
      <ModalContent className={styles["help-center-modal"]}>
        <ModalBody>
          <Text mb={"2rem"} className={styles["help-center-title"]}>
            Kontak
          </Text>
          <Flex mb={"1rem"}>
            <Text className={styles["help-center-text"]}>
              Nomor Telepon Kantor:
            </Text>
            <Input type="tel" className={styles["help-center-input"]} />
          </Flex>
          <Flex mb={"1rem"}>
            <Text className={styles["help-center-text"]}>Alamat e-mail:</Text>
            <Input type="email" className={styles["help-center-input"]} />
          </Flex>
          <Flex mb={"1.5rem"}>
            <Text className={styles["help-center-text"]}>
              Nomor Admin Scala:
            </Text>
            <Input type="tel" className={styles["help-center-input"]} />
          </Flex>
          <Flex align={"center"} justify={"end"}>
            <Button
              className={styles["help-center-back-btn"]}
              onClick={onClose}
            >
              Back
            </Button>
            <Button mb={"0"} className={styles["help-center-edit-btn"]}>
              Save
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChangeContactModal;
