import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import styles from './PenilaianDocumentCard.styles';

const PenilaianDocumentCard = ({
  data = [],
  onPress = noop,
  setNilai,
  nilai,
}) => {
  const today = new Date();
  const day = today.getDate(); // Returns the day of the month (1-31)
  const month = today.getMonth(); // Returns the month (0-11)
  const year = today.getFullYear(); // Returns the full year (e.g., 2025)

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const monthName = monthNames[month];

  const formattedDate = `${day} ${monthName} ${year}`;

  return (
    <Box
      borderWidth={2}
      borderColor="#AE445A"
      borderRadius={16}
      padding={4}
      flex={1}>
      <Flex>
        <Text color="#404041" fontWeight={400} fontSize={12}>
          1.{' '}
        </Text>
        <Gap width={2} />
        <Text color="#404041" fontWeight={400} fontSize={12}>
          {data.question ? data.question.replace(/<[^>]*>/g, '') : 'test soal'}
        </Text>
      </Flex>
      <Gap height={4} />
      <Flex>
        <Text color="#404041" fontWeight={700} fontSize={12}>
          {data.is_file && data.answer
            ? data.answer.split('/').pop()
            : 'Jawaban_soal_1.mp4'}
        </Text>
        <Gap width={4} />
        <Text color="#404041" fontWeight={400} fontSize={12}>
          {formattedDate}
        </Text>
      </Flex>
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
          value={nilai}
          onChange={(e) => setNilai(e.target.value)}
        />
      </Flex>
    </Box>
  );
};

export default PenilaianDocumentCard;
