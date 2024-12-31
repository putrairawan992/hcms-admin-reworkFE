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
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../styles/inbox.module.css";
import styleModal from "../styles/setupJobPost.module.css";
import { useState } from "react";
import { isEmpty } from "lodash";
import { ListEmpty, PayslipCard } from "../components/molecules";
import usePayslip from "./usePayslip";
import { Gap, SelectField } from "../components/atoms";
import { monthLabelOptions } from "@/shared/general";

const Payslip = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState("2024");

  const { data, form, loading, loadingSubmit, modalOpen, productDigitalData, toggleModal, onChangeSelect, submitData } = usePayslip();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <PayslipCard data={item} />
      });
    } else {
      return (
        <Flex align={"center"} justify={"center"}>
          <Text>Tidak ada data inbox</Text>
        </Flex>
      )
    }
  };

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Text className={styles["inbox-title"]}>PaySlip</Text>
        <Box>
          <Button onClick={toggleModal} className={styles["inbox-btn"]} marginRight={2}>
            Manual Send
          </Button>
          <Button onClick={onOpen} className={styles["inbox-btn"]}>
            Download All Filtered
          </Button>
        </Box>
      </Flex>
      <Gap height={6} />
      <Flex>
        <Flex borderWidth={1} borderColor='#AE445A' borderRadius={6} paddingX={4} paddingY={1}>
          <Text marginRight={3} fontWeight='bold'>Total Karyawan: </Text>
          <Text marginRight={3} color='#AE445A' fontWeight='bold'>3811</Text>
          <Text fontWeight='bold'>Orang</Text>
        </Flex>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box marginRight={2} flex={1}>
          <Text className={styles["inbox-filter-text"]}>Digital Product</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles["inbox-filter-select"]}>
            <option value="all" selected>Semua</option>
            {productDigitalData?.map((item, index) => (
              <option key={index} value={item.product_digital_name}>
                {item.product_digital_name}
              </option>
            ))}
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles["inbox-filter-text"]}>Tahun</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles["inbox-filter-select"]}>
            <option value="all" selected>Semua</option>
            <option value="offering_letter_normal">Offering Letter Normal</option>
            <option value="pkwt">PKWT</option>
            <option value="offering_letter_khusus">Offering Letter Khusus</option>
            <option value="amandemen_pkwt">Amandemen PKWT</option>
            <option value="contract_freelance">Kontrak Freelance</option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles["inbox-filter-text"]}>Bulan</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles["inbox-filter-select"]}>
            <option value="all" selected>Semua</option>
            <option value="sent">Sent</option>
            <option value="employee_signed">Employee Signed</option>
            <option value="full_signed">Full Signed</option>
          </Select>
        </Box>
        <Box marginRight={2} flex={1}>
          <Text className={styles["inbox-filter-text"]}>Nama Karyawan</Text>
          <Select
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className={styles["inbox-filter-select"]}>
            <option value="all" selected>Semua</option>
            <option value="non_selection">Non Selection</option>
            <option value="selection">Selection</option>
          </Select>
        </Box>
      </Flex>

      {loading ? <ListEmpty /> : <RenderContent />}

      <Modal isOpen={modalOpen} onClose={toggleModal} size={"md"} isCentered>
        <ModalOverlay />
        <ModalContent paddingY={"1.5rem"} borderRadius={20}>
          <ModalBody>
            <Text mb={"2rem"} className={styleModal["job-post-title"]}>
              Manual Send
            </Text>
            <Box>
              <Box>
                <SelectField label="Product Digital" options={productDigitalData} slug="product_digital_id" value={form.product_digital_id} onChange={onChangeSelect} />
                <Gap height={6} />
                <SelectField label="Bulan" options={monthLabelOptions} slug="month" value={form.month} onChange={onChangeSelect} />
              </Box>
            </Box>
            <Flex align={"center"} justify={"end"} mt={"2.5rem"}>
              <Button
                onClick={toggleModal}
                mr={"0"}
                className={styleModal["job-post-search-btn-cancel"]}>
                Batal
              </Button>
              <Gap width={4} />
              <Button
                onClick={() => submitData()}
                mr={"0"}
                className={styleModal["job-post-search-btn"]}>
                {loadingSubmit ? <Spinner size="sm" color="#FFFFFF" /> : 'Submit'}
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Payslip;
