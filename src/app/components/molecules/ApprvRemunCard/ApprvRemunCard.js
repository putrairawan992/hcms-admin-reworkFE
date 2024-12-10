import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styles from './ApprvRemunCard.styles';
import moment from 'moment';
import { ChatIcon } from "@/app/components/icons";
import { noop } from '@/app/utils/helpers';

const ApprvRemunCard = ({ data = [], onClickDetail = noop, onClickIcon = noop }) => {
  const onHandlePressDetail = () => {
    onClickDetail()
  };

  const onHandlePressIcon = () => {
    onClickIcon();
  };

  return (
    <Flex
      justifyContent='space-between'
      style={styles.wrapper}>
      <Box style={styles.imgWrapper}>
        <Image
          style={styles.img}
          src="/images/company-dummy.jpeg"
          alt="image"
        />
      </Box>
      <Text style={styles.title}>
        {data?.product_digital_name || '-'}
      </Text>
      <Text style={styles.subtitle}>{moment(data?.created_at).utcOffset("+07:00").format("MMM YYYY")}</Text>
      <Flex flex={1}>
        <Box borderWidth={1} borderColor='#AE445A' paddingX={6} paddingY={2} borderRadius={10}>
          <Text style={styles.subtitle}>{data?.status}</Text>
        </Box>
      </Flex>
      <Box flex={1}>
        <ChatIcon style={styles.icon} onClick={onHandlePressIcon} />
      </Box>
      <Button style={styles.button} onClick={onHandlePressDetail}>Detail</Button>
    </Flex>
  );
}

export default ApprvRemunCard;