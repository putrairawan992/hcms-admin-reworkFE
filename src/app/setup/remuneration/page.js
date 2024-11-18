"use client";

import SidebarLayout from "@/app/components/sidebarLayout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import styles from "../../styles/remuneration.module.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import Image from "next/image";
import CheckIcon from "../../../../public/images/Success-Circle.png";

const Remuneration = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      renumerasi_per_bulan: {
        penambah_gaji: {
          basic_salary: 0,
          tunjangan_posisi: 0,
          bpjstk_iuran_jkk: 0,
          bpjstk_iuran_jkm: 0,
          bpjstk_iuran_jht: 0,
          bpjstk_iuran_jp: 0,
          premi_bpjskes: 0,
          pajak: 0,
        },
        pengurang_gaji: {
          bpjstk_iuran_jht: 0,
          bpjstk_iuran_jp: 0,
          premi_bpjskes: 0,
        },
      },
      renumerasi_sisa_kontrak: {
        penambah_gaji: {
          basic_salary: 0,
          tunjangan_posisi: 0,
          bpjstk_iuran_jkk: 0,
          bpjstk_iuran_jkm: 0,
          bpjstk_iuran_jht: 0,
          bpjstk_iuran_jp: 0,
          premi_bpjskes: 0,
          pajak: 0,
        },
        pengurang_gaji: {
          bpjstk_iuran_jht: 0,
          bpjstk_iuran_jp: 0,
          premi_bpjskes: 0,
        },
      },
    },
  });

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (
      isNaN(value) ||
      value < 0 ||
      value > 100 ||
      /^0{2,}/.test(e.target.value)
    ) {
      e.target.value = e.target.value.slice(0, -1);
    } else {
      setValue(e.target.name, value);
    }
  };

  const onSubmit = (data) => {
    onOpen();
  };

  return (
    <>
      <SidebarLayout>
        <Box className={styles["remuneration-container"]}>
          <Text className={styles["remuneration-title"]} mb={"1rem"}>
            Setup - Remuneration
          </Text>
          <Text className={styles["remuneration-subtitle"]} mb={"1rem"}>
            Skema Normal & Khusus
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="1fr auto 1fr;" gap="70px" mb={"2rem"}>
              <GridItem>
                <Text className={styles["remuneration-subtitle"]}>
                  Remunerasi Per Bulan
                </Text>
              </GridItem>
              <GridItem>
                <span></span>
              </GridItem>
              <GridItem>
                <Text className={styles["remuneration-subtitle"]}>
                  Remunerasi Sisa kontrak
                </Text>
              </GridItem>
            </Grid>
            <Grid templateColumns="1fr auto 1fr;" gap="70px">
              <GridItem>
                <Flex
                  direction={"column"}
                  gap={"12px"}
                  wrap="nowrap"
                  mb={"2rem"}
                >
                  <Text
                    className={styles["remuneration-form-title"]}
                    mb={"1rem"}
                  >
                    Penambah Gaji
                  </Text>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Basic Salary:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.basic_salary"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Tunjangan Posisi:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.tunjangan_posisi"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JKK:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.bpjstk_iuran_jkk"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JKM:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.bpjstk_iuran_jkm"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JHT:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.bpjstk_iuran_jht"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JP:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.bpjstk_iuran_jp"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Premi BPJSKES:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.premi_bpjskes"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Pajak:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.penambah_gaji.pajak"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  direction={"column"}
                  gap={"12px"}
                  wrap="nowrap"
                  mb={"1rem"}
                >
                  <Text
                    className={styles["remuneration-form-title-2"]}
                    mb={"1rem"}
                  >
                    Pengurang Gaji
                  </Text>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JHT:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.pengurang_gaji.bpjstk_iuran_jht"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JP:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.pengurang_gaji.bpjstk_iuran_jp"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Premi BPJSKES:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_per_bulan.pengurang_gaji.premi_bpjskes"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                </Flex>
              </GridItem>
              <GridItem>
                <Divider
                  size="lg"
                  borderWidth="2px"
                  borderColor="#AE445A"
                  opacity="1"
                  orientation="vertical"
                />
              </GridItem>
              <GridItem>
                <Flex
                  direction={"column"}
                  gap={"12px"}
                  wrap="nowrap"
                  mb={"2rem"}
                >
                  <Text
                    className={styles["remuneration-form-title"]}
                    mb={"1rem"}
                  >
                    Penambah Gaji
                  </Text>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Basic Salary:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.basic_salary"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Tunjangan Posisi:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.tunjangan_posisi"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JKK:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.bpjstk_iuran_jkk"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JKM:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.bpjstk_iuran_jkm"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JHT:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.bpjstk_iuran_jht"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JP:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.bpjstk_iuran_jp"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Premi BPJSKES:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.premi_bpjskes"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Pajak:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.penambah_gaji.pajak"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                </Flex>
                <Flex
                  direction={"column"}
                  gap={"12px"}
                  wrap="nowrap"
                  mb={"1rem"}
                >
                  <Text
                    className={styles["remuneration-form-title-2"]}
                    mb={"1rem"}
                  >
                    Pengurang Gaji
                  </Text>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JHT:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.pengurang_gaji.bpjstk_iuran_jht"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        BPJSTK Iuran JP:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.pengurang_gaji.bpjstk_iuran_jp"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex
                      align={"center"}
                      justify={"space-between"}
                      wrap="nowrap"
                    >
                      <Text className={styles["remuneration-search-text"]}>
                        Premi BPJSKES:
                      </Text>
                      <InputGroup
                        className={styles["remuneration-input-container"]}
                      >
                        <NumberInput
                          name="renumerasi_sisa_kontrak.pengurang_gaji.premi_bpjskes"
                          min={0}
                          max={100}
                          step="any"
                          onChangeCapture={handleInputChange}
                        >
                          <NumberInputField
                            className={styles["remuneration-input"]}
                            placeholder="0"
                          />
                        </NumberInput>
                        <InputRightElement
                          className={styles["remuneration-input-suffix"]}
                        >
                          %
                        </InputRightElement>
                      </InputGroup>
                    </Flex>
                  </Box>
                </Flex>
              </GridItem>
            </Grid>
            <Flex width={"100%"} justify={"end"} marginTop={"2rem"}>
              <Button type="submit" className={styles["remuneration-btn"]}>
                Save
              </Button>
            </Flex>
          </form>
        </Box>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogBody className={styles["remuneration-success"]}>
                <Flex
                  direction={"column"}
                  align={"center"}
                  justify={"center"}
                  gap={"24px"}
                >
                  <Image src={CheckIcon} />
                  <Text>Data berhasil disimpan</Text>
                </Flex>
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </SidebarLayout>
    </>
  );
};

export default Remuneration;
