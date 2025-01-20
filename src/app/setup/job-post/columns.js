import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Gap } from '@/app/components/atoms';

const columns = (page, onChangeStatus, onPressEdit) => {
  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '65px',
    },
    {
      name: 'Pengalaman', selector: (row) => row.experience_name ||
        row.education_name ||
        row.job_specialist_name ||
        row.job_level_name ||
        row.job_location_name ||
        row.benefit_name || '-'
    },
    {
      name: 'Status',
      cell: (row) => (
        <Flex alignItems="flex-start" justify="flex-start">
          <FormControl
            display="flex"
            alignItems="center"
            marginLeft={2}
            onChange={(e) => (row.id, e.target.checked)}
            justifyContent={'space-between'}>
            <FormLabel htmlFor={`action-${row.id}`} mb="0" marginLeft={2} fontSize={12}>
              {row.status === 'Active' ? 'On' : 'Off'}
            </FormLabel>
            <Switch id={`action-${row.id}`} isChecked={row.status === 'Active'} onChange={(e) => onChangeStatus(row.id, e.target.checked)} />
          </FormControl>
        </Flex>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    },
    {
      name: 'Action',
      cell: (row) => (
        <Flex alignItems="center" justify="center">
          <Box onClick={() => onPressEdit(row.id, row.experience_name ||
            row.education_name ||
            row.job_specialist_name ||
            row.job_level_name ||
            row.job_location_name ||
            row.benefit_name)} cursor='pointer'>
            <EditIcon width={18} height={18} color='#AE445A' />
          </Box>
          <Gap width={2} />
          <Box onClick={() => onPressEdit(row.id, row.experience_name ||
            row.education_name ||
            row.job_specialist_name ||
            row.job_level_name ||
            row.job_location_name ||
            row.benefit_name)} cursor='pointer'>
            <DeleteIcon width={5} height={5} color='#AE445A' />
          </Box>
        </Flex>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
};

export default columns;
