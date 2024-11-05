"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SidebarLayout from "../components/sidebarLayout";
import styles from "../styles/helpCenter.module.css";
import AskImg from "../../../public/images/faq-icon.png";
import WhatsappIcon from "../../../public/images/Whatsapp.png";
import PDFIcon from "../../../public/images/PDF.png";
import CloudIcon from "../../../public/images/Download From Cloud.png";
import UploadIcon from "../../../public/images/Group (4).png";
import UploadedFileIcon from "../../../public/images/doc.circle.png";
import Image from "next/image";
import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ArrowUpIcon } from "../components/icons";
import ChangeContactModal from "./components/changeContactModal";

const HelpCenter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditQuestion, setIsEditQuestion] = useState(false);
  const [text, setText] = useState("");
  const [storedFile, setStoredFile] = useState();
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setStoredFile(file);
    }
  };

  return (
    <>
      <ChangeContactModal isOpen={isOpen} onClose={onClose} />
      <SidebarLayout>
        <Box className={styles["help-center-container"]}>
          <Flex align={"center"} height={"100%"}>
            <Box className={styles["help-center-left-wrapper"]}>
              <Box>
                <Text className={styles["help-center-title"]}>Help Center</Text>
                <Image
                  className={styles["help-center-img"]}
                  src={AskImg}
                  width={500}
                  height={500}
                />
                <Text className={styles["help-center-active-text"]}>
                  Pertanyaan Populer
                </Text>
                <Text className={styles["help-center-inactive-text"]}>
                  Memulai Scala
                </Text>
                <Text className={styles["help-center-inactive-text"]}>
                  Scala untuk Bisnis
                </Text>
                <Text className={styles["help-center-inactive-text"]}>
                  Privasi & Keamanan
                </Text>
                <Text className={styles["help-center-inactive-text"]}>
                  Peraturan Perusahaan
                </Text>
              </Box>
              <Box>
                <Button
                  onClick={onOpen}
                  className={styles["help-center-edit-btn"]}
                >
                  Edit
                </Button>
                <Text className={styles["help-center-ask-text"]}>
                  Apa yang bisa kami bantu?
                </Text>
                <Flex align={"center"}>
                  <Text
                    className={styles["help-center-info"]}
                    mr={"2rem"}
                    w={"100px"}
                  >
                    Hubungi Kami{" "}
                    <span style={{ fontWeight: "700", color: "#8364BA" }}>
                      (021) 2977 0020
                    </span>
                  </Text>
                  <Text className={styles["help-center-info"]} w={"159px"}>
                    E-Mail{" "}
                    <span style={{ fontWeight: "700", color: "#8364BA" }}>
                      scaleup@metranet.co.id
                    </span>
                  </Text>
                </Flex>
                <Flex align={"center"} mt={"1.5rem"}>
                  <Image
                    className={styles["help-center-whatsapp-icon"]}
                    src={WhatsappIcon}
                    width={100}
                    height={100}
                  />
                  <Text
                    className={styles["help-center-info"]}
                    margin={"0 14px 0 8px"}
                  >
                    Admin Scala
                  </Text>
                  <Text
                    className={styles["help-center-info"]}
                    style={{ fontWeight: "700", color: "#8364BA" }}
                  >
                    Fast Response
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box className={styles["help-center-right-wrapper"]}>
              {isEditQuestion ? (
                <>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      width={"100%"}
                      mb={"3rem"}
                    >
                      <Text className={styles["help-center-right-title"]}>
                        Pertanyaan Populer
                      </Text>
                      <Flex align={"center"}>
                        <Button
                          onClick={() => setIsEditQuestion(false)}
                          mb={"0"}
                          className={styles["help-center-back-btn"]}
                        >
                          Back
                        </Button>
                        <Button
                          onClick={() => setIsEditQuestion(true)}
                          mb={"0"}
                          className={styles["help-center-edit-btn"]}
                        >
                          Edit
                        </Button>
                      </Flex>
                    </Flex>
                    <ReactQuill
                      theme="snow"
                      value={text}
                      onChange={setText}
                      style={{ margin: "1.5rem 0 4rem", height: "526px" }}
                    />
                  </Box>
                  {!storedFile ? (
                    <Flex
                      onClick={handleClick}
                      className={styles["help-center-upload-container"]}
                    >
                      <Image
                        className={styles["help-container-upload-img"]}
                        src={UploadIcon}
                        width={300}
                        height={300}
                      />
                      <Box marginLeft={"1rem"}>
                        <Text className={styles["help-container-upload-title"]}>
                          Drop files her or click to upload
                        </Text>
                        <Text className={styles["help-container-upload-text"]}>
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
                      className={styles["help-center-uploaded-container"]}
                    >
                      <Flex align={"center"}>
                        <Image
                          className={styles["help-center-uploaded-img"]}
                          src={UploadedFileIcon}
                          width={300}
                          height={300}
                        />
                        <Text className={styles["help-center-uploaded-text"]}>
                          {storedFile.name}
                        </Text>
                      </Flex>
                      <Flex flexDir={"column"} align={"center"}>
                        <ArrowUpIcon />
                        <Text
                          className={
                            styles["help-center-uploaded-reupload-text"]
                          }
                        >
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
                  )}
                </>
              ) : (
                <>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      width={"100%"}
                      mb={"3rem"}
                    >
                      <Text className={styles["help-center-right-title"]}>
                        Pertanyaan Populer
                      </Text>
                      <Button
                        onClick={() => setIsEditQuestion(true)}
                        mb={"0"}
                        className={styles["help-center-edit-btn"]}
                      >
                        Edit
                      </Button>
                    </Flex>
                    <Box mb={"2rem"}>
                      <Text className={styles["help-center-right-header"]}>
                        Pertanyaan Satu
                      </Text>
                      <Text className={styles["help-center-right-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </Text>
                    </Box>
                    <Box mb={"2rem"}>
                      <Text className={styles["help-center-right-header"]}>
                        Pertanyaan Dua
                      </Text>
                      <Text className={styles["help-center-right-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </Text>
                    </Box>
                    <Box mb={"2rem"}>
                      <Text className={styles["help-center-right-header"]}>
                        Pertanyaan Tiga
                      </Text>
                      <Text className={styles["help-center-right-text"]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                      </Text>
                    </Box>
                  </Box>
                  <Flex className={styles["help-center-file-container"]}>
                    <Image
                      className={styles["help-center-pdf-icon"]}
                      src={PDFIcon}
                      width={300}
                      height={300}
                    />
                    <Box margin={"0 1.5rem 0 0.1rem"}>
                      <Text className={styles["help-center-file-title"]}>
                        Pertanyaan Populer
                      </Text>
                      <Text className={styles["help-center-file-text"]}>
                        2.4MB / 10MB
                      </Text>
                    </Box>
                    <Image
                      className={styles["help-center-cloud-icon"]}
                      src={CloudIcon}
                      width={300}
                      height={300}
                    />
                  </Flex>
                </>
              )}
            </Box>
          </Flex>
        </Box>
      </SidebarLayout>
    </>
  );
};

export default HelpCenter;
