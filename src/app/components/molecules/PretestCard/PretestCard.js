import { Gap } from '../../atoms';
import { Box, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const TalentListCard = ({
  bgGradient = 'linear-gradient(90deg, #3AB471 0%, #AE445A 100%)',
  data = [],
  handleDelete,
  icon = null,
  id = '',
  placeholder = '',
  title = '',
  category_id = '',
  switchState,
  handleSwitchChange,
  loadingSwitch,
}) => {
  const router = useRouter();
  return (
    <Box justifyContent="center">
      <FormControl display="flex" alignItems="center" marginLeft={2}>
        <Switch
          isChecked={switchState[`${category_id}-${id}`] || false}
          onChange={() => handleSwitchChange(category_id, id)}
          isDisabled={loadingSwitch}
        />
        <FormLabel htmlFor="action" mb="0" marginLeft={1} fontSize={12}>
          Pilih {title}
        </FormLabel>
      </FormControl>
      <Gap height={2} />
      <Box
        borderWidth={1}
        borderColor="#EAEAEA"
        borderRadius={8}
        alignItems="center"
        justifyContent="center"
        bgGradient={bgGradient}
        textAlign="center"
        position={'relative'}
        width={223}
        p={1}
        height={142}>
        <Box
          position={'absolute'}
          right={'4px'}
          p={2}
          gap={3}
          display={'flex'}
          alignItems={'center'}>
          <EditIcon
            color={'white'}
            fontSize={'12px'}
            className=" cursor-pointer"
            onClick={() => router.push(`/pre-test-mitra/add?id=${id}`)}
          />
          <DeleteIcon
            color={'white'}
            fontSize={'12px'}
            className=" cursor-pointer"
            onClick={() =>
              handleDelete({
                category_id: category_id,
                pretest_modul_detail_id: id,
              })
            }
          />
          {/* <ViewIcon
            color={'white'}
            fontSize={'12px'}
            className=" cursor-pointer"
          /> */}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={'100%'}
          height={'100%'}
          justifyContent="center">
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
