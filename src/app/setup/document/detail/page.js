"use client";
import {
  Box,
  Flex,
  Text
} from "@chakra-ui/react";
import styles from "../../../styles/inbox.module.css";
import moment from "moment";
import "moment/locale/id";
import useSetupDocumentDetail from "./useSetupDocumentDetail";
import { SelectField } from "@/app/components/atoms";
import { FormFieldsAmandementPKWT, FormFieldsContractFreelance, FormFieldsContractInternship, FormFieldsOfferingLatterKhusus, FormFieldsOfferingLatterNormal, FormFieldsContractDays, FormFieldsPKWT } from "./FormFields";

moment.locale("id");

const SetupDocumentDetails = () => {
  const { data, loading, form, productDigital, typeOptions, onChangeSelect, onHandlePress } = useSetupDocumentDetail();

  const RenderData = () => {
    switch (form.type_document) {
      case 'Amandemen PKWT Khusus & Normal':
        return <FormFieldsAmandementPKWT onClick={onHandlePress} loading={loading} />
      case 'Kontrak Freelance':
        return <FormFieldsContractFreelance onClick={onHandlePress} loading={loading} />
      case 'Kontrak Internship':
        return <FormFieldsContractInternship onClick={onHandlePress} loading={loading} />
      case 'Offering Latter Khusus':
        return <FormFieldsOfferingLatterKhusus onClick={onHandlePress} loading={loading} />
      case 'Offering Latter Normal':
        return <FormFieldsOfferingLatterNormal onClick={onHandlePress} loading={loading} />
      case 'PKWT Khusus & Normal':
        return <FormFieldsPKWT onClick={onHandlePress} loading={loading} />
      case 'Kontrak Perjanjian Pekerja Harian Lepas':
        return <FormFieldsContractDays onClick={onHandlePress} loading={loading} data={data} />
      default:
        break;
    }
  };

  return (
    <Box className={styles["inbox-container"]}>
      <Flex align={"center"} justify={"space-between"}>
        <Text className={styles["inbox-title"]}>Setup Document</Text>
      </Flex>
      <Flex marginBottom={4} marginTop={10}>
        <Box marginRight={2} paddingX={2} paddingY={2} flex={1}>

          <Flex flex={1} alignItems='center' marginBottom={2}>
            <Box flex={0.5}>
              <Text fontSize={14} fontWeight='bold' color='#404041'>Atur Untuk Digital Product:</Text>
            </Box>
            <Flex flex={1}>
              <SelectField options={productDigital} value={form.job_provider_id} slug="job_provider_id" onChange={onChangeSelect} withOptionDefault={false} />
              <SelectField options={typeOptions} value={form.type_document} slug="type_document" onChange={onChangeSelect} withOptionDefault={false} />
            </Flex>
          </Flex>
          <RenderData />
        </Box>
      </Flex>
    </Box>
  );
};

export default SetupDocumentDetails;
