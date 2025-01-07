import React from 'react';
import { Gap } from '../../atoms';
import { Box, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';

const TalentListCard = ({
  data = [],
  title = '',
  placeholder = '',
  icon = null,
  bgGradient = 'linear-gradient(90deg, #3AB471 0%, #AE445A 100%)',
}) => {
  return (
    <Box justifyContent="center">
      <FormControl display="flex" alignItems="center" marginLeft={2}>
        <Switch id="action" />
        <FormLabel htmlFor="action" mb="0" marginLeft={1} fontSize={12}>
          {placeholder || '-'}
        </FormLabel>
      </FormControl>
      <Gap height={2} />
      <Box
        display="flex"
        flex={1}
        borderWidth={1}
        borderColor="#EAEAEA"
        borderRadius={8}
        padding={4}
        alignItems="center"
        justifyContent="center"
        bgGradient={bgGradient}
        textAlign="center"
        width={223}
        height={142}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
          <Gap height={3} />
          <Text fontSize={16} color="#FFFFFF" fontWeight={700}>
            {title || '-'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TalentListCard;
