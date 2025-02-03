import { Gap } from '@/app/components/atoms';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

const columns = (page, onPress) => {
  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '65px',
      wrap: true,
    },
    {
      name: 'Digital Product',
      selector: (row) => row.product_digital_name,
      wrap: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      wrap: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <Flex alignItems="center" justify="space-between">
          <Box cursor='pointer'>
            <EditIcon width={4} height={4} color='#AE445A' onClick={() => onPress('EDIT', row)} />
          </Box>
          <Gap width={2} />
          <Box cursor='pointer'>
            <DeleteIcon width={4} height={4} color='#AE445A' onClick={() => onPress('DELETE', row)} />
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
