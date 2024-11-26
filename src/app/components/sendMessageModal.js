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
import styles from "../styles/inbox.module.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useGetListUsers } from "../api/common";
import { useReplyInbox } from "../api/inbox";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const SendMessageModal = ({ isOpen, onClose, currentData, refetch }) => {
  const toast = useToast();
  const { data: dataUsers } = useGetListUsers();
  const [text, setText] = useState("");
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [inboxFile, setInboxFile] = useState();
  const [date, setDate] = useState();
  const { mutate } = useReplyInbox();

  const userExists = dataUsers?.some(
    (user) => user.username === currentData?.sender_name
  );

  const usersWithSender = userExists
    ? dataUsers
    : [...(dataUsers || []), { username: currentData?.sender_name }];

  useEffect(() => {
    if (currentData?.sender_name) {
      setUsername(currentData.sender_name);
    }
  }, [currentData]);

  const replyMessageHandler = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("schedule", date);
    formData.append("main_text", text);
    formData.append("file", inboxFile);

    mutate(
      {
        data: formData,
        id: currentData.room_message_id,
      },
      {
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Berhasil me-reply message",
            duration: 3000,
            status: "success",
            position: "top",
            isClosable: true,
          });
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay />
      <ModalContent style={{ padding: "2rem 0" }}>
        <ModalBody className={styles["modal-wrapper"]}>
          <Flex className={styles["modal-notes-wrapper"]}>
            <Box mb={"1rem"}>
              <Text className={styles["modal-title"]}>Kepada</Text>
              <Select
                placeholder="Pilih Nama"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles["inbox-filter-select"]}
              >
                {usersWithSender.map((item, index) => (
                  <option key={index} value={item.username}>
                    {item.username}
                  </option>
                ))}
              </Select>
            </Box>
            <Box mb={"1rem"}>
              <Text className={styles["modal-title"]}>Judul</Text>
              <Input
                className={styles["modal-input"]}
                type="text"
                placeholder="Ketikkan Judul"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Box>
            <Box mb={"1rem"}>
              <Text className={styles["modal-title"]}>Pilih Pesan</Text>
              <ReactQuill
                theme="snow"
                value={text}
                onChange={setText}
                style={{ margin: "1.5rem 0 4rem", height: "249px" }}
              />
            </Box>
            <Box mb="1rem">
              <Text className={styles["modal-title"]}>Upload File</Text>
              <Box as="label" cursor="pointer">
                <Text>{inboxFile ? inboxFile.name : "Pilih file..."}</Text>
                <Input
                  accept="application/pdf"
                  type="file"
                  display="none"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      setInboxFile(file);
                    }
                  }}
                />
              </Box>
            </Box>
            <Box mb={"1rem"}>
              <Text className={styles["modal-title"]}>Pilih Tanggal</Text>
              <Input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className={styles["modal-input"]}
              />
            </Box>
            <Button
              onClick={replyMessageHandler}
              alignSelf={"end"}
              className={styles["modal-approve"]}
            >
              Send
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SendMessageModal;
