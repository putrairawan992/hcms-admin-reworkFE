import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';

const TalentListCard = ({ data = {}, onPress = noop }) => {
  const {
    id,
    name,
    photo,
    salary_expectation,
    experience,
    education,
    created_at,
    score_average,
  } = data;

  const onHandlePress = () => {
    onPress(id);
  };

  return (
    <Flex marginBottom={4}>
      <Flex
        flex={1}
        style={{
          borderWidth: 2,
          borderColor: '#AE445A',
          borderRadius: 16,
          padding: 16,
        }}
        alignItems="center"
        onClick={onHandlePress}
        cursor="pointer">
        <Image
          style={{ width: 80, height: 80, borderRadius: 5, objectFit: 'cover' }}
          src={photo || '/images/profile.png'}
          alt={name || 'Talent photo'}
          fallbackSrc="/images/profile.png"
        />
        <Gap width={4} />
        <Box flex={1}>
          <Text color="#404041" fontWeight={700} fontSize={16}>
            {name || 'Unnamed Talent'}
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            {education || 'No education data'}
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            {experience || 'No experience data'}
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            Skor: {score_average || 0}
          </Text>
          <Text color="#404041" fontWeight={400} fontSize={12}>
            Ekspektasi Gaji: Rp{' '}
            {salary_expectation?.toLocaleString('id-ID') || '0'}
          </Text>
        </Box>
        <Text color="#404041" fontWeight={400} fontSize={14}>
          {created_at || 'No date available'}
        </Text>
      </Flex>
    </Flex>
  );
};

export default TalentListCard;
