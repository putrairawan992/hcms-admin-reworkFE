import React from 'react';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { noop } from '@/app/utils/helpers';
import { Gap } from '../../atoms';

const MitraListCard = ({ data = [], onPress = noop, isDetail = false }) => {
  return (
    <Box marginBottom={4}>
      {data?.map((item, index) => {
        return (
          <Flex
            flex={1}
            marginBottom={2}
            key={index}
            style={{
              borderWidth: 2,
              borderColor: '#EAEAEA',
              borderRadius: 16,
              padding: 16,
            }}
            alignItems="center">
            <Image
              style={{
                width: 48,
                height: 48,
                borderRadius: 100,
                alignSelf: 'flex-start',
              }}
              src="/images/company-dummy.jpeg"
              alt="image"
            />
            <Gap width={8} />
            <Box flex={1}>
              <Flex justify="space-between" alignItems="center">
                <Box>
                  <Text color="#404041" fontWeight={400} fontSize={12}>
                    Nama Mitra
                  </Text>
                  <Text color="#404041" fontWeight={700} fontSize={12}>
                    {item?.name}
                  </Text>
                </Box>
                <Box>
                  <Text color="#404041" fontWeight={400} fontSize={12}>
                    Username
                  </Text>
                  <Text color="#404041" fontWeight={700} fontSize={12}>
                    {item?.username}
                  </Text>
                </Box>
                <Box>
                  <Text color="#404041" fontWeight={400} fontSize={12}>
                    Email
                  </Text>
                  <Text color="#404041" fontWeight={700} fontSize={12}>
                    {item?.email}
                  </Text>
                </Box>
                {!isDetail && (
                  <Box>
                    <Text
                      color="#404041"
                      fontWeight={400}
                      fontSize={14}
                      textDecoration="underline">
                      Detail
                    </Text>
                  </Box>
                )}
              </Flex>

              {isDetail && (
                <React.Fragment>
                  <Gap height={4} />
                  <Divider borderWidth={1} borderColor="#EAEAEA" />
                  <Gap height={4} />
                  <Flex justify="space-between" alignItems="center">
                    <Box>
                      <Text color="#AE445A" fontWeight={700} fontSize={14}>
                        Diundang
                      </Text>
                      <Text color="#AE445A" fontWeight={700} fontSize={12}>
                        0
                      </Text>
                    </Box>
                    <Box>
                      <Text color="#AE445A" fontWeight={700} fontSize={14}>
                        Diproses
                      </Text>
                      <Text color="#AE445A" fontWeight={700} fontSize={12}>
                        0
                      </Text>
                    </Box>
                    <Box>
                      <Text color="#AE445A" fontWeight={700} fontSize={14}>
                        Terpilih
                      </Text>
                      <Text color="#AE445A" fontWeight={700} fontSize={12}>
                        0
                      </Text>
                    </Box>
                    <Box>
                      <Text color="#AE445A" fontWeight={700} fontSize={14}>
                        Tidak Terpilih
                      </Text>
                      <Text color="#AE445A" fontWeight={700} fontSize={12}>
                        0
                      </Text>
                    </Box>
                  </Flex>
                </React.Fragment>
              )}
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default MitraListCard;
