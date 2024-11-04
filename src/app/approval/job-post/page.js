"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import { Box, Flex, Select, Text, useDisclosure } from "@chakra-ui/react";
import styles from "../../styles/approvalJobPost.module.css";
import DummyImage from "../../../../public/images/dummy-image.png";
import Image from "next/image";
import { ApproveIcon, RejectIcon, ShareIcon } from "@/app/components/icons";
import ConfirmationModal from "@/app/components/confirmationModal";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ApprovalJobPost = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState("");

  const openConfirmationModalHandler = (str) => {
    setText(str);
    onOpen();
  };

  const openJobPostDetails = () => {
    router.push("/approval/job-post/details");
  };

  return (
    <>
      <ConfirmationModal modalText={text} isOpen={isOpen} onClose={onClose} />
      <SidebarLayout>
        <Box className={styles["job-post-container"]}>
          <Flex className={styles["job-post-header"]}>
            <Text className={styles["job-post-title"]}>Approval Job Post</Text>
            <Flex className={styles["job-post-header-wrapper"]}>
              <Text className={styles["job-post-header-text"]}>
                Perlu Ditinjau:
              </Text>
              <Text className={styles["job-post-header-text"]}>5</Text>
              <Text className={styles["job-post-header-text"]}>Submit</Text>
            </Flex>
          </Flex>
          <Flex className={styles["job-post-filter-container"]}>
            <Box>
              <Text className={styles["job-post-filter-text"]}>Tahun</Text>
              <Select className={styles["job-post-filter-select"]}>
                <option value="" selected disabled hidden>
                  Tahun
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles["job-post-filter-text"]}>Bulan</Text>
              <Select className={styles["job-post-filter-select"]}>
                <option value="" selected disabled hidden>
                  Pilih Bulan
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles["job-post-filter-text"]}>
                Digital Product
              </Text>
              <Select className={styles["job-post-filter-select"]}>
                <option value="" selected disabled hidden>
                  Pilih Digital Product
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
            <Box>
              <Text className={styles["job-post-filter-text"]}>Status</Text>
              <Select className={styles["job-post-filter-select"]}>
                <option value="" selected disabled hidden>
                  Pilih Status
                </option>
                <option>Value 1</option>
              </Select>
            </Box>
          </Flex>
          <Box className={styles["job-post-wrapper"]}>
            <Flex
              onClick={openJobPostDetails}
              className={styles["job-post-card"]}
            >
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      onClick={() =>
                        openConfirmationModalHandler(
                          "Anda akan menolak pengajuan. Anda yakin ingin menolak?"
                        )
                      }
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      onClick={() =>
                        openConfirmationModalHandler(
                          "Anda akan menyetujui pengajuan. Anda yakin ingin menyetujui?"
                        )
                      }
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex className={styles["job-post-card"]}>
              <Flex className={styles["job-post-card-inner"]}>
                <Box className={styles["job-post-image-wrapper"]}>
                  <Image
                    className={styles["job-post-image"]}
                    src={DummyImage}
                    width={100}
                    height={100}
                  />
                </Box>
                <Box className={styles["job-post-content-wrapper"]}>
                  <Flex className={styles["job-post-time-status-wrapper"]}>
                    <Text className={styles["job-post-time"]}>
                      2 Mei 2023 | 09:00 WIB
                    </Text>
                    <Box className={styles["job-post-status"]}>Approval</Box>
                  </Flex>
                  <Box>
                    <Text className={styles["job-post-role"]}>
                      Marketing Staff
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      PT. Gema Insani Group
                    </Text>
                    <Text className={styles["job-post-rest"]}>
                      IDR 5.000.000 - 6.500.000
                    </Text>
                    <Text className={styles["job-post-rest"]}>3 Orang</Text>
                  </Box>
                  <Flex className={styles["job-post-button"]}>
                    <ShareIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                    <RejectIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
                    <ApproveIcon
                      style={{
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                      }}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </SidebarLayout>
    </>
  );
};

export default ApprovalJobPost;
