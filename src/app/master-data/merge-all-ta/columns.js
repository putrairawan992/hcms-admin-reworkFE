const columns = (totalData, page) => {
  return [
    { name: 'No', selector: (row, index) => 10 * (page - 1) + index + 1, sortable: true },
    { name: 'Service', selector: (row) => row.service, sortable: true },
    { name: 'Tahun', selector: (row) => row.tahun, sortable: true },
    { name: 'Bulan', selector: (row) => row.bulan, sortable: true },
    { name: 'Jenis Client', selector: (row) => row.jenis_client },
    { name: 'Client', selector: (row) => row.client },
    { name: 'Product Digital', selector: (row) => row.product_digital },
    { name: 'Skema', selector: (row) => row.skema },
    { name: 'Employee Status', selector: (row) => row.employment_status },
    { name: 'NIK Metranet', selector: (row) => row.nik_metranet },
    { name: 'Nama', selector: (row) => row.nama },
    { name: 'NPP', selector: (row) => row.npp },
    { name: 'Hubungan Kerja', selector: (row) => row.employeeStatus },
    { name: 'Premi Karyawan', selector: (row) => row.employeeStatus },
    { name: 'Premi Perusahaan', selector: (row) => row.employeeStatus },
    { name: 'Total Premi', selector: (row) => row.employeeStatus },
  ]
};

export default columns