'use client';
import { Box, Button, Flex, Text, Image, VStack } from '@chakra-ui/react';
import styles from '../../styles/inbox.module.css';
import { DocumentFormField } from '../../components/molecules';
import useDocument from './useDocument';
import { Gap, SelectField } from '@/app/components/atoms';
import {
  PreviewAmandemenPkwt,
  PreviewContractFreelance,
  PreviewContractInternship,
  PreviewOfferingLatter,
  PreviewPkwt,
} from './preview';

const SetupDocument = () => {
  const {
    form,
    productDigitalData,
    onHandlePress,
    onHandleSubmit,
    onHandleChange,
  } = useDocument();

  const RenderContent = () => {
    switch (form.documentType) {
      case 'OFFERING_LATTER':
        return <PreviewOfferingLatter />;
      case 'PKWT':
        return <PreviewPkwt />;
      case 'AMANDEMEN_PKWT':
        return <PreviewAmandemenPkwt />;
      case 'CONTRACT_FREELANCE':
        return <PreviewContractFreelance />;
      case 'CONTRACT_INTERSHIP':
        return <PreviewContractInternship />;
      default:
        return (
          <VStack height="100%" alignItems="center" justifyContent="center">
            <Image src="/images/laptop.png" />
            <Text fontSize={16} fontWeight={400}>
              Pilih File terlebih dahulu untuk Preview
            </Text>
          </VStack>
        );
    }
  };

  return (
    <Box className={styles['inbox-container']}>
      <Flex align={'center'} justify={'space-between'}>
        <Text className={styles['inbox-title']}>Form</Text>
        <Box>
          <Button
            onClick={() => onHandleSubmit()}
            className={styles['inbox-btn']}
            disabled={true}>
            Continue
          </Button>
        </Box>
      </Flex>
      <Flex marginTop={10} marginBottom={10}>
        <Box flex="0 0 25%">
          <SelectField
            label="Masukan ke"
            marginRight={0}
            options={productDigitalData}
            onChange={onHandleChange}
            value={form.productDigital}
            slug="productDigital"
          />
          <Gap height={2} />
          <Box
            borderWidth={3}
            borderColor="#AE445A"
            borderRadius={10}
            height={628}
            paddingTop={8}>
            <DocumentFormField
              isActive={form.documentType}
              onPress={onHandlePress}
            />
          </Box>
        </Box>
        <Box
          flex="0 0 75%"
          marginLeft={3}
          borderWidth={1}
          borderColor="#AE445A"
          borderRadius={10}
          borderTopWidth={70}
          borderTopColor="#F39F5A"
          overflowX="auto"
          height={706}>
          <Gap height={2} />
          <RenderContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default SetupDocument;
