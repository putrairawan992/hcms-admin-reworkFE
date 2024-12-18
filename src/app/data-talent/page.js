"use client";
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../styles/inbox.module.css";
import { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { isEmpty } from "lodash";
import { DataTalentCard, ListEmpty } from "../components/molecules";
import useDataTalent from "./useDataTalent";
import { moveScreen } from "../utils/helpers";
import { SelectField } from "../components/atoms";
import { documentTrackingOptions, employeeTypeOptions, selectionTypeOptions, statusDocumentOptions } from "./Shared/General";

moment.locale("id");

const DataTalent = () => {
  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
  ];
  const monthOptions = [
    { value: "1", label: "Januari" },
    { value: "2", label: "Februari" },
    { value: "3", label: "Maret" },
    { value: "4", label: "April" },
    { value: "5", label: "Mei" },
    { value: "6", label: "Juni" },
    { value: "7", label: "Juli" },
    { value: "8", label: "Agustus" },
    { value: "9", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState("2024");
  const [month, setMonth] = useState("10");
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data, filters, loading, productDigitalData, onHandlePress, onChangeSelect } = useDataTalent();

  const RenderContent = () => {
    if (!isEmpty(data)) {
      return data.map((item) => {
        return <DataTalentCard data={item} onPress={onHandlePress} />
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
        <Text className={styles["inbox-title"]}>Data Talent</Text>
        <Box>
          <Button onClick={() => moveScreen('/data-talent/history')} className={styles["inbox-btn"]} marginRight={2}>
            History
          </Button>
          <Button onClick={onOpen} className={styles["inbox-btn"]}>
            Download All
          </Button>
        </Box>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <SelectField label="Digital Product" options={productDigitalData} value={filters.digital_product} slug='digital_product' onChange={onChangeSelect} />
        <SelectField label="Berkas" options={documentTrackingOptions} value={filters.document} slug='document_tracking' onChange={onChangeSelect} />
        <SelectField label="Status Berkas" options={statusDocumentOptions} value={filters.document_tracking} slug='document_tracking' onChange={onChangeSelect} />
        <SelectField label="Jalur" options={selectionTypeOptions} value={filters.selection_type} slug='selection_type' onChange={onChangeSelect} />
        <SelectField label="Tipe Karyawan" options={employeeTypeOptions} value={filters.employee_type} slug='employee_type' onChange={onChangeSelect} />
      </Flex>
      {loading ? <ListEmpty /> : <RenderContent />}
    </Box>
  );
};

export default DataTalent;