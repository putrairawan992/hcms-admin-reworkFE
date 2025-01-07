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
    {
      name: 'Service',
      selector: (row) => row.service,
      sortable: true,
      wrap: true,
      width: '150px',
    },
    { name: 'Tahun', selector: (row) => row.tahun, sortable: true },
    { name: 'Bulan', selector: (row) => row.bulan, sortable: true },
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
      selector: (row) => row.product_digital,
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
    { name: 'Nama', selector: (row) => row.nama, wrap: true, width: '200px' },
    {
      name: 'NPP',
      selector: (row) => row.npp || '-',
      wrap: true,
      width: '185px',
    },
    {
      name: 'Hubungan Keluarga',
      selector: (row) => row.hubungan_keluarga || '-',
      wrap: true,
      width: '185px',
    },
    {
      name: 'Premi Karyawan',
      selector: (row) => formatRupiah(row.premi_karyawan),
      wrap: true,
      width: '185px',
    },
    {
      name: 'Premi Perusahaan',
      selector: (row) => formatRupiah(row.premi_perusahaan),
      wrap: true,
      width: '185px',
    },
    {
      name: 'Total Premi',
      selector: (row) => formatRupiah(row.total_premi),
      wrap: true,
      width: '185px',
    },
  ];
};

export default columns;
