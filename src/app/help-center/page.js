'use client';
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useDisclosure,
  useToast,
  Image,
} from '@chakra-ui/react';
import styles from '../styles/helpCenter.module.css';
import { useEffect, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { ArrowUpIcon } from '../components/icons';
import { useEditHelpCenter, useGetHelpCenter } from '../api/help-center';
import { useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const HelpCenter = () => {
  const ChangeContactModalWithNoSSR = dynamic(
    () => import('../components/changeContactModal'),
    { ssr: false }
  );
  const toast = useToast();
  const { mutate } = useEditHelpCenter();
  const { data, isPending } = useGetHelpCenter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditQuestion, setIsEditQuestion] = useState(false);
  const [storedFile, setStoredFile] = useState();
  const [reload, setReload] = useState(false);
  const fileInputRef = useRef(null);
  const { setValue, watch, handleSubmit } = useForm({
    defaultValues: {
      file: '',
      content: '',
      category: '',
      id: '',
    },
  });

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue('file', file);
      setStoredFile(file);
    }
  };

  useEffect(() => {
    if (reload) {
      window.location.reload();
    }
  }, [reload]);

  useEffect(() => {
    if (!isPending) {
      setValue('file', data[0]?.file);
      setValue('content', data[0]?.content);
      setValue('category', data[0]?.category);
      setValue('id', data[0]?.id);
    }
  }, [data, isPending]);

  const currentContentHandler = (item) => {
    setValue('file', item.file);
    setValue('content', item.content);
    setValue('category', item.category);
    setValue('id', item.id);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('file', data?.file);
    formData.append('content', data?.content);
    formData.append('category', data?.category);

    mutate(
      {
        dataContent: formData,
        id: data?.id,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Success',
            description: 'Berhasil mengupdate help-center!',
            duration: 3000,
            status: 'success',
            position: 'top',
            isClosable: true,
          });
          setReload(true);
        },
        onError: (err) => {
          console.error(err);
          toast({
            title: 'Error',
            description: err?.response?.data?.errors || `Something went wrong!`,
            duration: 3000,
            status: 'error',
            position: 'top',
            isClosable: true,
          });
        },
      }
    );
  };

  return (
    <>
      <ChangeContactModalWithNoSSR isOpen={isOpen} onClose={onClose} />
      <Box className={styles['help-center-container']}>
        <Flex align={'start'} height={'100%'}>
          <Box className={styles['help-center-left-wrapper']}>
            <Box>
              <Text className={styles['help-center-title']}>Help Center</Text>
              <Image
                className={styles['help-center-img']}
                src={'/images/faq-icon.png'}
              />
              {!isPending &&
                data?.map((item, index) => (
                  <Text
                    onClick={() => currentContentHandler(item)}
                    key={index}
                    className={
                      watch('id') === item?.id
                        ? styles['help-center-active-text']
                        : styles['help-center-inactive-text']
                    }
                  >
                    {item.category}
                  </Text>
                ))}
            </Box>
            <Box>
              <Button
                onClick={onOpen}
                className={styles['help-center-edit-btn']}
              >
                Edit
              </Button>
              <Text className={styles['help-center-ask-text']}>
                Apa yang bisa kami bantu?
              </Text>
              <Flex align={'center'}>
                <Text
                  className={styles['help-center-info']}
                  mr={'2rem'}
                  w={'100px'}
                >
                  Hubungi Kami{' '}
                  <span style={{ fontWeight: '700', color: '#8364BA' }}>
                    (021) 2977 0020
                  </span>
                </Text>
                <Text className={styles['help-center-info']} w={'159px'}>
                  E-Mail{' '}
                  <span style={{ fontWeight: '700', color: '#8364BA' }}>
                    scaleup@metranet.co.id
                  </span>
                </Text>
              </Flex>
              <Flex align={'center'} mt={'1.5rem'}>
                <Image
                  className={styles['help-center-whatsapp-icon']}
                  src={'/images/Whatsapp.png'}
                />
                <Text
                  className={styles['help-center-info']}
                  margin={'0 14px 0 8px'}
                >
                  Admin Scala
                </Text>
                <Text
                  className={styles['help-center-info']}
                  style={{ fontWeight: '700', color: '#8364BA' }}
                >
                  Fast Response
                </Text>
              </Flex>
            </Box>
          </Box>
          <Box className={styles['help-center-right-wrapper']}>
            {isEditQuestion ? (
              <>
                <Box>
                  <Flex
                    align={'center'}
                    justify={'space-between'}
                    width={'100%'}
                    mb={'3rem'}
                  >
                    <Text className={styles['help-center-right-title']}>
                      {watch('category')}
                    </Text>
                    <Flex align={'center'}>
                      <Button
                        onClick={() => setIsEditQuestion(false)}
                        mb={'0'}
                        className={styles['help-center-back-btn']}
                      >
                        Back
                      </Button>
                      <Button
                        onClick={handleSubmit(onSubmit)}
                        mb={'0'}
                        className={styles['help-center-edit-btn']}
                      >
                        Save
                      </Button>
                    </Flex>
                  </Flex>
                  <ReactQuill
                    theme="snow"
                    value={watch('content')}
                    onChange={(value) => setValue('content', value)}
                    style={{ margin: '1.5rem 0 4rem', height: '526px' }}
                  />
                </Box>
                {!storedFile ? (
                  <Flex
                    onClick={handleClick}
                    className={styles['help-center-upload-container']}
                  >
                    <Image
                      className={styles['help-container-upload-img']}
                      src={'/images/Group (4).png'}
                    />
                    <Box marginLeft={'1rem'}>
                      <Text className={styles['help-container-upload-title']}>
                        Drop files her or click to upload
                      </Text>
                      <Text className={styles['help-container-upload-text']}>
                        File supported : PDF, Maksimal 1 file and 10 MB
                      </Text>
                    </Box>
                    <Input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                  </Flex>
                ) : (
                  <Flex
                    onClick={handleClick}
                    className={styles['help-center-uploaded-container']}
                  >
                    <Flex align={'center'}>
                      <Image
                        className={styles['help-center-uploaded-img']}
                        src={'/images/doc.circle.png'}
                      />
                      <Text className={styles['help-center-uploaded-text']}>
                        {storedFile.name}
                      </Text>
                    </Flex>
                    <Flex flexDir={'column'} align={'center'}>
                      <ArrowUpIcon />
                      <Text
                        className={styles['help-center-uploaded-reupload-text']}
                      >
                        Re-upload
                      </Text>
                    </Flex>
                    <Input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                      accept=".pdf"
                    />
                  </Flex>
                )}
              </>
            ) : (
              <>
                <Box>
                  <Flex
                    align={'center'}
                    justify={'space-between'}
                    width={'100%'}
                    mb={'3rem'}
                  >
                    <Text className={styles['help-center-right-title']}>
                      {watch('category')}
                    </Text>
                    <Button
                      onClick={() => setIsEditQuestion(true)}
                      mb={'0'}
                      className={styles['help-center-edit-btn']}
                    >
                      Edit
                    </Button>
                  </Flex>
                  <Box mb={'2rem'}>
                    <Text
                      dangerouslySetInnerHTML={{
                        __html: watch('content'),
                      }}
                      className={styles['help-center-right-text']}
                    />
                  </Box>
                </Box>
                {watch('file') && (
                  <Flex className={styles['help-center-file-container']}>
                    <Image
                      className={styles['help-center-pdf-icon']}
                      src={'/images/PDF.png'}
                    />
                    <Box margin={'0 1.5rem 0 0.1rem'}>
                      <Text className={styles['help-center-file-title']}>
                        {watch('file')}
                      </Text>
                      {/* <Text className={styles["help-center-file-text"]}>
                        2.4MB / 10MB
                      </Text> */}
                    </Box>
                    <Image
                      className={styles['help-center-cloud-icon']}
                      src={'/images/Download From Cloud.png'}
                    />
                  </Flex>
                )}
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HelpCenter;
