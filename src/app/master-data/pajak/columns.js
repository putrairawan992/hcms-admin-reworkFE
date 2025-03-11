import { formatRupiah } from '@/app/utils/helpers';

const columns = (page) => {
  return [
    {
      name: 'No',
      selector: (row, index) => 10 * (page - 1) + index + 1,
      sortable: true,
      width: '65px',
      wrap: true,
    },
    // {
    //   name: 'Service',
    //   selector: (row) => row.service,
    //   sortable: true,
    //   wrap: true,
    //   width: '150px',
    // },
    {
      name: 'Tahun',
      selector: (row) => row.tahun,
      sortable: true,
    },
    {
      name: 'Bulan',
      selector: (row) => row.bulan,
      sortable: true,
    },
    {
      name: 'Jenis Client',
      selector: (row) => row.jenis_client,
      wrap: true,
      width: '185px',
    },
    {
      name: 'Client',
      selector: (row) => row.client,
      wrap: true,
      width: '185px',
    },
    {
      name: 'Product Digital',
      selector: (row) => row.job_provider?.name,
      wrap: true,
      width: '185px',
    },
    { name: 'Skema', selector: (row) => row.skema, wrap: true, width: '150px' },
    {
      name: 'Employee Status',
      selector: (row) => row.employment_status,
      wrap: true,
      width: '185px',
    },
    {
      name: 'NIK Metranet',
      selector: (row) => row.nik_metranet,
      wrap: true,
      width: '150px',
    },
    // {
    //   name: 'NIK KTP',
    //   selector: (row) => row.nik_ktp || '-',
    //   wrap: true,
    //   width: '150px',
    // },
    {
      name: 'Nama',
      selector: (row) => row.name,
      wrap: true,
      width: '200px',
    },
    {
      name: 'Nilai',
      selector: (row) => formatRupiah(row.nilai),
      wrap: true,
      width: '185px',
    },
  ];
};

export default columns;
