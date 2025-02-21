import { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IoIosWalk } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import styles from './SendDocumentCard.styles';
import {
  ChatIcon,
  CloseIcon,
  EyeIcon,
  FileBadgeIcon,
  MessageIcon,
} from '../../icons';
import moment from 'moment';
import { Gap, SelectField } from '../../atoms';
import { SettingsIcon } from '@chakra-ui/icons';
import { noop } from '@/app/utils/helpers';

const SendDocumentCard = ({
  data = {},
  toggleModal = noop,
  onPressIcon = noop,
  onClickSendAll = noop,
}) => {
  const router = useRouter();
  const {
    product_digital_name,
    status,
    created_at,
    employee_list,
    document_type,
    type_setting_document,
    remuneration_id,
  } = data;
  const [documentTalent, setDocumentTalent] = useState('');
  const [employeeList, setEmployeeList] = useState(employee_list || []);
  const [selectedDocument, setSelectedDocument] = useState('');

  const documentAll =
    document_type?.map((item) => ({
      id: item?.id,
      label: item?.type_document,
    })) || [];

  const onHandleToggleModal = () => {
    toggleModal(data);
  };

  const onHandleChange = (value, index) => {
    setSelectedDocument(value);
    const updatedList = [...employee_list];
    updatedList[index] = {
      ...updatedList[index],
      temporary_type_document: value,
      // temporary_status: value === '' ? false : true,
    };

    setEmployeeList(updatedList);
    setDocumentTalent(value);
  };

  const onHandleClickIcon = (type, screenData) => {
    if (type === 'tracking') {
      router.push(`/data-talent/tracking-document/${screenData?.user_id}`);
    }
    if (screenData?.temporary_status) return;

    const dataFormated = {
      ...data,
      employee: screenData,
    };
    onPressIcon(dataFormated, type, documentTalent);
  };

  const onHandleClickSend = () => {
    onClickSendAll(remuneration_id);
  };

  const onHandleMessage = () => {};

  const handleStatus = (status) => {
    if (!status || status === null) return;
    return status
      .split('_')
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const onHandleDetail = () => {
    router.push(`/approval/remuneration/${data?.remuneration_id}`);
  };

  return (
    <Accordion allowToggle>
      <AccordionItem border="none" key={1}>
        <AccordionButton background={'#8364BA'} style={styles.wrapper}>
          <Flex alignItems="center" flex={1} justify="center">
            <Box style={styles.imgWrapper}>
              <Image
                style={styles.img}
                src="/images/company-dummy.jpeg"
                alt="image"
              />
            </Box>
            <Gap width={6} />
            <Box flex={1}>
              <Text style={styles.title}>{product_digital_name}</Text>
            </Box>
          </Flex>
          <Flex flex={1} justify="center" alignItems="center">
            <Text style={styles.subtitle}>
              {moment(created_at).locale('en').format('MMMM YYYY')}
            </Text>
          </Flex>
          <Flex flex={1} justify="center" alignItems="center">
            <EyeIcon
              color="#ae445a"
              onClick={onHandleDetail}
              style={{ cursor: 'pointer' }}
            />
            <Gap width={4} />
            <SettingsIcon
              color="#ae445a"
              onClick={onHandleToggleModal}
              cursor="pointer"
            />
          </Flex>
          <Box flex={1}>
            <Flex flex={1}>
              <Box
                borderWidth={1}
                borderColor="#AE445A"
                paddingX={6}
                paddingY={2}
                borderRadius={10}>
                <Text style={styles.subtitle}>{handleStatus(status)}</Text>
              </Box>
            </Flex>
          </Box>
          <Flex alignItems="center" justifyContent="center" flex={1}>
            <ChatIcon style={{ width: 20, height: 20, cursor: 'pointer' }} />
          </Flex>
          <Flex align={'center'}>
            <Button style={styles.buttonSend} onClick={onHandleClickSend}>
              Send All
            </Button>
          </Flex>
        </AccordionButton>
        <AccordionPanel
          borderWidth={2}
          borderRadius={10}
          borderColor="#AE445A"
          marginBottom={4}
          backgroundColor="#FFFFFF">
          <Box>
            <Flex
              flex={1}
              borderBottomWidth={3}
              borderColor="#AE445A"
              alignItems="center"
              justifyContent="center"
              paddingY={4}>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Profil
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Dokumen
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Tombol Aksi
                </Text>
              </VStack>
              <VStack flex={1}>
                <Text fontWeight="bold" color="#AE445A">
                  Status
                </Text>
              </VStack>
            </Flex>
            <Gap height={30} />
            {employeeList.map((item, index) => (
              <Flex flex={1} marginBottom={6} key={index}>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Box style={styles.imgWrapper}>
                    <Image style={styles.img} src={item?.photo} alt="image" />
                  </Box>
                  <Gap width={3} />
                  <Box flex={1} alignItems="center" justifyContent="center">
                    <Text
                      fontSize={12}
                      fontWeight={700}
                      textDecoration="underline">
                      {item?.employee_name}
                    </Text>
                    <Text fontSize={12} fontWeight={400}>
                      {item?.employee_type}
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems="center" justifyContent="center" flex={1}>
                  <Box style={{ width: '200px' }}>
                    <SelectField
                      placeholder="Pilih document"
                      options={documentAll}
                      disabled={item?.temporary_status !== null}
                      value={item?.temporary_type_document}
                      onChange={(slug, value) => onHandleChange(value, index)}
                      slug="document_type_employee"
                      key={index}
                    />
                  </Box>
                </Flex>
                <Flex
                  flex={1}
                  alignItems="center"
                  justifyContent="space-around"
                  marginLeft={4}>
                  <FileBadgeIcon
                    color={
                      item?.temporary_status !== null ? '#B6B6B6' : '#AE445A'
                    }
                    onClick={() => onHandleClickIcon('file', item)}
                    style={{
                      cursor:
                        item?.temporary_status !== null
                          ? 'not-allowed'
                          : 'pointer',
                    }}
                  />
                  <IoIosWalk
                    color={'#AE445A'}
                    size={22}
                    onClick={() => onHandleClickIcon('tracking', item)}
                  />
                  <MessageIcon
                    color={
                      item?.temporary_status !== null ? '#B6B6B6' : '#AE445A'
                    }
                    onClick={() => onHandleClickIcon('message', item)}
                    style={{
                      cursor:
                        item?.temporary_status !== null
                          ? 'not-allowed'
                          : 'pointer',
                    }}
                  />
                  <CloseIcon
                    color={
                      item?.temporary_status !== null ? '#B6B6B6' : '#AE445A'
                    }
                    onClick={() => onHandleClickIcon('close', item)}
                    style={{
                      cursor:
                        item?.temporary_status !== null
                          ? 'not-allowed'
                          : 'pointer',
                    }}
                  />
                </Flex>
                <Flex flex={1} alignItems="center" justifyContent="center">
                  <Text fontWeight="bold" color="#AE445A">
                    {item?.temporary_status
                      ? handleStatus(item?.temporary_status)
                      : ''}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SendDocumentCard;
