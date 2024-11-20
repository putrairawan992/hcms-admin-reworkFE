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
  Image,
} from "@chakra-ui/react";
import styles from "../../styles/remuneration.module.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import CheckIcon from "../../../../public/images/Success-Circle.png";
import { useSetupRemuneration } from "@/app/api/setup";

const Remuneration = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const { mutate } = useSetupRemuneration();
  const { setValue, handleSubmit } = useForm({
    defaultValues: {
      bulan: {
        basic_salary: 0,
        position_allowance: 0,
        bpjstk_jkk_company: 0,
        bpjstk_jkm_company: 0,
        bpjstk_jht_company: 0,
        bpjstk_jp_company: 0,
        premi_bpjskes_company: 0,
        tax_company: 0,
        bpjstk_jht_employee: 0,
        bpjstk_jp_employee: 0,
        premi_bpjskes_employee: 0,
      },
      kontrak: {
        basic_salary: 0,
        position_allowance: 0,
        bpjstk_jkk_company: 0,
        bpjstk_jkm_company: 0,
        bpjstk_jht_company: 0,
        bpjstk_jp_company: 0,
        premi_bpjskes_company: 0,
        tax_company: 0,
        bpjstk_jht_employee: 0,
        bpjstk_jp_employee: 0,
        premi_bpjskes_employee: 0,
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
    mutate(
      { dataRemun: data },
      {
        onSuccess: async (res) => {
          onOpen();
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
                          name="bulan.basic_salary"
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
                          name="bulan.position_allowance"
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
                          name="bulan.bpjstk_jkk_company"
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
                          name="bulan.bpjstk_jkm_company"
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
                          name="bulan.bpjstk_jht_company"
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
                          name="bulan.bpjstk_jp_company"
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
                          name="bulan.premi_bpjskes_company"
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
                          name="bulan.tax_company"
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
                          name="bulan.bpjstk_jht_employee"
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
                          name="bulan.bpjstk_jp_employee"
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
                          name="bulan.premi_bpjskes_employee"
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
                          name="kontrak.basic_salary"
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
                          name="kontrak.position_allowance"
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
                          name="kontrak.bpjstk_jkk_company"
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
                          name="kontrak.bpjstk_jkm_company"
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
                          name="kontrak.bpjstk_jht_company"
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
                          name="kontrak.bpjstk_jp_company"
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
                          name="kontrak.premi_bpjskes_company"
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
                          name="kontrak.tax_company"
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
                          name="kontrak.bpjstk_jht_employee"
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
                          name="kontrak.bpjstk_jp_employee"
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
                          name="kontrak.premi_bpjskes_employee"
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
