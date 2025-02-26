'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  Box,
  useToast,
  Spinner,
  Divider,
} from '@chakra-ui/react';
import styles from '../../../styles/confirmationModal.module.css';
import { noop } from '@/app/utils/helpers';
import { Gap } from '@/app/components/atoms';
import { months } from '@/shared/general';

const ModalTalentCostAll = ({
  isOpen = false,
  onClose = noop,
  size = '6xl',

  data = {},
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size} isCentered>
      <ModalOverlay />
      <ModalContent padding={5} rounded={20}>
        <ModalBody>
          <Box>
            <Flex gap={2} justifyContent={'space-between'}>
              <Flex gap={2}>
                <Text color="#AE445A" fontSize={18} fontWeight="bold">
                  Talent Cost
                </Text>
                <Text color="#5a6a85" fontSize={18} fontWeight="normal">
                  (dalam ribuan)
                </Text>
              </Flex>
            </Flex>

            <Gap height={4} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={12} fontWeight="bold" flex={1}>
                Status
              </Text>
              {months.map((item) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={12}
                  align={'center'}
                  fontWeight="bold">
                  {item?.label}
                </Text>
              ))}
            </Flex>

            <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                THP
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.gaji_pokok
                    ? Math.round(
                        data.talent_cost[month.key].gaji_pokok
                      )?.toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                KAK
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.kompensasi_akhir_kontrak
                    ? Math.round(
                        data.talent_cost[month.key].kompensasi_akhir_kontrak
                      )?.toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Pajak
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.pajak
                    ? Math.round(
                        data.talent_cost[month.key].pajak
                      )?.toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Other
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.other
                    ? Math.round(
                        data.talent_cost[month.key].other
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Overtime
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.overtime
                    ? Math.round(
                        data.talent_cost[month.key].overtime
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                BPJSKES
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.bpjskes
                    ? Math.round(
                        data.talent_cost[month.key].bpjskes
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                BPJSTK
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.bpjstk
                    ? Math.round(
                        data.talent_cost[month.key].bpjstk
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Rapel
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.rapel_gaji
                    ? Math.round(
                        data.talent_cost[month.key].rapel_gaji
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                THR
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.thr
                    ? Math.round(
                        data.talent_cost[month.key].thr
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Gap height={2} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Bonus
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.performance_bonus
                    ? Math.round(
                        data.talent_cost[month.key].performance_bonus
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>

            <Divider borderWidth={1} borderColor="#AE445A" marginY={3} />

            <Flex flex={1}>
              <Text color="#404041" fontSize={10} fontWeight="bold" flex={1}>
                Total Biaya
              </Text>
              {months.map((month) => (
                <Text
                  flex={1}
                  color="#404041"
                  fontSize={10}
                  fontWeight="bold"
                  align={'right'}
                  key={month.key}>
                  {data?.talent_cost?.[month.key]?.grand_total
                    ? Math.round(
                        data.talent_cost[month.key].grand_total
                      ).toLocaleString('en-EN')
                    : 0}
                </Text>
              ))}
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalTalentCostAll;
