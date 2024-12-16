"use client";
import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useDisclosure,
  Image,
  VStack
} from "@chakra-ui/react";
import styles from "../../styles/inbox.module.css";
import { useState } from "react";
import moment from "moment";
import "moment/locale/id";
import { isEmpty } from "lodash";
import { DataTalentCard, DocumentFormField, ListEmpty } from "../../components/molecules";
import useDocument from "./useDocument";
import { moveScreen } from "../../utils/helpers";
import { Gap, SelectField } from "@/app/components/atoms";
import { FileIcon } from "@/app/components/icons";
import { PreviewAmandemenPkwt, PreviewContractFreelance, PreviewContractInternship, PreviewOfferingLatter, PreviewPkwt } from "./preview";
import { useRouter } from "next/navigation";

moment.locale("id");

const SetupDocument = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [years, setYears] = useState("2024");
  const [month, setMonth] = useState("10");
  const [currentData, setCurrentData] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const { data, loading, productDigitalData, isActive, onHandlePress } = useDocument();

  const RenderContent = () => {
    switch (isActive) {
      case 'OFFERING_LATTER':
        return (
          <PreviewOfferingLatter />
        );
      case 'PKWT':
        return (
          <PreviewPkwt />
        );
      case 'AMANDEMEN_PKWT':
        return (
          <PreviewAmandemenPkwt />
        );
      case 'CONTRACT_FREELANCE':
        return (
          <PreviewContractFreelance />
        );
      case 'CONTRACT_INTERSHIP':
        return (
          <PreviewContractInternship />
        );
      default:
        return (
          <VStack>
            <Image src="/images/laptop.png" />
            <Text fontSize={16} fontWeight={400}>Pilih File terlebih dahulu untuk Preview</Text>
          </VStack>
        );
    }
  };

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Text className={styles["inbox-title"]}>Form</Text>
        <Box>
          <Button onClick={() => router.push('/setup/document/detail')} className={styles["inbox-btn"]}>
            Continue
          </Button>
        </Box>
      </Flex>
      <Flex marginTop={10} marginBottom={10}>
        <Box flex="0 0 25%">
          <SelectField label="Masukan ke" marginRight={0} disabled={true} />
          <Gap height={2} />
          <Box borderWidth={3} borderColor='#AE445A' borderRadius={10} height={628} paddingTop={8}>
            <DocumentFormField isActive={isActive} onPress={onHandlePress} />
          </Box>
        </Box>
        <Box flex="0 0 75%" marginLeft={3} borderWidth={1} borderColor='#AE445A' borderRadius={10} borderTopWidth={70} borderTopColor='#F39F5A' overflowX='auto' height={706}>
          <Gap height={2} />
          <RenderContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default SetupDocument;