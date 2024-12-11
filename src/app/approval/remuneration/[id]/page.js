"use client";
import SidebarLayout from "@/app/components/sidebarLayout";
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import styles from "../../../styles/approvalRemuneration.module.css";
import DummyImage from "../../../../../public/images/dummy-image.png";
import { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import dynamic from "next/dynamic";
import { useGetApprovalRemunerationDetail } from "@/app/api/approval";
import useApprovalRemuneration from "../useApprovalRemuneration";
import useRemunerationDetail from "./useRemunerationDetail";

moment.locale("id");

const ApprovalRemunerationDetails = ({ params }) => {
  const id = params.id;
  const { data } = useRemunerationDetail();

  const ConfirmationModalWithNoSSR = dynamic(
    () => import("../../../components/cancelApprovalConfirmationModal"),
    { ssr: false }
  );
  const NoteModalWithNoSSR = dynamic(
    () => import("../../../components/noteModal"),
    { ssr: false }
  );
  const { isPending } = useGetApprovalRemunerationDetail({
    id,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenNote,
    onOpen: onOpenNote,
    onClose: onCloseNote,
  } = useDisclosure();
  const [text, setText] = useState("");
  const [isApprove, setIsApprove] = useState(false);

  const openNoteModalHandler = (text, approve) => {
    setText(text);
    setIsApprove(approve);
    onOpenNote();
  };

  return (
    <>
      <ConfirmationModalWithNoSSR
        modalText={text}
        isOpen={isOpen}
        onClose={onClose}
      />
      <NoteModalWithNoSSR
        modalText={text}
        isOpen={isOpenNote}
        onClose={onCloseNote}
        id={id}
        isApprove={isApprove}
      />
      {!isPending && (
        <Box className={styles["approval-remuneration-container"]}>
          <Flex className={styles["approval-remuneration-details-header"]}>
            <Text className={styles["approval-remuneration-title"]}>
              Approval Remuneration - Detail
            </Text>
            <Flex
              className={
                styles["approval-remuneration-details-subtitle-wrapper"]
              }
            >
              <Button
                onClick={() =>
                  openNoteModalHandler(
                    "Anda menolak Pengajuan Remunerasi Digital Produk A. Berikan umpan balik pada  Pengajuan Remunerasi Digital Produk A (*wajib)",
                    false
                  )
                }
                className={styles["approval-remuneration-content-btn"]}
              >
                Reject
              </Button>
              <Button
                onClick={() =>
                  openNoteModalHandler(
                    "Anda menyetujui Pengajuan Remunerasi Digital Produk A. Berikan umpan balik/catatan pada  Pengajuan Remunerasi Digital Produk A (*opsional)",
                    true
                  )
                }
                className={styles["approval-remuneration-content-btn"]}
              >
                Accept
              </Button>
            </Flex>
          </Flex>
          <Grid
            className={
              styles["approval-remuneration-detail-header-container"]
            }
          >
            <Box>
              <Text className={styles["approval-remuneration-filter-text"]}>
                Tahun
              </Text>
              <Box
                className={
                  styles["approval-remuneration-details-header-wrapper"]
                }
              >
                <Text
                  className={
                    styles["approval-remuneration-detail-header-text"]
                  }
                >
                  2023
                </Text>
              </Box>
            </Box>
            <Box>
              <Text className={styles["approval-remuneration-filter-text"]}>
                Bulan
              </Text>
              <Box
                className={
                  styles["approval-remuneration-details-header-wrapper"]
                }
              >
                <Text
                  className={
                    styles["approval-remuneration-detail-header-text"]
                  }
                >
                  Agustus
                </Text>
              </Box>
            </Box>
            <Box>
              <Box
                className={
                  styles["approval-remuneration-details-header-wrapper"]
                }
              >
                <Text
                  className={
                    styles["approval-remuneration-detail-header-text"]
                  }
                >
                  Total Karyawan: {data?.total_employee} Orang
                </Text>
              </Box>
            </Box>
            <Box>
              <Flex
                className={
                  styles["approval-remuneration-details-subtitle-wrapper"]
                }
              >
                <Button
                  className={
                    styles["approval-remuneration-details-header-btn"]
                  }
                >
                  Attached
                </Button>
              </Flex>
            </Box>
          </Grid>
          <Box className={styles["approval-remuneration-wrapper"]}>
            {data?.list_remuneration?.map((item, index) => (
              <Flex
                key={index}
                className={styles["approval-remuneration-card"]}
              >
                <Flex className={styles["approval-remuneration-card-inner"]}>
                  <Box
                    className={styles["approval-remuneration-image-wrapper"]}
                  >
                    <Image
                      className={styles["approval-remuneration-image"]}
                      src={item.employee_photo || DummyImage}
                      alt={item.employee_name}
                    />
                  </Box>
                  <Box
                    className={
                      styles["approval-remuneration-content-wrapper"]
                    }
                  >
                    <Text>{item.employee_name}</Text>
                  </Box>
                  <Box
                    className={
                      styles["approval-remuneration-content-details-wrapper"]
                    }
                  >
                    <Box
                      className={
                        styles[
                        "approval-remuneration-content-details-wrapper-header"
                        ]
                      }
                    >
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-header-inner"
                          ]
                        }
                      >
                        <Text>Tipe Karyawan</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-header-inner"
                          ]
                        }
                      >
                        <Text>Take Home Pay</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-header-inner"
                          ]
                        }
                      >
                        <Text>Tanggal Masuk</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-header-inner"
                          ]
                        }
                      >
                        <Text>Tanggal Akhir</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-header-inner"
                          ]
                        }
                      >
                        <Text>Jenis Request</Text>
                      </Flex>
                    </Box>
                    <Box
                      className={
                        styles[
                        "approval-remuneration-content-details-wrapper-inner"
                        ]
                      }
                    >
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-inner"
                          ]
                        }
                      >
                        <Text>{item.type_karyawan}</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-inner"
                          ]
                        }
                      >
                        <Text>{item.take_home_pay}</Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-inner"
                          ]
                        }
                      >
                        <Text>
                          {moment(item.start_date)
                            .utcOffset("+07:00")
                            .format("DD MMMM YYYY")}
                        </Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-inner"
                          ]
                        }
                      >
                        <Text>
                          {moment(item.end_date)
                            .utcOffset("+07:00")
                            .format("DD MMMM YYYY")}
                        </Text>
                      </Flex>
                      <Flex
                        className={
                          styles[
                          "approval-remuneration-content-details-inner"
                          ]
                        }
                      >
                        <Text>{item.request_type}</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Box>
          <Box className={styles["approval-remuneration-details-footer"]}>
            <Box>
              <Text
                className={
                  styles["approval-remuneration-details-footer-text"]
                }
              >
                Total Pengeluaran Budget:{" "}
              </Text>
              <Flex gap={"5px"}>
                <Flex className={styles["approval-remuneration-card"]}>
                  <Flex
                    className={styles["approval-remuneration-card-inner"]}
                  >
                    <Text
                      className={
                        styles[
                        "approval-remuneration-details-footer-inner-text"
                        ]
                      }
                    >
                      Bulan Ini: Rp. {data?.budget_this_month}
                    </Text>
                  </Flex>
                </Flex>
                <Flex className={styles["approval-remuneration-card"]}>
                  <Flex
                    className={styles["approval-remuneration-card-inner"]}
                  >
                    <Text
                      className={
                        styles[
                        "approval-remuneration-details-footer-inner-text"
                        ]
                      }
                    >
                      Sisa Kontrak: Rp. {data?.budget_count_contract}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Text
                className={
                  styles["approval-remuneration-details-footer-text"]
                }
              >
                Total Pengeluaran Budget:
              </Text>
              <Flex gap={"5px"}>
                <Flex className={styles["approval-remuneration-card"]}>
                  <Flex
                    className={styles["approval-remuneration-card-inner"]}
                  >
                    <Image src="/images/Office-Logos.png" />
                    <Text
                      className={
                        styles["approval-remuneration-details-footer-text"]
                      }
                      marginBottom={"0px"}
                    >
                      Juni 2023
                    </Text>
                    <Text fontSize={"12px"}>11 Juni 2023</Text>
                    <Button
                      className={styles["approval-remuneration-content-btn"]}
                    >
                      Download
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ApprovalRemunerationDetails;
