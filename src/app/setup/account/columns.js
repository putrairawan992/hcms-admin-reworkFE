import { Gap } from '@/app/components/atoms';
import { formatRupiah } from '@/app/utils/helpers';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';

const columns = (page) => {
  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '65px',
      wrap: true,
    },
    {
      name: 'Foto Perusahaan',
      selector: (row) => row.service,
      sortable: true,
      wrap: true,
    },
    {
      name: 'Digital Product',
      selector: (row) => row.jenis_client,
      wrap: true,
    },
    {
      name: 'Username',
      selector: (row) => row.client,
      wrap: true,
    },
    {
      name: 'Email',
      selector: (row) => row.product_digital,
      wrap: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <Flex alignItems="center" justify="space-between">
          <Box cursor='pointer'>
            <EditIcon width={4} height={4} color='#AE445A' />
          </Box>
          <Gap width={2} />
          <Box cursor='pointer'>
            <DeleteIcon width={4} height={4} color='#AE445A' />
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
