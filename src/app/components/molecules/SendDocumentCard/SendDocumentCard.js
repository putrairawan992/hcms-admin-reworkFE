import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import styles from './SendDocumentCard.styles';
import { DownloadIcon, EyeIcon } from '../../icons';
import moment from 'moment';

const SendDocumentCard = ({ data = [] }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="none" key={1}>
        <h2>
          <AccordionButton
            background={"#8364BA"}
            style={styles.wrapper}>
            <Box style={styles.imgWrapper}>
              <Image
                style={styles.img}
                src="/images/company-dummy.jpeg"
                alt="image"
              />
            </Box>
            <Text style={styles.title}>
              Lakley
            </Text>
            <Text style={styles.subtitle}>Mei 2023</Text>
            <EyeIcon />
            <Text style={[styles.subtitle], { color: '#AE445A' }}>Approved</Text>
            <DownloadIcon />
            <Flex align={"center"}>
              <Text
                style={styles.subtitle}
                margin={"0 1rem"}
              >
                {/* {moment(item.schedule).format("HH:mm")} */}
                12 dec 2021
              </Text>
              <Text style={styles.subtitle}>
                {/* {moment(item.schedule).locale("en").format("A")} */}
                12 dec 2021
              </Text>
            </Flex>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text
            dangerouslySetInnerHTML={{
              __html: 'hello',
            }}
          />
          <Flex justify={"end"}>
            <Button
              style={styles.button}
              alignSelf={"end"}
              mt={"1.5rem"}
            >
              Reply
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default SendDocumentCard;