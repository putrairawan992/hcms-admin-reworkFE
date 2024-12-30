"use client";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stepper,
  Text,
  useDisclosure,
  Group
} from "@chakra-ui/react";
import styles from "../../styles/inbox.module.css";
import { useState } from "react";
import "moment/locale/id";
import { isEmpty } from "lodash";
import { ListEmpty, TalentListCard } from "../../components/molecules";
import useDataTalent from "../useDataTalent";
import { moveScreen } from "../../utils/helpers";
import { Gap, SelectField } from "../../components/atoms";
import { specializationOptions, competenceOptions, educationOptions, experienceOptions } from ".././Shared/General";
import { AddIcon, Search2Icon } from "@chakra-ui/icons";
import { ShareIcon } from "../../components/icons";

const TalentListAdd = () => {
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
        return <TalentListCard data={item} onPress={onHandlePress} />
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
        <Text className={styles["inbox-title"]}>Form Kandidat</Text>
      </Flex>
      <Gap height={6} />
      <Flex>
        <Flex flex={1}>
          <Button onClick={() => moveScreen('/data-talent/history')} className={styles["inbox-btn"]} marginRight={2}>
            <AddIcon marginRight={4} />
            Add Talent
          </Button>
          <Button onClick={onOpen} className={styles["inbox-btn"]}>
            <ShareIcon color="#FFFFFF" />
          </Button>
        </Flex>
        <Box>
          <InputGroup className={styles["input-container"]}>
            <Input
              className={styles["admin-role-input"]}
              type="text"
              placeholder="Cari kandidat"
            />
            <InputRightElement>
              <Search2Icon />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <Gap height={6} />
      <Box style={{ borderWidth: 1, borderColor: '#EAEAEA' }} />
      <Gap height={6} />

      <Flex marginBottom={4}>
        <SelectField label="Pendidikan" options={educationOptions} value={filters.digital_product} slug='pendidikan' onChange={onChangeSelect} />
        <SelectField label="Pengalaman" options={experienceOptions} value={filters.document} slug='pengalaman' onChange={onChangeSelect} />
        <SelectField label="Tes Kompetensi" options={competenceOptions} value={filters.document_tracking} slug='test_kompetensi' onChange={onChangeSelect} />
        <SelectField label="Spesialisasi" options={specializationOptions} value={filters.selection_type} slug='spesialisasi' onChange={onChangeSelect} />
      </Flex>
      {loading ? <ListEmpty /> : <RenderContent />}
    </Box>
  );
};

export default TalentListAdd;