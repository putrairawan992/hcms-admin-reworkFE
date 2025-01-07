import { useRouter } from 'next/navigation';
import { EditIcon } from '@/app/components/icons';
import { Box, Flex, FormControl, FormLabel, Switch } from '@chakra-ui/react';

const columns = (totalData, page) => {
  const router = useRouter();

  const onHandleDetail = (id) => {
    router.push(`/setup/admin-role/${id}`);
  };

  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '70px',
    },
    { name: 'Admin ID', selector: (row) => row.id, width: '250px', wrap: true },
    {
      name: 'Nama',
      selector: (row) => row.username,
      width: '250px',
      wrap: true,
    },
    { name: 'Email', selector: (row) => row.email, width: '250px', wrap: true },
    {
      name: 'Divisi',
      selector: (row) => row.email,
      width: '250px',
      wrap: true,
    },
    {
      name: 'Jabatan',
      selector: (row) => row.email,
      width: '250px',
      wrap: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <Flex alignItems="center" justify="space-between">
          <Box onClick={() => onHandleDetail(row.id)}>
            <EditIcon width={20} height={20} />
          </Box>
          <FormControl
            display="flex"
            alignItems="center"
            marginLeft={2}
            justifyContent={'space-between'}
          >
            <Switch id="action" />
            <FormLabel htmlFor="action" mb="0" marginLeft={2} fontSize={12}>
              Off
            </FormLabel>
          </FormControl>
        </Flex>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      minWidth: '150px',
    },
  ];
};

export default columns;
