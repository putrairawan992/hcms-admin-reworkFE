import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';
import styles from './PenilaianDocumentCard.styles';

const PenilaianDocumentCard = ({
  data = {},
  onPress = noop,
  setNilai,
  nilai,
}) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();

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

  // Function to safely strip HTML tags from text
  const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  };

  // Get display filename from answer if it's a file
  const getFileName = () => {
    if (data.is_file && data.answer) {
      const parts = data.answer.split('/');
      return parts[parts.length - 1];
    }
    return null;
  };

  return (
    <Box
      borderWidth={2}
      borderColor="#AE445A"
      borderRadius={16}
      padding={4}
      flex={1}>
      <Flex>
        <Text color="#404041" fontWeight={700} fontSize={12}>
          Pertanyaan:
        </Text>
      </Flex>
      <Gap height={2} />
      <Flex>
        <Text color="#404041" fontWeight={400} fontSize={12}>
          {stripHtml(data.question) || 'Tidak ada pertanyaan'}
        </Text>
      </Flex>
      <Gap height={4} />
      <Flex>
        <Text color="#404041" fontWeight={700} fontSize={12}>
          Jawaban:
        </Text>
      </Flex>
      <Gap height={2} />
      {data.is_file ? (
        <Flex>
          <Text color="#404041" fontWeight={700} fontSize={12}>
            {getFileName() || 'File jawaban'}
          </Text>
          <Gap width={4} />
          <Text color="#404041" fontWeight={400} fontSize={12}>
            {formattedDate}
          </Text>
        </Flex>
      ) : (
        <Box>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            {stripHtml(data.answer) || 'Tidak ada jawaban'}
          </Text>
        </Box>
      )}
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
          placeholder="Masukan nilai 0 - 100"
          value={nilai !== null ? nilai : ''}
          onChange={(e) => {
            const value = e.target.value;
            // Validate input is a number between 0-100
            if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
              setNilai(value === '' ? null : Number(value));
            }
          }}
          min={0}
          max={100}
        />
      </Flex>
    </Box>
  );
};

export default PenilaianDocumentCard;
