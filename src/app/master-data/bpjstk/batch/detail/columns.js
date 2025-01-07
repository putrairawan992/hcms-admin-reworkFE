import { formatRupiah } from "@/app/utils/helpers";
import styles from "../../styles";

const columns = (page) => {
  return [
    { name: 'No', selector: (row, index) => 10 * (page - 1) + index + 1, sortable: true, width: '65px', wrap: true },
    { name: 'Service', selector: (row) => row.service, sortable: true, wrap: true, width: '150px' },
    { name: 'Tahun', selector: (row) => row.tahun, sortable: true },
    { name: 'Bulan', selector: (row) => row.bulan, sortable: true },
    { name: 'Jenis Client', selector: (row) => row.jenis_client, wrap: true, width: '185px' },
    { name: 'Client', selector: (row) => row.client, wrap: true, width: '185px' },
    { name: 'Product Digital', selector: (row) => row.product_digital, wrap: true, width: '185px' },
    { name: 'Skema', selector: (row) => row.skema, wrap: true, width: '150px' },
    { name: 'Employee Status', selector: (row) => row.employment_status, wrap: true, width: '185px' },
    { name: 'NIK Metranet', selector: (row) => row.nik_metranet, wrap: true, width: '150px' },
    { name: 'Nama', selector: (row) => row.nama, wrap: true, width: '200px' },
    {
      name: (
        <>
          <div style={styles.tableCompany}>
            <span style={styles.textTableCompany}>Perusahaan</span>
            <span>Gaji Pokok</span>
            <span>Iuran JKK (0,24%)</span>
            <span>Iuran JKM (0,30%)</span>
            <span>Iuran JHT (3,70%)</span>
            <span>Iuran JP (2,00%)</span>
            <span>Total Iuran Perusahaan</span>
          </div>
          <div style={styles.tableEmployee}>
            <span style={styles.textTableEmployee}>Karyawan</span>
            <span>Iuran JHT (3,70%)</span>
            <span>Iuran JP (2,00%)</span>
            <span>Total Iuran Karyawan</span>
          </div>
        </>
      ),
      selector: () => '', // Placeholder selector to align
      cell: (row) => (
        <>
          <div style={styles.cellCompany}>
            <span>{formatRupiah(row.gaji_pokok)}</span>
            <span>{formatRupiah(row.jkk_perusahaan)}</span>
            <span>{formatRupiah(row.jkm_perusahaan)}</span>
            <span>{formatRupiah(row.jht_perusahaan)}</span>
            <span>{formatRupiah(row.jp_perusahaan)}</span>
            <span>{formatRupiah(row.total_perusahaan)}</span>
          </div>
          <div style={styles.cellEmployee}>
            <span>{formatRupiah(row.jht_karyawan)}</span>
            <span>{formatRupiah(row.jp_karyawan)}</span>
            <span>{formatRupiah(row.total_karyawan)}</span>
          </div>
        </>
      ),
      width: '140rem',
    },
    { name: 'Sum of Total Iuran', selector: (row) => formatRupiah(row.total_iuran) || '-', wrap: true, width: '200px' },
  ]
};

export default columns