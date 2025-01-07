import React from 'react';
import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import styles from './PenilaianEssayCard.styles';

const PenilaianEssayCard = ({ data = [], onPress = noop }) => {
  return (
    <Box
      borderWidth={2}
      borderColor="#AE445A"
      borderRadius={16}
      padding={4}
      flex={1}
    >
      <Flex>
        <Text color="#404041" fontWeight={400} fontSize={12}>
          1.{' '}
        </Text>
        <Gap width={2} />
        <Text color="#404041" fontWeight={400} fontSize={12}>
          Soal nomor satu, jabarkan/tulis essai mengenai apa gitu
        </Text>
      </Flex>
      <Gap height={2} />
      <Box borderWidth={1} borderColor="#AE445A" borderRadius={10}>
        <Box
          bgGradient="linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)"
          paddingY={3}
          paddingX={4}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
        >
          <Text color="#FFFFFF" fontSize={16} fontWeight="700">
            Jawaban
          </Text>
        </Box>
        <Box padding={4}>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            interdum ornare eros sed aliquam. Proin sed tellus ac leo ornare
            dictum at rutrum lorem. Cras bibendum enim quis erat fermentum
            elementum. Phasellus lobortis in velit et varius. Aliquam sit amet
            eros porta enim vulputate sagittis. Fusce convallis nulla eget quam
            porttitor, eu efficitur ante ultricies. Integer lobortis lectus et
            viverra semper. Fusce posuere risus in est sodales dictum. Nulla at
            mi elit. Morbi egestas quam non nisi porta, a aliquet massa sodales.
            Mauris ac tempus ligula. Ut pulvinar feugiat quam quis posuere.
            Mauris est nulla, imperdiet et dui in, ornare porta dui.
          </Text>
        </Box>
      </Box>
      <Gap height={4} />
      <Box borderWidth={1} borderColor="#AE445A" />
      <Gap height={4} />
      <Flex justify="center" align="center">
        <Box flex={1}>
          <Text color="#404041" fontWeight={700} fontSize={12} flex={1}>
            Score :{' '}
          </Text>
        </Box>
        <Input
          style={styles.inputContainer}
          type="number"
          placeholder="Masukan nilai - 100"
        />
      </Flex>
    </Box>
  );
};

export default PenilaianEssayCard;
